import CareScale from './CareScale'
import '../styles/PlantItem.css'

function handleClick(plantName) {
    alert(`Vous voulez acheter 1 ${plantName} ? Très bon choix 🌱✨`)
}

function PlantItem ({id, cover, name, light, water}) {
    return(
        <li key={id} className='lmj-plant-item'  >
            {name}
            <img src={cover} alt= {`${name} cover`} className='lmj-plant-item-cover'/>
            <div>
            <CareScale careType='water' scaleValue={water} />
		    <CareScale careType='light' scaleValue={light} />
            </div>
        </li>
    )
}

export default PlantItem

