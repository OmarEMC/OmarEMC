import clsx from 'clsx'
import { useMemo } from 'react'
import { FiArrowUpRight, FiLink, FiLoader, FiStar } from 'react-icons/fi'

import { languages } from '@/utils/static-data'
import { Project } from '@/utils/interfaces/Project'
import RepositoryInterface from '@/utils/interfaces/RepoInterface'
import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link'
import Image from 'next/image'

interface ProjectCardProps extends React.HTMLAttributes<HTMLDivElement> {
  loading?: boolean;
  project?: Project;
  repo: RepositoryInterface;
}

function ProjectCard ({ repo, project, loading, className, ...props }: ProjectCardProps) {
  const { lang, t } = useTranslation()
  const language = useMemo(() => languages.find((lang) => lang.name.toLowerCase() === repo.language.toLowerCase()) || repo.language, [repo.language])
  const langKeys = useMemo(() => ({
    title: `${lang}_title` as keyof Project,
    learned: `${lang}_learned` as keyof Project,
    description: `${lang}_description` as keyof Project,
  }), [lang])

  const createdAt = useMemo(() => new Date(repo.created_at).toLocaleString(), [repo.created_at])

  return (
    <div
      {...props}
      className={clsx(
        'flex flex-col rounded-lg py-3 px-6 bg-white transition-shadow duration-300 shadow-md hover:shadow-lg dark:bg-gray-600',
        className,
        { 'border border-yellow-400 opacity-90': repo.archived }
      )}
      title={repo.archived ? 'Archived project' : undefined}
    >
      <header>
        <section className={!loading && !project?.image ? "hidden" : "mt-3 relative w-full aspect-video rounded-lg border-2 border-gray-300 dark:border-none"}>
          {loading && (
            <div className="w-full h-full flex flex-col justify-center items-center">
              <FiLoader className="text-5xl animate-spin" /> <p className="font-medium">Loading image...</p>
            </div>
          )}
          {project?.image && (
            <Image
              layout="fill"
              draggable={false}
              placeholder="blur"
              src={project.image}
              className="rounded-lg"
              alt={`${repo.name} Image`}
              blurDataURL={project.image}
            />
          )}
        </section>

        <section className={clsx("flex-initial flex items-center", project?.image && "mt-4")}>
          <Link passHref href={`/project/${project?.id || repo.name}`} title="View Project">
            <a className="font-bold text-xl flex items-center gap-2 flex-initial transition-colors hover:text-gray-400">
              <FiLink /> {project?.id || repo.name}
            </a>
          </Link>
          <div className="flex-1" />
          <div className="flex-initial flex gap-1 items-center text-lg" title="Stars">
            <FiStar className="text-primary-500" />
            <span className="font-rubik text-primary-500" title="Stars">{repo.stargazers_count}</span>
          </div>
        </section>
      </header>

      <main className="flex-1">
        <p className="text-gray-600 font-medium dark:text-gray-200">
          {project ? project[langKeys.description] : repo.description}
        </p>
      </main>

      <footer className="flex-initial flex flex-col gap-2 mt-2 md:flex-row">
        <section className="flex-1">
          {createdAt}
        </section>
        <section className="flex-initial flex gap-2">
          <div className="flex gap-1" title={t('projects:technologies-title')}>
            {typeof language === 'string'
              ? (<span>{repo.language}</span>)
              : (
                <div className="flex items-center gap-1 text-gray-700 dark:text-gray-300">
                  <span className="inline-block rounded-full w-3 h-3" style={{
                    backgroundColor: language.color || '#000000'
                  }} />
                  <span className="inline-block font-medium">{language.name}</span>
                </div>
              )
            }
            {project?.technologies && project.technologies.length > 0 && (
              <span className="font-medium text-primary-500">+ {project.technologies.length}</span>
            )}
          </div>
        </section>
      </footer>
    </div>
  )
}

export default ProjectCard
