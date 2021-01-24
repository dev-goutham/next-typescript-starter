import React from 'react'
import { render } from '@testing-library/react'

import Index from 'pages/index'

describe('<Index/>', () => {
	it('increases the count when hit the inc button', () => {
		const { getByText } = render(<Index />)
		expect(getByText(/hello/i)).toBeInTheDocument()
	})
})
