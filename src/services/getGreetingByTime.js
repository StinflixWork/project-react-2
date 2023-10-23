export const getGreetingByTime = (timeString) => {
	const hours = timeString.split(':').shift()
	const currentHour = parseInt(hours, 10)

	let greeting

	if (currentHour >= 5 && currentHour < 12) {
		greeting = 'Good Morning'
	} else if (currentHour >= 12 && currentHour < 17) {
		greeting = 'Good Day'
	} else if (currentHour >= 17 && currentHour < 22) {
		greeting = 'Good Evening'
	} else {
		greeting = 'Good Night'
	}

	return greeting
}