import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import type {
  UseAnimateReturn,
  UseAnimateTransition
} from './use-animate-types'
import { transitionDuration } from '@global/global.constants'

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
