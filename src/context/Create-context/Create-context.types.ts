import { GlobalChildren } from '@global'

export type ContextProviderProps = GlobalChildren

export type ContextType<T, S extends string, U extends string> = {
    [K in S]: T
} & {
    [K in U]: (newState: Partial<T>) => void
}
