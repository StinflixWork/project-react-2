import styled from 'styled-components'

export const WidgetStyled = styled.div`
  height: 100%;
  padding: 25px;
  border-radius: 20px;
  position: relative;
  background: center / cover no-repeat url(${({ $background }) => $background}) ${({
                                                                                     theme,
                                                                                     colorBg
                                                                                   }) => colorBg || theme.backgroundColors.widgetsBg};
  overflow: hidden;
`

export const WidgetShadowStyled = styled(WidgetStyled)`
  box-shadow: 3px 10px 15px -3px rgba(0, 0, 0, 0.1);
`

export const WidgetBlurBg = styled.div`
  display: block;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.18);
  width: 100%;
  height: 100%;
  inset: 0;
`

export const WidgetHeaderIcon = styled.div`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background-color: #f5f5f5;
  display: grid;
  place-items: center;
`
export const WidgetHeaderBody = styled.div`
  color: ${({ color }) => color};
  line-height: 24px;
  font-size: 16px;

  h3 {
    font-weight: 500;
  }
`
export const WidgetContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 50;
`
