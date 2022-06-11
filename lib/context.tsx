import { PostgrestError } from '@supabase/supabase-js'
import React, { createContext, Dispatch, SetStateAction, useState } from 'react'

import { Project } from '@/utils/interfaces/Project'

interface AppContextT {
  projects: {
    data: Project[] | null;
    error: PostgrestError | null;
  } | null;
}

type DispatchT = Dispatch<SetStateAction<AppContextT>>

const defaultContext: [AppContextT, DispatchT] = [{
  projects: {
    data: null,
    error: null
  }
}, () => {}]

export const AppContext = createContext<[AppContextT, DispatchT]>(defaultContext)

export default function AppContextProvider ({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<AppContextT>(defaultContext[0])

  return (
    <AppContext.Provider
      value={[state, setState]}
    >
      {children}
    </AppContext.Provider>
  )
}

AppContextProvider.displayName = 'AppContextProvider'
