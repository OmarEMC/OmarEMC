import { NextSeo } from 'next-seo'
import useTranslation from 'next-translate/useTranslation'
import { GetStaticProps, InferGetStaticPropsType } from 'next'

import { ReposAPI } from 'lib/repos-api'
import Layout from '@/components/Layout'
import { ProjectsPage, ProjectsPageProps } from '@/components/ProjectsPage'

function Projects ({ repos, error }: InferGetStaticPropsType<typeof getStaticProps>) {
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

      <ProjectsPage repos={repos} error={error} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps<ProjectsPageProps> = async () => {
  const { data, error } = await ReposAPI.getAll()

  if (!data && error) {
    return {
      props: {
        error,
        repos: []
      },
      revalidate: 60
    }
  }

  return {
    props: {
      repos: data!.sort((a, b) => new Date(a.created_at) < new Date(b.created_at) ? -1 : 1)
    },
    revalidate: 120
  }
}

export default Projects
