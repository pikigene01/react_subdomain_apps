import React,{useState} from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Pricing({appToView}) {
    const [loading,setLoading] = useState({
        isLoading: false
      });

  return (
    <div>
        <Header/>
        <div className={loading.isLoading ? "auth-body page-loading" : "page-loading-false"}>
        <div className={loading.isLoading ? "auth-body page-loading-content" : "page-loading-content-false"}>

        </div>
    </div>
        Pricing
        <Footer/>
        </div>
  )
}
