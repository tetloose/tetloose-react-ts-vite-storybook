import { createContext } from '@context'
import { initialState } from './State.initial'
import { StateProps } from './State.types'

export const { Provider: StateProvider, useContextProvider: useStateContext } =
  createContext<StateProps, 'state', 'updateState'>(
    initialState,
    'state',
    'updateState',
    'StateContext'
  )
