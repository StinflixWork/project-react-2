import styled from 'styled-components'

const AuthFormCheckbox = styled.div`
  align-self: flex-start;

  label {
    font-size: 14px;
    display: grid;
    grid-template-columns: auto 1em;
    align-items: end;
    gap: 0.5em;

    input[type="checkbox"] {
      -webkit-appearance: none;
      appearance: none;
      background-color: #f2f2f2;
      margin: 0;
      font: inherit;
      color: currentColor;
      width: 12px;
      height: 12px;
      border: 0;
      border-radius: 3px;
      transform: translateY(-0.075em);
      display: grid;
      place-content: center;

      &::before {
        content: "";
        width: 0.65em;
        height: 0.65em;
        transform: scale(0);
        transition: 120ms transform ease-in-out;
        box-shadow: inset 1em 1em var(--form-control-color);
        background-color: #14213d;
        transform-origin: bottom left;
        clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
      }

      &:checked::before {
        transform: scale(1);
      }
    }
  }
`

const Checkbox = ({ label, value, onChange }) => {
	return (
		<AuthFormCheckbox>
			<label>
				{label}
				<input
					type='checkbox'
					value={value}
					onChange={onChange}
				/>
			</label>
		</AuthFormCheckbox>
	)
}

export default Checkbox