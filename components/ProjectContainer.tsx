import clsx from 'clsx'
import Link from 'next/link'
import Xarrow from 'react-xarrows'
import React, { useMemo } from 'react'
import { FiArrowUpRight } from 'react-icons/fi'
import useTranslation from 'next-translate/useTranslation'

import ProjectCard from './ProjectCard'
import { getMonthsDiff } from '@/utils/index'
import { Project } from '@/utils/interfaces/Project'
import RepositoryInterface from '@/utils/interfaces/RepoInterface'

interface ProjectContainerProps {
  index: number;
  project?: Project;
  loading?: boolean;
  repo: RepositoryInterface;
  nextRepo?: RepositoryInterface;
}

export function ProjectContainer ({
  repo,
  index,
  project,
  loading,
  nextRepo
}: ProjectContainerProps) {
  const monthsDiff = useMemo(() => nextRepo ? `${getMonthsDiff(new Date(repo.created_at), new Date(nextRepo.created_at)).toFixed(1)} month(s) later` : '', [repo, nextRepo])

  return (
    <React.Fragment>
      {index % 2 !== 0 && (<Fill loading={loading} link={repo.homepage} i={index} project={project} />)}

      <ProjectCard
        project={project}
        loading={loading}
        repo={repo} key={repo.name}
        id={`project-card-${repo.name.toLowerCase()}`}
        className="sm:col-span-6 md:col-span-3 lg:col-span-6 xl:col-span-4"
      />

      {index % 2 === 0 && (<Fill loading={loading} link={repo.homepage} i={index} project={project} />)}

      {nextRepo && (
        <Xarrow
          start={`project-card-${repo.name.toLowerCase()}`}
          end={`project-card-${nextRepo.name.toLowerCase()}`}
          labels={{
            middle: (
              <span className="hidden xl:block">{monthsDiff}</span>
            )
          }}
        />
      )}
    </React.Fragment>
  )
}

function Fill ({ project, loading, i, link }: Pick<ProjectContainerProps, 'project'> & { i: number; link: string; loading?: boolean }) {
  const { lang } = useTranslation()
  const langKeys = useMemo(() => ({
    title: `${lang}_title` as keyof Project,
    learned: `${lang}_learned` as keyof Project
  }), [lang])

  return (
    <>
      <div className={clsx(i % 2 === 0 && 'hidden xl:block', 'flex flex-col justify-center sm:col-span-6 md:col-span-3 lg:col-span-6 xl:col-span-4 relative z-10 sm:p-8 xl:p-0')}>
        {i % 2 !== 0 && (
          <FillContent loading={loading} title={project?.[langKeys.title] as string} learned={project?.[langKeys.learned] as string} link={link} />
        )}
      </div>
      <div className={clsx(i % 2 !== 0 && 'hidden xl:block', 'flex flex-col justify-center sm:col-span-6 md:col-span-3 lg:col-span-6 xl:col-span-4 relative z-10 sm:p-8 xl:p-0')}>
        {i % 2 === 0 && (
          <FillContent loading={loading} title={project?.[langKeys.title] as string} learned={project?.[langKeys.learned] as string} link={link} />
        )}
      </div>
    </>
  )
}

function FillContent ({
  link,
  title,
  learned,
  loading
}: {
  link?: string;
  title?: string;
  learned?: string;
  loading?: boolean;
}) {
  if (loading) {
    return (
      <>
        <div className="bg-gray-600 rounded-md text-opacity-0 text-gray-600 animate-pulse select-none mb-2">Loading title...</div>
        <div className="h-20 bg-gray-500 rounded-md text-opacity-0 text-gray-500 animate-pulse select-none mb-2">Loading description...</div>
        <div className="bg-gray-500 w-28 rounded-md text-opacity-0 text-gray-500 animate-pulse select-none">Loading link...</div>
      </>
    )
  }

  return (
    <>
      <h1 className="font-medium dark:text-gray-500">{title}</h1>
      <p className="text-2xl text-gray-600 dark:text-gray-300">{learned}</p>
      {link && (
        <Link passHref href={link} title="View Project">
          <a className="font-medium flex items-center gap-1 transition-colors duration-200 hover:text-primary-700">
            View Page
            <FiArrowUpRight className="w-5 h-5" />
          </a>
        </Link>
      )}
    </>
  )
}
