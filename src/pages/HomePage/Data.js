import studyingImg from '../../media/images/studying-girl.svg'
import skillsImg from '../../media/images/skills.png'
import graduatedImg from '../../media/images/graduated.png'
import workingImg from '../../media/images/working.png'

export const introduction = {
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: '',
  headline: 'Introduction',
  description: `I moved to Finland in 2012 to study and now I have Finnish citizenship and live with my family in Vantaa. During maternity leave, I have been self-studying vigorously to become a programmer. I have been going through online material, YouTube videos, Udemy courses as well as fullstackopen initiative from Helsingin yliopisto and partnering companies. My current focus has been mostly on front-end and React, though I have learned the basics for backend as well (in theory). I am eager to learn more and cannot wait to put the skills I already acquired into good use in a real project`,
  buttonLabel: 'button label',
  imgStart: '',
  img: studyingImg,
  alt:'testing img',
}

export const skills = {
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: '',
  headline: 'Skills',
  description: `Front-end: HTML, JavaScript, Typescript, React, Redux, axios, Material-UI, Bootstrap, Formik, ReactRouter, ....
  
  Back-end: basic understanding of Node, Express, MongoDB
  
  General: Scrum, Git, Basic CLI usage`,
  imgStart: 'start',
  img: skillsImg,
  alt:'testing img'
}

export const experience = {
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: '',
  headline: 'Experience',
  description: `Sep 2016 - June 2019: I worked at the airport as a Sales Assistant. My main tasks were: assisting customer, sales, handling money, doing deposit, take care of the stores, ...

  Apr 2016 - Sep 2016: I had my internship as Beibamboo Oy as an E-commerce Intern. My main tasks were: Analyzing trends, customer research, exploring partnerships, analyzing Google Analytics, Magento platform

  Jul 2009 - Jul 2012: I and my partner owned HaBi - a customized printed T-shirts and bags shop which was based on e-business.`,
  imgStart: '',
  img: workingImg,
  alt:'testing img'
}

export const education = {
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: '',
  headline: 'Education',
  description: 'I studied my Bachelor Degree at Arcada UAS from 2012 to 2016. My major is International Business, and minor is E-commerce',
  imgStart: 'start',
  img: graduatedImg,
  alt:'testing img'
}