import { StateProvider } from '@context'
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { EXPORT_NAME } from './COMPONENT_NAME.component'

describe('EXPORT_NAME component', () => {
    it('renders EXPORT_NAME component with a modifier', () => {
        render(
            <StateProvider>
                <EXPORT_NAME
                    data-testid="element"
                    modifiers={['test-modifier']}
                />
            </StateProvider>
        )

        const element = screen.getByTestId('element')
        const { classList } = element

        expect(classList.contains('test-modifier')).toBe(true)
    })
})
