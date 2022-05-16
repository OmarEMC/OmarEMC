import clsx from 'clsx'
import { useMemo } from 'react'
import { FiArrowUpRight, FiLink, FiStar } from 'react-icons/fi'

import Link from '@/components/Link'
import { languages } from '@/utils/static-data'
import RepositoryInterface from '@/utils/RepoInterface'

interface ProjectCardProps {
  project: RepositoryInterface;
  className?: string;
}

function ProjectCard ({ project, className }: ProjectCardProps) {
  const language = useMemo(() => languages.find((lang) => lang.name.toLowerCase() === project.language.toLowerCase()) || project.language, [project.language])

  return (
    <div
      className={clsx(
        'flex flex-col rounded-lg py-3 px-6 bg-white transition-shadow duration-300 shadow-sm hover:shadow-md dark:bg-gray-600',
        className,
        { 'border border-yellow-400 opacity-90': project.archived }
      )}
      title={project.archived ? 'Archived project' : undefined}
    >
      <header className="flex-initial flex items-center">
        {!project.private
          ? (
            <Link href={project.html_url} title="View Project" className="text-xl flex items-center gap-2 flex-initial">
              <FiLink /> {project.name}
            </Link>
          )
          : (
            <p className="font-medium text-xl flex items-center gap-2 flex-initial">{project.name}</p>
          )}
        <div className="flex-1" />
        <div className="flex-initial flex gap-1 items-center text-lg" title="Stars">
          <FiStar className="text-primary-500" />
          <span className="font-rubik text-primary-500" title="Stars">{project.stargazers_count}</span>
        </div>
      </header>

      <main className="flex-1">
        <p className="text-gray-600 font-medium dark:text-gray-200">
          {project.description}
        </p>
      </main>

      <footer className="flex-initial flex flex-col gap-2 mt-2 md:flex-row">
        <section className="flex-1">
          {project.pushed_at}
        </section>
        <section className="flex-initial flex gap-2">
          {typeof language === 'string'
            ? (<span title="Used language">{project.language}</span>)
            : (
              <div className="flex items-center gap-1 text-gray-700 dark:text-gray-300" title="Used language">
                <span className="inline-block rounded-full w-3 h-3" style={{
                  backgroundColor: language.style?.border || '#000000'
                }} />
                <span className="inline-block font-medium">{language.name}</span>
              </div>
            )
          }
          {project.homepage && (
            <Link href={project.homepage} className="flex items-center gap-1 transition-colors duration-200 hover:text-primary-700">
              View Page
              <FiArrowUpRight className="w-5 h-5" />
            </Link>
          )}
        </section>
      </footer>
    </div>
  )
}

export default ProjectCard
