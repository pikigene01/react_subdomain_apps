import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import FeaturedSection from '../components/FeaturedSection'
import Team from '../components/Team';
import NewsLetter from '../components/NewsLetter';
import CounterSection from '../components/CounterSection';
import GetInTouch from '../components/GetInTouch';
import Slider from '../components/Slider';
import AppHeader from '../components/App/AppHeader';

export default function WholeApp({appToView}) {

  return (
    <div>
        {appToView.itsApp ?(
          <>
          <AppHeader/>
          </>
        ):(
            <>
            <Header />
            <Slider/>
            <FeaturedSection/>
            <NewsLetter/>
            <Team/>
            <CounterSection/>
            <GetInTouch/>
            <Footer/>
            </>
        )}
       
    </div>
  )
}
