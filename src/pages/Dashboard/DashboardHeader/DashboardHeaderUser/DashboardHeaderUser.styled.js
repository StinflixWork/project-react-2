import styled from 'styled-components'

export const DashboardHeaderUserStyled = styled.div`
  display: flex;
  align-items: center;
  column-gap: 15px;
`
export const DashboardHeaderUserAvatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.backgroundSecondaryColor};
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
  }
`
export const DashboardHeaderUserName = styled.div`
  font-size: 24px;
  line-height: 120%;

  p {
    color: ${({ theme }) => theme.textColors.text.primary};
    font-size: 20px;
  }

  h1 {
    font-weight: 500;
    color: ${({ theme }) => theme.textColors.title.primary};
  }
`