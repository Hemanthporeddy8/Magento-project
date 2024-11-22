import React,{useState} from 'react'
import Header from '../Components/Header'
import Banner from '../Components/Banner'
import Collection from '../Components/Collection'
import Footer from '../Components/Footer'

import { Gents } from '../data'

const MainPage = () => {

  const[gentsFashion,setGentsFashion] = useState(Gents)


  return (
    <div>
      <Header />
      <Banner />
      <Collection gentsFashion={gentsFashion}/>
      <Footer />
    </div>
  )
}

export default MainPage
