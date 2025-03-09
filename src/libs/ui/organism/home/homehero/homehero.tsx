// Section1a component is for home page, which will be herobox with tile, description and an image.
import React from 'react'
import './homehero.css'
import homeData from '@data/homehero.json'
import { Socials } from '../socials'

const HomeHero = async () => {
  return (
    <div className="home-wrapper">
      <section className="home-section">
        <div className="htext-wrapper">
          <h1 className="home-title">{homeData.title}</h1>
          <p className="home-description">{homeData.description}</p>
          <div className="hlink-wrapper">
            <a href="/contact" className="link-red">
              {homeData.contactMe}
            </a>
            <a href="/services" className="link-white">
              {homeData.readMore}
            </a>
          </div>
        </div>
        <div className="himage-wrapper">
          <img
            src="./image/profile.png"
            alt="alex working at the desk"
            className="himage"
          />
        </div>
      </section>
      <Socials icon="facebook2" />
    </div>
  )
}

export default HomeHero
