import { useNavigate } from 'react-router-dom'
import { Column, Container, Row, Spacer, Typography } from '@foundations'
import { useAnimate } from '@hooks'
import { Button } from '@atoms'
import { useNotFoundContent } from './Hooks/use-not-found-content.hooks'
import { NotFoundProps } from './Not-found.types'

export const NotFound = ({ error }: NotFoundProps) => {
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
      modifiers={['animate', animation]}
      align={error ? 'flex-end' : 'center'}
      justify={'center'}
      gutter={{
        left: true,
        right: true
      }}
      height={'fullscreen'}
    >
      <Column
        width={{
          med: 8
        }}
        gutter={{
          left: true,
          right: true
        }}
      >
        <Container
          border={{
            top: true,
            right: true,
            bottom: true,
            left: true
          }}
          padding={{
            top: { default: 6 },
            right: { default: 6 },
            bottom: { default: 6 },
            left: { default: 6 }
          }}
        >
          {contentFetching || contentPending ? (
            <Typography tag={'h1'} size={'body-med'} text={'Loading...'} />
          ) : (
            <>
              <Typography tag={'h1'} size={'d1'} text={name ? name : title} />
              <Typography
                tag={'p'}
                size={'body-xlrg'}
                padding={4}
                text={message ? message : subtitle}
              />
              {stack && (
                <Typography
                  tag={'p'}
                  size={'body-xlrg'}
                  fontStyle={'italic'}
                  padding={4}
                  text={stack}
                />
              )}
              <Spacer padding={8} />
              <Button
                variant={'primary'}
                label={error ? 'Reload Page' : linkLabel}
                onClick={handleClick}
              />
            </>
          )}
        </Container>
      </Column>
    </Row>
  )
}

export default NotFound
