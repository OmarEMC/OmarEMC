import Trans from 'next-translate/Trans'

import Title from './Title'
import { useProjects } from '@/hooks/useProjects'
import { ProjectContainer } from './ProjectContainer'
import useTranslation from 'next-translate/useTranslation'
import RepositoryInterface from '@/utils/interfaces/RepoInterface'

export interface ProjectsPageProps {
  repos: RepositoryInterface[];
  error?: string | undefined;
}

export function ProjectsPage ({
  repos,
  error
}: ProjectsPageProps) {
  const { t } = useTranslation()
  const { projects, error: projectsError } = useProjects()

  return (
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
                loading={!projects && !projectsError}
                project={projects?.find((project) => project.id === repo.name)}
              />
            ))
          )}
        </div>
      </section>

      {repos && !repos.length && !error && (
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
  )
}
