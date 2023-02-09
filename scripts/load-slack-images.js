const logoNames = [
	'airbnb',
	'capital-one',
	'harvard',
	'los-angeles-times',
	'oracle',
	'ticketmaster'
]
const leftImage = document.querySelector('#image')
leftImage.src = '/images/slack/leftImage.png'

const logosSection = document.querySelector('#logos')
logoNames.forEach(logoName => {
	logosSection.insertAdjacentHTML('beforeend',
		`<img src="/images/slack/${logoName}.png" alt="${logoName}" class="logo">`
	)
})