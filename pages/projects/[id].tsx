import Link from 'next/link'
import Image from 'next/image'
import { useMemo } from 'react'
import { NextSeo } from 'next-seo'
import { motion } from 'framer-motion'
import { GetStaticPaths, GetStaticProps } from 'next'
import useTranslation from 'next-translate/useTranslation'
import { FiArrowLeft, FiGithub, FiGlobe, FiLink, FiStar, FiArchive, FiCode } from 'react-icons/fi'

import Title from '@/components/Title'
import Layout from '@/components/Layout'
import { ReposAPI } from 'lib/repos-api'
import LangCard from '@/components/LangCard'
import { ProjectsAPI } from 'lib/projects-api'
import { languages } from '@/utils/static-data'
import SocialItem from '@/components/SocialItem'
import { fromNow, limitString } from '@/utils/index'
import { Project } from '@/utils/interfaces/Project'
import RepositoryInterface from '@/utils/interfaces/RepoInterface'

interface ProjectPageProps {
  project: Project;
  repo: RepositoryInterface;
  error?: string;
  locale: string;
}

function ProjectPage ({ project, repo, locale }: ProjectPageProps) {
  const { t, lang } = useTranslation()

  const transInfo = useMemo(() => ({
    title: project?.[`${locale}_title` as keyof Project] as string,
    description: project?.[`${locale}_description` as keyof Project] as string,
    learned: project?.[`${locale}_learned` as keyof Project] as string
  }), [project, locale])

  const lastUpdated = useMemo(() => fromNow(repo.pushed_at, Date.now(), new Intl.RelativeTimeFormat(lang, { numeric: 'auto' })), [project, lang])
  const createdAt = useMemo(() => fromNow(repo.created_at, Date.now(), new Intl.RelativeTimeFormat(lang, { numeric: 'auto' })), [project, lang])

  return (
    <>
      <Layout prevPage="/projects" nextPage="/contact">
        <NextSeo
          title={transInfo.title || repo.name}
          description={limitString(transInfo.description, 100) || repo.description}
          openGraph={{
            title: transInfo.title || repo.name,
            description: limitString(transInfo.description, 100) || repo.description,
            images: [
              { url: project.image, height: 1920, width: 1080, alt: transInfo.title }
            ]
          }}
        />

        <div className="m-auto sm:max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-6xl">
          <header>
            <section className="my-4">
              <Link href="/projects" passHref>
                <a className="flex items-center transition-opacity duration-300 border-b-2 border-gray-600 hover:opacity-60 w-max pr-4 font-medium gap-2">
                  <FiArrowLeft />
                  Back to projects
                </a>
              </Link>
            </section>

            <section className="aspect-video sm:w-full sm:h-96">
              <motion.div
                layoutId={`project-${repo.name}-header-image`}
                transition={{ type: 'spring', damping: 30, stiffness: 200 }}
                className="relative w-full h-full rounded-lg border-2 border-gray-300 dark:border-gray-200"
              >
                <Image
                  layout="fill"
                  priority={true}
                  draggable={false}
                  placeholder="blur"
                  src={project.image}
                  alt={`${repo.name} Image`}
                  blurDataURL={project.image}
                  className="rounded-lg object-cover"
                />
              </motion.div>
            </section>

            <div className="flex gap-4 mt-4">
              <section className="flex-1 flex gap-2">
                <motion.div
                  layoutId={`project-${repo.name}-name`}
                  transition={{ type: 'spring', damping: 30, stiffness: 200 }}
                >
                  <Title className="text-3xl xs:text-5xl">
                    {transInfo.title}
                  </Title>
                </motion.div>

                <SocialItem title="Github" icon={FiGithub} link={repo.html_url} />
                {repo.homepage && (
                  <SocialItem title="Website" icon={FiGlobe} link={repo.homepage} />
                )}
                {(project.links || []).map((link, index) => (
                  <SocialItem key={index} title={link} icon={FiLink} link={link} />
                ))}
              </section>

              <section>
                <div className="flex items-center gap-1">
                  <FiStar className="text-primary-500" />
                  <span className="font-rubik text-primary-500" title="Stars">{repo.stargazers_count}</span>
                </div>

                {repo.archived && (
                  <div className="flex items-center gap-1">
                    <FiArchive className="text-primary-500" />
                    <span className="font-rubik text-primary-500">
                      {t('projects:archived')}
                    </span>
                  </div>
                )}

                <div className="flex items-center gap-1">
                  <FiCode className="text-primary-500" />
                  <span className="font-rubik text-primary-500">
                    {repo.language}
                  </span>
                </div>
              </section>
            </div>
          </header>

          <main className="mt-4">
            <p className="font-medium">
              {transInfo.description}
            </p>

            <div className="mt-4">
              <p className="text-lg font-bold text-gray-600 dark:text-gray-300"># {t('projects:technologies-title')}</p>
              <ul className="flex gap-4">
                {(project.technologies || []).map((tech, index) => (
                  <li key={index} className="flex items-center">
                    <LangCard lang={languages.find((lang) => lang.name.toLowerCase() === tech.toLowerCase()) || tech} />
                  </li>
                ))}
              </ul>
            </div>

            <blockquote className="mt-4 border-l-2 p-2 border-gray-500">
              <small className="opacity-60">
                {transInfo.learned}
              </small>
            </blockquote>
          </main>

          <footer className="flex items-center">
            <section className="flex-1"></section>

            <section className="flex font-medium text-gray-400 dark:text-gray-500 gap-4">
              <span>
                {t('projects:created-at')} {createdAt}
              </span>

              <span>
                {t('projects:last-updated')} {lastUpdated}
              </span>
            </section>
          </footer>
        </div>
      </Layout>
    </>
  )
}

export const getStaticPaths: GetStaticPaths<{ id: string }> = async ({ locales }) => {
  const { data } = await ReposAPI.getAll()

  const paths = locales
    ?.filter((locale: string) => locale !== 'default')
    .map((locale) => {
      return data!.map((repo) => ({ locale, params: { id: repo.name } }))
    })

  return {
    paths: data ? paths!.flat() : [],
    fallback: false
  }
}

export const getStaticProps: GetStaticProps<ProjectPageProps, { id: string }> = async ({ params, locale }) => {
  const { data: repo } = await ReposAPI.getById(params!.id)
  const { project } = await ProjectsAPI.getById(params!.id)

  return {
    props: {
      repo: repo!,
      project: project!,
      locale: locale!
    },
    revalidate: 120
  }
}

export default ProjectPage
