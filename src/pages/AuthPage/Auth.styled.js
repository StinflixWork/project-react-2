import styled from 'styled-components'

export const WrapperAuth = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  place-items: center;
  background: center / cover no-repeat url(${({ background }) => background});
  position: relative;
`

export const WrapperLogo = styled.div`
  position: absolute;
  top: 15px;
  left: 15px;
`

export const AuthFormStyled = styled.form`
  width: 400px;
  height: 500px;
  padding: 25px 35px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  box-shadow: 0 4px 27px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);

  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 35px;
`

export const AuthFormTitle = styled.h2`
  font-size: 24px;
  color: #220901;
  text-align: center;
  letter-spacing: 2px;
`

export const AuthFormInputs = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
`
export const AuthFormInput = styled.input`
  outline: none;
  bottom: 0;
  padding: 5px;
  background-color: transparent;
  border-bottom: 1px solid rgba(34, 9, 1, 0.5);
  color: rgba(34, 9, 1, 0.8);
`

export const AuthFormFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin-top: 25px;
`

export const AuthFormButton = styled.button`
  padding: 10px 35px;
  border-radius: 10px;
  color: #220901;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 27px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  transition: background-color .3s ease;

  svg {
    margin-top: 1px;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
`

export const AuthFormLink = styled.p`
  color: #220901;
  font-size: 14px;

  a {
    text-decoration: underline;
    text-underline-offset: 3px;
    margin-left: 8px;
    transition: color .3s ease-in-out;

    &:hover {
      color: rgba(255, 255, 255, 0.3);
    }
  }
`