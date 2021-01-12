import '../../App.css'
import { HeroSection } from '../../components'
import { myCV, covidApp, photoApp } from './Data'

function Porfolio() {
  return(
    <>
      <HeroSection {...myCV} />
      <HeroSection {...covidApp} />
      <HeroSection {...photoApp} />
    </>
  )
}

export default Porfolio