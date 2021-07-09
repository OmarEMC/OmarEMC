import { NextSeo } from 'next-seo'
import useTranslation from 'next-translate/useTranslation'
import { GetStaticProps, InferGetStaticPropsType } from 'next'

import Title from '@/components/Title'
import Layout from '@/components/Layout'
import ProjectCard from '@/components/ProjectCard'
import RepositoryInterface from '@/utils/RepoInterface'

interface ProjectsPageProps {
  projects: RepositoryInterface[]
}

export const getStaticProps: GetStaticProps<ProjectsPageProps> = async () => {
  const res = await fetch(
    `${process.env.NODE_ENV === 'development' ? 'http://localhost:1310' : process.env.NEXT_PUBLIC_URL}/posts`
  )
  const data = await res.json()

  if (!data) {
    return {
      props: {
        projects: []
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

function Projects ({ projects }: InferGetStaticPropsType<typeof getStaticProps>) {
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
        <p className="mt-2 text-lg text-gray-700 font-medium font-rubik">{t('projects:description')}</p>

        <div className="mt-4 grid gap-4 sm:grid-cols-12">
          {projects && projects.length > 0 && (
            projects.map((project) => (
              <ProjectCard project={project} key={project.name} className="sm:col-span-6 lg:col-span-4" />
            ))
          )}
        </div>
      </div>
    </Layout>
  )
}

export default Projects
