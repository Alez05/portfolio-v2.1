/* eslint-disable @next/next/no-img-element */
import React from 'react'
import './serviceprev.css'
import { getServicePrevAction } from './action'

const ServicePrev = async () => {
  // Fetch data from API
  const servicePrevData = await getServicePrevAction()

  // Since the data is an array, we get the first (and only) item
  const serviceConfig = servicePrevData[0]

  return (
    <div className="sp-parent">
      <section className="sp-wrapper">
        <div className="sp-twrapper">
          <h1 className="sp-title">{serviceConfig.title}</h1>
          <h2 className="sp-stitle">{serviceConfig.subtitle}</h2>
          <h3 className="sp-dtext">{serviceConfig.description}</h3>
          <div className="sp-bwrapper">
            <a href={serviceConfig.resumeLink} className="sp-rlink">
              {serviceConfig.resumeTitle}
            </a>
            <a href={serviceConfig.servicesLink} className="sp-slink">
              {serviceConfig.servicesTitle}
            </a>
          </div>
        </div>
        <div className="sp-imwrapper">
          <img
            src={serviceConfig.profileImage}
            alt="profile"
            className="sp-image"
          />
        </div>
      </section>
    </div>
  )
}

export default ServicePrev

/* Render icons dynamically */
{
  /* <div className="sp-icwrapper">
  {serviceConfig.icons.map((icon, index) => (
    <span key={index} className={`sp-icon ${icon}`}></span>
  ))}
</div> */
}
