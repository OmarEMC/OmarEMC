import { useContext, useEffect } from 'react'

import { AppContext } from 'lib/context'
import { ProjectsAPI } from 'lib/projects-api'

export function useProjects () {
  const [state, setState] = useContext(AppContext)

  useEffect(() => {
    if (!state.projects?.error && state.projects?.data) return

    ProjectsAPI.getAll().then(({ projects, error }) => {
      setState({
        ...state,
        projects: {
          data: projects,
          error
        }
      })
    })
  }, [state.projects])

  return {
    projects: state.projects?.data,
    error: state.projects?.error
  }
}
