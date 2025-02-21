import { forwardRef } from 'react'
import { Container } from '@foundations/Container/Container.component'
import { Spacer } from '@foundations/Spacer/Spacer.component'
import { Typography } from '@foundations/Typography/Typography.component'
import { Button } from '@atoms/Button/Button.component'
import { Image } from '@atoms/Image/Image.component'
import { Loading } from '@atoms/Loading/Loading.component'
import type { CardProps } from './Card.types'

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ modifiers = [], image, title, body, link, loading, ...rest }, ref) => {
    const { variant, label = '', url = '', rel, target } = link || {}

    return (
      <Container
        ref={ref}
        tag={'article'}
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
            {image && <Image {...image} />}
            {title && (
              <Typography
                tag={'h2'}
                size={'h2'}
                padding={{ default: 6 }}
                color={'light'}
                fontWeight={'bold'}
                text={title}
              />
            )}
            {body && (
              <Typography
                padding={{ default: 4 }}
                tag={'p'}
                size={'body-med'}
                color={'light'}
                text={body}
              />
            )}
            {link && (
              <Spacer display={'block'} padding={{ default: 6 }}>
                <Button
                  variant={variant}
                  url={url}
                  target={target && target}
                  rel={rel && rel}
                  label={label}
                />
              </Spacer>
            )}
          </>
        )}
      </Container>
    )
  }
)

Card.displayName = 'Card'
