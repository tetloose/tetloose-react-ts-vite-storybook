import { useNavigate } from 'react-router-dom'
import { Column, Container, Row, Typography } from '@foundations'
import { useAnimate } from '@hooks'
import { Action } from '@components/Action/Action.component'
import { Button, Loading } from '@atoms'
import { useNotFoundContent } from './hooks/use-not-found-content.hooks'
import { NotFoundProps } from './Not-found.types'

const NotFound = ({ error }: NotFoundProps) => {
  const animation = useAnimate()
  const navigation = useNavigate()
  const {
    contentFetching,
    contentPending,
    title,
    subtitle,
    linkLabel,
    linkUrl
  } = useNotFoundContent()
  const { message = '', name = '', stack = '' } = error || {}

  const handleClick = () => {
    if (error) window.location.reload()

    if (linkUrl) navigation(linkUrl)
  }

  return (
    <Row
      tag={error ? 'main' : 'section'}
      modifiers={['animate', animation]}
      align={error ? 'flex-end' : 'center'}
      justify={'center'}
      gutter={{
        left: !error,
        right: !error
      }}
      height={error ? 'viewport-fullscreen' : 'parent-fullscreen'}
    >
      <Column
        tag={'section'}
        width={{
          med: error ? 12 : 8
        }}
        gutter={{
          left: !error,
          right: !error
        }}
      >
        <Container
          tag={'article'}
          border={{
            top: true,
            right: !error,
            bottom: !error,
            left: !error
          }}
          padding={{
            top: { default: 6 },
            right: { default: 6 },
            bottom: { default: 6 },
            left: { default: 6 }
          }}
        >
          {contentFetching || contentPending ? (
            <Loading position={'center'} />
          ) : (
            <>
              <Typography tag={'h1'} size={'d1'} text={name ? name : title} />
              <Typography
                tag={'p'}
                size={'body-xlrg'}
                padding={{ default: 4 }}
                text={message ? message : subtitle}
              />
              {stack && (
                <Typography
                  tag={'p'}
                  size={'body-xlrg'}
                  fontStyle={'italic'}
                  padding={{ default: 4 }}
                  text={stack}
                />
              )}
              <Action padding={{ default: 8 }}>
                <Button
                  variant={'primary'}
                  label={error ? 'Reload Page' : linkLabel}
                  onClick={handleClick}
                />
              </Action>
            </>
          )}
        </Container>
      </Column>
    </Row>
  )
}

export default NotFound
