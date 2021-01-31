import myCVImg from '../../media/images/myCV.png'
import covidAppImg from '../../media/images/covidApp.png'
import photoAppImg from '../../media/images/photoApp.png'
import warehouseAppImg from '../../media/images/warehouseApp.png'
import woltMockUpImg from '../../media/images/wolt-mockup.png'

export const woltMockUp = {
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'THE FIFTH PROJECT: 1ST TYPESCRIPT PROJECT',
  headline: 'Wolt mockup',
  description: `This is my first project using Typescript with React to create the infinity carousel`,
  buttonLabel: 'Infinity carousel',
  url: 'http://thao-wolt-mockup.surge.sh/',
  buttonLabel2: 'GitHub',
  url2: 'https://github.com/Thao-Nguyen-Ojala/carousel-project',
  imgStart: '',
  img: woltMockUpImg,
  alt:'woltMockUp img',
}

export const warehouseApp = {
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: 'THE FORTH PROJECT: ON GOING',
  headline: 'Warehouse app',
  description: `This is a warehouse fullstack app, where the focus is on handling the data (not that much effort on looks).
  It is my first full stack app exercise. The backend is using APIs provided by Reaktor on backend for items and combining and caching the data for faster requests.
  Im still working on the project to implement some more function, for example: search or filter
  
  The warehouse app is made with React and Material-UI on front-end and Node/Express backend`,
  buttonLabel: 'Visit my warehouse page',
  url: 'http://thao-warehouse.surge.sh/',
  buttonLabel2: 'GitHub',
  url2: 'https://github.com/Thao-Nguyen-Ojala/warehouse-app-frontend',
  imgStart: 'start',
  img: warehouseAppImg,
  alt:'warehouseApp img', 
}

export const myCV = {
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'THE THIRD PROJECT',
  headline: 'My curriculum vitae ',
  description: `This is my digital CV, which is made with React and Css. There are still some small issues with smaller screens.`,
  buttonLabel: 'Visit my CV page',
  url: 'http://thao-cv.surge.sh/',
  buttonLabel2: 'GitHub',
  url2: 'https://github.com/Thao-Nguyen-Ojala/my-CV-app',
  imgStart: '',
  img: myCVImg,
  alt:'cvApp img',
}

export const covidApp = {
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: 'THE SECOND PROJECT',
  headline: 'COVID-19 tracking app',
  description: `User can check the newest update of new infected cases, recovered as well as deaths cause by Covid-19 globally daily. In addition, user can also check the infected, recovery, and deaths chart of a specific country since its first case
  
  This app is made with React, Material-UI, and is using publicly available api at https://api.covid19api.com/ (api not made by me)`,
  buttonLabel: 'Visit my COVID-19 page',
  url: 'http://thao-covid19-tracker.surge.sh/',
  buttonLabel2: 'GitHub',
  url2: 'https://github.com/Thao-Nguyen-Ojala/covid-19-tracker-app',
  imgStart: 'start',
  img: covidAppImg,
  alt:'covidApp img', 
}

export const photoApp = {
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'THE FIRST PROJECT',
  headline: 'Photo App Project',
  description: `In this photo app the user can randomly check through the photos from https://picsum.photos, select their favourite photo, name, sort it and save it in category
  The initial photos are hard-coded.
  The app is made with React, Redux, Formik, reactstrap`,
  buttonLabel: 'Visit my photo page',
  url: 'http://thao-ngo-photo-app.surge.sh/photos',
  buttonLabel2: 'GitHub',
  url2: 'https://github.com/Thao-Nguyen-Ojala/photo-app',
  imgStart: '',
  img: photoAppImg,
  alt:'photoApp img',
  
}
