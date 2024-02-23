import Slider from 'react-slick'
import PlanetItem from '../PlanetItem'

// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'

import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props

  const settings = {
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <div data-testid="planets" className="app-container">
      <h1 className="app-title">PLANETS</h1>
      <ul className="slider-container">
        <Slider {...settings}>
          {planetsList.map(eachPlanetObject => (
            <PlanetItem
              key={eachPlanetObject.id}
              PlanetItemDetails={eachPlanetObject}
            />
          ))}
        </Slider>
      </ul>
    </div>
  )
}

export default PlanetsSlider
