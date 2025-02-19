import { MemoryRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { AppProvider } from '@context'
import { queryClient, QueryClientProvider } from '@hooks'
import { Logo } from './Logo.component'

describe('Logo component', () => {
  it('renders Logo component with a modifier', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter>
          <AppProvider>
            <Logo data-testid='element' modifiers={['test-modifier']} />
          </AppProvider>
        </MemoryRouter>
      </QueryClientProvider>
    )

    const element = screen.getByTestId('element')
    const { classList } = element

    expect(classList.contains('test-modifier')).toBe(true)
  })
})
