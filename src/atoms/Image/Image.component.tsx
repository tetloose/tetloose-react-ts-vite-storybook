import { LazyLoadImage } from 'react-lazy-load-image-component'
import { ImageProps } from './Image.types'
import cs from 'classnames'
import styles from './Image.module.scss'
import 'react-lazy-load-image-component/src/effects/blur.css'

export const Image = ({
  modifiers = [],
  position = 'center',
  size = 'cover',
  ratio = '1x1',
  alt,
  width,
  height,
  desktop,
  tablet,
  mobile,
  src,
  placeholder,
  blur
}: ImageProps) => {
  const srcset = `
    ${desktop ? `${desktop} 1024w,` : ''}
    ${tablet ? `${tablet} 768w,` : ''}
    ${mobile ? `${mobile} 480w` : ''}
  `

  return (
    <LazyLoadImage
      className={cs(
        styles['image'],
        styles[`image-position-${position}`],
        styles[`image-size-${size}`],
        styles[`ratio-${ratio}`],
        ...modifiers
      )}
      src={mobile ? mobile : src ? src : ''}
      srcSet={srcset ? srcset : ''}
      placeholderSrc={placeholder ? placeholder : ''}
      width={width ? width : ''}
      height={height ? height : ''}
      alt={alt ? alt : ''}
      effect={blur ? 'blur' : undefined}
    />
  )
}
