import { render } from '@testing-library/react'

import StepsLog from './StepsLog'

test('should render StepsLog component', () => {
	const view = render(
		<StepsLog title='Steps Title'>
			<div>Step 1</div>
			<div>Step 2</div>
		</StepsLog>
	)

	expect(view).toMatchSnapshot()
})