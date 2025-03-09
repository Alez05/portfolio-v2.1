/* eslint-disable @next/next/no-img-element */
import React from 'react'

const ServicePrev = () => {
  return (
    <section className="sp-wrapper"> {/* Main wrapper for the Service Preview section */}
      <div>
        <h1 className="sp-title">Services & Tech</h1> {/* Main title of the section */}
        <div className="sp-icwrapper"> {/* Wrapper for icons */}
          <span className="sp-icon">icons</span> {/* Icon container */}
        </div>
      </div>
      <div className="sp-twrapper"> {/* Wrapper for title and subtitle */}
        <h2 className="sp-stitle">Title Service</h2> {/* Service title */}
        <h3 className="sp-dtext">Subtitle Prev</h3> {/* Short description or subtitle */}
      </div>
      <div className="sp-bwrapper"> {/* Wrapper for buttons or links */}
        <a href="" className="sp-rlink">My Resume</a> {/* Link to resume */}
        <a href="" className="sp-slink">My services</a> {/* Link to services page */}
      </div>
      <div className="sp-imwrapper"> {/* Wrapper for the image */}
        <img src="/image/profile.png" alt="alex text" /> {/* Profile or representative image */}
      </div>
    </section>
  )
}

export default ServicePrev