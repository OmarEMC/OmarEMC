import { NextSeo } from 'next-seo'
import useTranslation from 'next-translate/useTranslation'
import { GetStaticProps, InferGetStaticPropsType } from 'next'

import Title from '@/components/Title'
import Layout from '@/components/Layout'
import ProjectCard from '@/components/ProjectCard'
import RepositoryInterface from '@/utils/RepoInterface'
import Divider from '@/components/Divider'

interface ProjectsPageProps {
  projects: RepositoryInterface[];
  error?: string | undefined;
}

export const getStaticProps: GetStaticProps<ProjectsPageProps> = async () => {
  const res = await fetch(
    `${process.env.NODE_ENV === 'development' ? 'http://localhost:1310' : process.env.NEXT_PUBLIC_URL}/api/projects`
  )
  const data = await res.json()

  if (!data || data.error) {
    return {
      props: {
        projects: [],
        error: data.error || undefined
      },
      revalidate: 60
    }
  }

  return {
    props: {
      projects: data
    },
    revalidate: 120
  }
}

function Projects ({ projects, error }: InferGetStaticPropsType<typeof getStaticProps>) {
  const { t } = useTranslation()

  return (
    <Layout prevPage="/" nextPage="/contact">
      <NextSeo
        title={t('projects:title')}
        description={t('projects:description')}
        openGraph={{
          title: t('projects:title'),
          description: t('projects:description')
        }}
      />

      <div className="w-11/12 mx-auto">
        <Title className="text-5xl">{t('projects:title')}</Title>
        <p className="mt-2 text-lg text-gray-700 font-medium font-rubik dark:text-gray-300">{t('projects:description')}</p>

        <section>
          <div className="mt-4 grid gap-4 sm:grid-cols-12">
            {projects && projects.length > 0 && (
              projects.filter((project) => !project.private).map((project) => (
                <ProjectCard project={project} key={project.name} className="sm:col-span-6 lg:col-span-4" />
              ))
            )}
          </div>
        </section>

        <Divider />

        <section>
          <Title className="text-5xl">{t('projects:private-title')}</Title>

          <div className="mt-4 grid gap-4 sm:grid-cols-12">
            {projects && projects.length > 0 && (
              projects.filter((project) => project.private).map((project) => (
                <ProjectCard project={project} key={project.name} className="sm:col-span-6 lg:col-span-4" />
              ))
            )}
          </div>
        </section>

        {(!projects || !(projects.length > 0)) && !error && (
          <h3 className="w-full underline text-center text-2xl text-primary-500 font-medium font-rubik">
            {t('projects:no-projects')}
          </h3>
        )}

        {error && (
          <div className="p-4 selection:bg-red-500 selection:text-white border border-red-400 text-red-500 bg-white rounded-lg w-full font-mono">
            <span className="font-semibold">API Error:</span> {error}
          </div>
        )}
      </div>
    </Layout>
  )
}

export default Projects
