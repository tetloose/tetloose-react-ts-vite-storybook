import { useAppContext } from '@context'

export const useApp = () => {
  const { app, updateApp } = useAppContext()
  const { welcome = '' } = app || {}

  return {
    app,
    updateApp,
    welcome
  }
}
