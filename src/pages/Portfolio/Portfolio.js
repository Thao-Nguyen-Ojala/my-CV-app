import '../../App.css'
import { HeroSection } from '../../components'
import { woltMockUp, warehouseApp, myCV, covidApp, photoApp } from './Data'

function Portfolio() {
  return(
    <>
      <HeroSection {...woltMockUp} />
      <HeroSection {...warehouseApp} />
      <HeroSection {...myCV} />
      <HeroSection {...covidApp} />
      <HeroSection {...photoApp} />
    </>
  )
}

export default Portfolio