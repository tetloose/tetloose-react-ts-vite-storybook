import { MemoryRouter } from 'react-router-dom'
import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { AppProvider } from '@context/App/App.context'
import { Link } from './Link.component'

describe('Link component', () => {
  it('renders Link component with a modifier', () => {
    const { container } = render(
      <MemoryRouter>
        <AppProvider>
          <Link
            modifiers={['test-modifier']}
            to={'http://google.com'}
            title={'Link'}
          />
        </AppProvider>
      </MemoryRouter>
    )

    const element = container.querySelector('.test-modifier')

    expect(element?.classList.contains('test-modifier')).toBe(true)
  })
})
