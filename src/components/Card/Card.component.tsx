import { forwardRef } from 'react'
import { Container, Typography } from '@foundations'
import { Image, Loading } from '@atoms'
import { CardProps } from './Card.types'

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ modifiers = [], image, title, body, loading, ...rest }, ref) => {
    if (!image || !title || !body) return

    return (
      <Container
        ref={ref}
        modifiers={[...modifiers]}
        bg={'dark'}
        border={{
          top: true,
          right: true,
          bottom: true,
          left: true
        }}
        padding={{
          top: { default: 10 },
          right: { default: 10 },
          bottom: { default: 10 },
          left: { default: 10 }
        }}
        {...rest}
      >
        {loading ? (
          <Loading position={'center'} />
        ) : (
          <>
            {image && <Image ratio={'3x2'} src={image} />}
            {title && (
              <Typography
                tag={'h2'}
                size={'h2'}
                padding={6}
                color={'light'}
                fontWeight={'bold'}
                text={title}
              />
            )}
            {body && (
              <Typography
                padding={4}
                tag={'p'}
                size={'body-med'}
                color={'light'}
                text={body}
              />
            )}
          </>
        )}
      </Container>
    )
  }
)

Card.displayName = 'Card'
