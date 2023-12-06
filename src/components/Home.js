import React from 'react'
import Navbar from './Navbar'
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import { FiArrowRight } from "react-icons/fi";


const Home = () => {
  return (
    <div className="home-container">
        <Navbar/>
        <div className='home-banner-container'>
          <div className='home-bannerImage-container'>
              <img src={BannerBackground} alt="" />
          </div>
          <div className='home-text-section'>
              <h1 className='primary-heading'>Sua Comida Favorita Entregue Quente & Fresca</h1>
              <p className='primary-text'>
                Comer é bom. É uma das coisas mais prazerosas da vida. É uma forma de nos conectarmos com outras pessoas, experimentar novas culturas e simplesmente nos sentirmos bem. 
              </p>
              <button className='secondary-button'>
                Peça Agora<FiArrowRight />
              </button>
          </div>
          <div className='home-image-container'>
            <img src={BannerImage} alt="" />
          </div>
        </div>
    </div>
  )
}

export default Home