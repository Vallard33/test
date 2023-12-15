function handleClick({scaleValue, careType}) {
	const mot = scaleValue == '1' ? 'un peu' :
		scaleValue == '2' ? 'modérement' : 'beaucoup'
	const scaleType = careType == 'light' ? 'de lumière' : "d'arrosage"
	alert(`Cette plante requiert ${mot} ${scaleType} `)
}

function CareScale({ scaleValue, careType }) {
	const range = [1, 2, 3]
	const scaleType = careType === 'light' ? '☀️' : '💧'

	return (
		<div>
			{range.map((rangeElem) =>
				scaleValue >= rangeElem ? (
					<span key={rangeElem.toString()} onClick={() => handleClick({scaleValue, careType})}>{scaleType}</span>
				) : null
			)}
		</div>
	)
}

export default CareScale