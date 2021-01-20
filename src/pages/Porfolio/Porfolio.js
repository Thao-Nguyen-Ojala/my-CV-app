import '../../App.css'
import { HeroSection } from '../../components'
import { warehouseApp, myCV, covidApp, photoApp } from './Data'

function Porfolio() {
  return(
    <>
      <HeroSection {...warehouseApp} />
      <HeroSection {...myCV} />
      <HeroSection {...covidApp} />
      <HeroSection {...photoApp} />
    </>
  )
}

export default Porfolio