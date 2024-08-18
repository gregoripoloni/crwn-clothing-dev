import { screen } from '@testing-library/react'
import Navigation from '../navigation.component'
import { renderWithProviders } from '../../../utils/test/test.utils'

describe('Navigation tests', () => {
	test('It should render a Sign In and not a Sign Out link if there is no currentUser', () => {
		renderWithProviders(<Navigation />, {
			preloadedState: {
				user: {
					currentUser: null
				}
			}
		})

		const signInLinkElement = screen.getByText(/sign in/i)
		expect(signInLinkElement).toBeInTheDocument()

		const signOutLinkElement = screen.queryByText(/sign out/i)
		expect(signOutLinkElement).toBeNull()
	})

	test('It should render a Sign Out and not a Sign In link if there is a currentUser', () => {
		renderWithProviders(<Navigation />, {
			preloadedState: {
				user: {
					currentUser: {}
				}
			}
		})

		const signOutLinkElement = screen.getByText(/sign out/i)
		expect(signOutLinkElement).toBeInTheDocument()

		const signInLinkElement = screen.queryByText(/sign in/i)
		expect(signInLinkElement).toBeNull()
	})

	test('It should not render a Cart Dropdown if isCartOpen is false', () => {
		renderWithProviders(<Navigation />, {
			preloadedState: {
				cart: {
					isCartOpen: false,
					cartItems: []
				}
			}
		})

		const dropdownTextElement = screen.queryByText(/your cart is empty/i)
		expect(dropdownTextElement).toBeNull()
	})

	test('It should render a Cart Dropdown if isCartOpen is true', () => {
		renderWithProviders(<Navigation />, {
			preloadedState: {
				cart: {
					isCartOpen: true,
					cartItems: []
				}
			}
		})

		const dropdownTextElement = screen.getByText(/your cart is empty/i)
		expect(dropdownTextElement).toBeInTheDocument()
	})
})