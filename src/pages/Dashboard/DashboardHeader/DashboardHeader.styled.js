import styled from 'styled-components'

export const DashboardHeaderStyled = styled.header`
  flex: 0 0 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const DashboardHeaderPanel = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`

export const DashboardHeaderNotification = styled.div`
  width: 32px;
  height: 32px;
  display: grid;
  place-items: center;
  border: 1px solid rgba(74, 87, 89, 0.4);
  border-radius: 50%;

  svg {
    color: ${({ theme }) => theme.textColors.text.primary};
  }
`
