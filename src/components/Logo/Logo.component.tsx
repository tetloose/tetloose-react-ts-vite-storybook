import { Image } from '@atoms/Image/Image.component'
import { Link } from '@atoms/Link/Link.component'
import { Loading } from '@atoms/Loading/Loading.component'
import { useLogoContent } from './hooks/use-logo-content.hooks'
import type { LogoProps } from './Logo.types'
import styles from './Logo.module.scss'

export const Logo = ({ modifiers = [] }: LogoProps) => {
  const { contentFetching, contentPending, to, ...rest } = useLogoContent()

  return (
    <Link modifiers={[styles['logo'], ...modifiers]} to={to}>
      {contentFetching || contentPending ? (
        <Loading center={true} />
      ) : (
        <Image {...rest} />
      )}
    </Link>
  )
}
