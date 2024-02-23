import './index.css'

const PlanetItem = props => {
  const {PlanetItemDetails} = props
  const {name, imageUrl, description} = PlanetItemDetails
  console.log(PlanetItemDetails)
  return (
    <li className="planet-item-container">
      <img src={imageUrl} alt={`planet ${name}`} className="planet-image" />
      <h1 className="heading">{name}</h1>
      <p className="description">{description}</p>
    </li>
  )
}

export default PlanetItem
