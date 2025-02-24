import { useNavigate } from 'react-router-dom'
import { useAnimate } from '@hooks/Animate/use-animate.hooks'
import { Action } from '@foundations/Action/Action.component'
import { Container } from '@foundations/Container/Container.component'
import { Column } from '@foundations/Row/Column.component'
import { Row } from '@foundations/Row/Row.component'
import { Typography } from '@foundations/Typography/Typography.component'
import { Button } from '@atoms/Button/Button.component'
import { Loading } from '@atoms/Loading/Loading.component'
import { useNotFoundContent } from './hooks/use-not-found-content.hooks'
import type { NotFoundProps } from './Not-found.types'

const NotFound = ({ error }: NotFoundProps) => {
  const animation = useAnimate()
  const navigation = useNavigate()
  const {
    contentFetching,
    contentPending,
    title,
    subtitle,
    linkVariant,
    linkLabel,
    linkTarget,
    linkRel,
    linkUrl,
    buttonVariant,
    buttonLabel
  } = useNotFoundContent()
  const { message = '', name = '', stack = '' } = error || {}

  const handleClick = () => {
    if (error) window.location.reload()

    if (linkUrl) navigation(linkUrl)
  }

  return (
    <Row
      modifiers={['animate', animation]}
      tag={error ? 'main' : 'section'}
      align={{
        default: error ? 'flex-end' : 'center'
      }}
      justify={{ default: 'center' }}
      padding={{
        left: { default: 6 },
        right: { default: 6 }
      }}
      height={{ default: error ? 'viewport-fullscreen' : 'parent-fullscreen' }}
    >
      <Column
        tag={'section'}
        width={{
          med: error ? 12 : 8
        }}
        padding={{
          left: { default: 6 },
          right: { default: 6 }
        }}
      >
        <Container
          tag={'article'}
          border={{
            top: { default: true },
            right: { default: !error },
            bottom: { default: !error },
            left: { default: !error }
          }}
          borderColor={'dark'}
          padding={{
            top: { default: 6 },
            right: { default: 6 },
            bottom: { default: 6 },
            left: { default: 6 }
          }}
        >
          {contentFetching || contentPending ? (
            <Loading center={true} />
          ) : (
            <>
              <Typography tag={'h1'} size={'h1'} text={name ? name : title} />
              <Typography
                tag={'p'}
                size={'body-med'}
                padding={{ default: 4 }}
                text={message ? message : subtitle}
              />
              {stack && (
                <Typography
                  tag={'p'}
                  size={'body-med'}
                  fontStyle={'italic'}
                  padding={{ default: 4 }}
                  text={stack}
                />
              )}
              <Action padding={{ default: 8 }}>
                {error ? (
                  <Button
                    variant={buttonVariant}
                    label={buttonLabel}
                    onClick={handleClick}
                  />
                ) : (
                  <Button
                    variant={linkVariant}
                    url={linkUrl}
                    rel={linkRel}
                    target={linkTarget}
                    label={linkLabel}
                    onClick={handleClick}
                  />
                )}
              </Action>
            </>
          )}
        </Container>
      </Column>
    </Row>
  )
}

export default NotFound
