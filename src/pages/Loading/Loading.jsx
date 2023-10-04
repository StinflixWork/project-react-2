import styled from 'styled-components'
import { ThreeBody } from '@uiball/loaders'

const WrapperLoading = styled.div`
	height: 100%;
	display: grid;
	place-items: center;
`
const Loading = () => {
	return (
		<WrapperLoading>
			<ThreeBody size={35} speed={1.1} color="#fb8500" />
		</WrapperLoading>
	)
}

export default Loading
