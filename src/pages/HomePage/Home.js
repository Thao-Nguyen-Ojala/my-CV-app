import '../../App.css'
import { WelcomeSection, HeroSection } from '../../components'
import { introduction, skills, experience, education } from './Data'


function Home() {
  return(
    <>
      <WelcomeSection />
      <HeroSection name='introduction' {...introduction} />
      <HeroSection name='skills' {...skills} />
      <HeroSection name='experience' {...experience} />
      <HeroSection name='education' {...education} />
    </>
  )
}

export default Home