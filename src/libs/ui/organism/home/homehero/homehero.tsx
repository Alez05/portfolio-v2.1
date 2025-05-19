/* eslint-disable @next/next/no-img-element */
import React from 'react'
import './homehero.css'
import { Socials } from '../socials'
import { getHomeHeroAction } from './action'
import { HomeHeroData } from './homehero.type.ts'

const HomeHero = async () => {
  const heroConfig: HomeHeroData | null = await getHomeHeroAction()

  if (!heroConfig) {
    return <p>Error loading hero section.</p>
  }

  return (
    <div className="home-wrapper">
      <section className="home-section">
        <div className="htext-wrapper">
          <h1 className="home-title">{heroConfig.title}</h1>
          <p className="home-description">{heroConfig.description}</p>
          <h1>Something new</h1>
          <h2>Something new again - monday </h2>
          <div className="hlink-wrapper">
            <a href={heroConfig.contactMeLink} className="link-red">
              {heroConfig.contactMe}
            </a>
            <a href={heroConfig.readMoreLink} className="link-white">
              {heroConfig.readMore}
            </a>
          </div>
        </div>
        <div className="himage-wrapper">
          <img
            src={heroConfig.image}
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
