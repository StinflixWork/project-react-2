import {
	WidgetValueInfo,
	WidgetValueStyled,
	WidgetValueText
} from 'components/Widgets/WidgetLayouts/WidgetValue/WidgetValue.styled.js'

const WidgetValue = ({ value, colorText }) => {
	const title = value.isTemp ? (
		<h2>{Math.round(value.main)}&deg;C</h2>
	) : (
		<h2>{Math.round(value.main)}</h2>
	)
	const optional = value.isTemp ? (
		<span>{value.optional}&deg;C</span>
	) : (
		<span>{value.optional}</span>
	)

	return (
		<WidgetValueStyled>
			<WidgetValueInfo colorText={colorText}>
				{title}
				{optional}
			</WidgetValueInfo>
			<WidgetValueText colorText={colorText}>
				<p>{value.text}</p>
			</WidgetValueText>
		</WidgetValueStyled>
	)
}

export default WidgetValue
