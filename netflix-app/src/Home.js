import React from 'react'
import Navbar from './component/Navbar/Navbar'
import Banner from "./component/banner/Banner";
import Rowpost from './component/Rowpost/Rowpost';
import { originals,action,romance } from './Urls'
import Footer from './component/Footer/Footer';

function Home() {
  return (
    <div>

    <Navbar />
    <Banner />
    <Rowpost Urls={originals} title='Netflix Originals'  />
    <Rowpost Urls={action} title='Action Movies'isSmall />
    <Rowpost Urls={romance} title='Romance Movies'isSmall />
    <Footer/>
    

    </div>
  )
}

export default Home
