/* eslint-disable testing-library/no-render-in-setup */
import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render, screen } from '@testing-library/react'
import { prettyDOM } from '@testing-library/react'
import Togglable from './Togglable'

describe('Togglable', () => {
    const buttonLabel = 'test'

    beforeEach(() => {
        render(
            <Togglable labelButton={buttonLabel} >
                <div className='testDiv'>
                    testDivContent
                </div>
            </Togglable>
        )
    })

    test('renders its childrens', () => {
        const el = screen.getByText('testDivContent')
        // eslint-disable-next-line testing-library/no-node-access
        expect(el.parentNode).toHaveStyle('display:none')
    })

    test('after clicking its children must be shown', () => {

        const button = screen.getByText(`Show ${buttonLabel}`)
        fireEvent.click(button)
    
        const el = screen.getByText('testDivContent')
        // eslint-disable-next-line testing-library/no-node-access
        expect(el.parentNode).not.toHaveStyle('display:none')
    })
})


