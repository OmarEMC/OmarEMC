import { NextSeo } from 'next-seo'
import useTranslation from 'next-translate/useTranslation'
import { GetStaticProps, InferGetStaticPropsType } from 'next'

import Title from '@/components/Title'
import Layout from '@/components/Layout'
import Trans from 'next-translate/Trans'
import { useProjects } from '@/hooks/useProjects'
import RepositoryInterface from '@/utils/interfaces/RepoInterface'
import { ProjectContainer } from '@/components/ProjectContainer'

interface ProjectsPageProps {
  repos: RepositoryInterface[];
  error?: string | undefined;
}

function Projects ({ repos, error }: InferGetStaticPropsType<typeof getStaticProps>) {
  const { t } = useTranslation()
  const { projects } = useProjects();

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
        <p className="mt-2 text-lg text-gray-700 font-medium font-rubik dark:text-gray-300">
          <Trans
            i18nKey="projects:description"
            components={{
              br: <br />,
              supabase: <a className="transition-colors text-primary-400 hover:text-primary-500 hover:dark:text-primary-300" href="https://supabase.com/" target="_blank" rel="noopener noreferrer">supabase</a>
            }}
          />
        </p>

        <section className="mt-6">
          <div className="mt-4 grid gap-y-10 sm:grid-cols-12 md:grid-cols-6 lg:grid-cols-12 2xl:gap-y-20">
            {repos && repos.length > 0 && (
              repos.map((repo, i) => (
                <ProjectContainer
                  index={i}
                  repo={repo}
                  key={repo.id}
                  nextRepo={repos[i + 1]}
                  project={projects?.find((project) => project.id === repo.name)}
                />
              ))
            )}
          </div>
        </section>

        {(!repos || !(repos.length > 0)) && !error && (
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

export const getStaticProps: GetStaticProps<ProjectsPageProps> = async () => {
  const res = await fetch(
    `${process.env.NODE_ENV === 'development' ? 'http://localhost:1310' : process.env.NEXT_PUBLIC_URL}/api/repos`
  )
  const data = await res.json()

  if (!data || data.error) {
    return {
      props: {
        repos: [],
        error: data.error || undefined
      },
      revalidate: 60
    }
  }

  return {
    props: {
      repos: (data as RepositoryInterface[]).sort((a, b) => new Date(a.created_at) < new Date(b.created_at) ? -1 : 1),
    },
    revalidate: 120
  }
}

export default Projects
