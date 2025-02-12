import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { transitionDuration } from '@constants'
import { UseAnimateReturn, UseAnimateTransition } from './use-animate-types'

export const useAnimate = (): UseAnimateReturn => {
  const { pathname } = useLocation()
  const { med } = transitionDuration
  const [transitionStage, setTransitionStage] =
    useState<UseAnimateTransition>('is-hidden')

  useEffect(() => {
    setTransitionStage('is-hidden')

    const animationTimeout = setTimeout(() => {
      setTransitionStage('is-visible')
    }, med)

    return () => clearTimeout(animationTimeout)
  }, [pathname, med])

  return transitionStage
}
