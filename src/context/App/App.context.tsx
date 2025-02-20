import { createContext } from '@context'
import { initialApp } from './App.initial'
import type { AppProps } from './App.types'

export const { Provider: AppProvider, useContextProvider: useAppContext } =
  createContext<AppProps, 'app', 'updateApp'>(
    initialApp,
    'app',
    'updateApp',
    'AppContext'
  )
