import React from 'react'
import "../styles/Home.scss";




const Home = () => {
  return (
    <div className='home_page'>
        <div className="first_home">
           <div className="second_home">
            <div className="second_home_1">
              <p>Product</p>
              <p>Resources</p>
              <p>Support</p>
            </div>
            <div className="second_home_2">
              <h1>P<span>A</span>CIFI<span>A</span></h1>
            </div>
            <div className="second_home_3">
              <div>Company</div>
              <div>Pricing</div>
              <div className="btn">Contact Us</div>
            </div>
           </div>
        </div>
    </div>
  )
}

export default Home