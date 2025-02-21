import { Button } from '@atoms/Button/Button.component'
import { Image } from '@atoms/Image/Image.component'
import { Loading } from '@atoms/Loading/Loading.component'
import { useLogoContent } from './hooks/use-logo-content.hooks'
import type { LogoProps } from './Logo.types'
import logo from '@images/logos/logo.png'
import styles from './Logo.module.scss'

export const Logo = ({ modifiers = [], ...rest }: LogoProps) => {
  const { contentFetching, contentPending, alt } = useLogoContent()

  return (
    <Button url={'/'} modifiers={[styles['logo'], ...modifiers]} {...rest}>
      {contentFetching || contentPending ? (
        <Loading position={'center'} />
      ) : (
        <Image alt={alt} src={logo} />
      )}
    </Button>
  )
}
