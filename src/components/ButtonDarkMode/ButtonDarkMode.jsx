import styled from 'styled-components'
import { MdNightsStay } from 'react-icons/md'
import { BsFillBrightnessHighFill } from 'react-icons/bs'

const ButtonDarkModeStyled = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 5px 10px;
  border: 1px solid rgba(242, 242, 242, 0.5);
  border-radius: 10px;
  transition: all 0.3s ease-out;

  font-size: 14px;
  color: ${({ theme }) => theme.textColors.text.primary};
`

const ButtonDarkMode = ({ darkIcon, handleChangeDarkMode }) => {
	return (
		<ButtonDarkModeStyled onClick={handleChangeDarkMode}>
			{!darkIcon ? (
				<>
					Dark Mode
					<MdNightsStay size={20} color='#fb8500' />
				</>
			) : (
				<>
					Light Mode
					<BsFillBrightnessHighFill size={20} color='#fb8500' />
				</>
			)}
		</ButtonDarkModeStyled>
	)
}

export default ButtonDarkMode