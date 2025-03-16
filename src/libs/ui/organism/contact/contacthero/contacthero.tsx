/* eslint-disable @next/next/no-img-element */
import { getContactHeroAction } from './action'
import './contacthero.css'
// import { ContactType } from './contacthero.type'

export const ContactHero = async () => {
  const contactHero = await getContactHeroAction()

  if (!contactHero) {
    return (
      <p className="ch-error">
        Failed to load content. Please try again later.
      </p>
    )
  }

  const { cta, text } = contactHero.link || {}

  const { src, alt } = contactHero.image || {}

  return (
    <div className="ch-main">
      <div className="ch-container">
        <section className="ch-tcontent">
          <h1 className="ch-title">{contactHero?.title}</h1>
          <p className="ch-description">{contactHero?.description}</p>
          <div className="ch-licontent">
            <a className="ch-link" href={cta} target="_parent">
              {text}
            </a>
          </div>
        </section>
        <div className="ch-imwrapper">
          <img src={src} alt={alt} className="ch-image" />
        </div>
      </div>
    </div>
  )
}
