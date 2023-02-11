const vehicles = [
	{
		id: '1',
		model: 'YCZ',
		brand: 'Yamaha',
		cylnderCapacity: '110',
		use: 'Urbana',
		image: 'https://www.yamahasports.com.co/uploads/color/ycz-roja.png'
	},
	{
		id: '2',
		model: 'HUNK 160R Black',
		brand: 'Hero',
		cylnderCapacity: '163',
		use: 'Deportiva',
		image: 'https://heromotored.com/wp-content/uploads/2022/02/02.Hunk-Stealth-160R_ABZH-3-4th-Front.png'
	},
	{
		id: '3',
		model: 'NKD 125',
		brand: 'AKT',
		cylnderCapacity: '124',
		use: 'Urbano',
		image: 'https://www.aktmotos.com/sites/default/files/styles/webp/public/2022-07/right%2045_15.png.webp?itok=HsPKplla'
	},
	{
		id: '4',
		model: 'DR-Z50',
		brand: 'Suzuki',
		cylnderCapacity: '49',
		use: 'Automático',
		image: 'https://suzukicycles.com/-/media/project/cycles/images/products/motorcycles/dr-z50/2023/gallery/dr-z50_m3_yu1_diagonal_2400x1600.png?mw=540&hash=5E2DB0D0B7F6262E281447BA98790D60'
	},
	{
		id: '5',
		model: 'JET 125',
		brand: 'AKT',
		cylnderCapacity: '124.6',
		use: 'Automático',
		image: 'https://www.aktmotos.com/sites/default/files/styles/webp/public/2022-07/AKT%20jet1252538.png.webp?itok=gbOCHFps'
	},
	{
		id: '6',
		model: 'R7',
		brand: 'Yamaha',
		cylnderCapacity: '689',
		use: 'Super Deportiva',
		image: 'https://www.yamahasports.com.co/uploads/color/r7-azul.png'
	},
	{
		id: '7',
		model: 'CRA 125 SE Unishock',
		brand: 'AKT',
		cylnderCapacity: '124',
		use: 'Urbana',
		image: 'https://www.aktmotos.com/sites/default/files/styles/webp/public/2022-07/AKT%2003%20DICIEMBRE2168_0.png.webp?itok=EK9zoGEr'
	},
	{
		id: '8',
		model: 'THRILLER PRO 150',
		brand: 'Hero',
		cylnderCapacity: '149.2',
		use: 'Urbana',
		image: 'https://heromotored.com/wp-content/uploads/2020/10/thriller-150-roja.png'
	},
	{
		id: '9',
		model: 'Crypton FI',
		brand: 'Yamaha',
		cylnderCapacity: '114',
		use: 'Automática',
		image: 'https://www.yamahasports.com.co/uploads/color/crypton-roja.png'
	}
]

let position = 1

const loadVehicles = () => {
	const vehicleImages = document.querySelectorAll('.vehicle')
	const vehicleId = document.querySelector('#vehicle-desc-id')
	const vehicleModel = document.querySelector('#vehicle-desc-model')
	const vehicleBrand = document.querySelector('#vehicle-desc-brand')
	const vehicleCC = document.querySelector('#vehicle-desc-cc')
	const vehicleUse = document.querySelector('#vehicle-desc-use')

	const lastIndex = vehicles.length - 1
	const previous = position === 0 ? lastIndex : position - 1
	const next = position === lastIndex ? 0 : position + 1

	const vehicle = vehicles[position]

	vehicleId.innerText = vehicle.id
	vehicleModel.innerText = vehicle.model
	vehicleBrand.innerText = vehicle.brand
	vehicleCC.innerText = `${vehicle.cylnderCapacity} cc`
	vehicleUse.innerText = vehicle.use

	vehicleImages[0].src = vehicles[previous].image
	vehicleImages[1].src = vehicle.image
	vehicleImages[2].src = vehicles[next].image
}

const previous = () => {
	position = position - 1 < 0 ? vehicles.length - 1 : position - 1
	loadVehicles()
}

const next = () => {
	position = position + 1 > vehicles.length - 1 ? 0 : position + 1
	loadVehicles()
}

const arrowLeft = document.querySelector('#arrow-left')
arrowLeft.addEventListener('click', previous)
const arrowRight = document.querySelector('#arrow-right')
arrowRight.addEventListener('click', next)

document.addEventListener('DOMContentLoaded', loadVehicles)