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

  return (
    <div className="ch-main">
      <div className="ch-container">
        <section className="ch-tcontent">
          <h1 className="ch-title">{contactHero?.title}</h1>
          <p className="ch-description">{contactHero?.description}</p>
          <div className="ch-licontent">
            <a className="ch-link" href={contactHero?.link?.cta}>
              {contactHero?.link?.text}
            </a>
          </div>
        </section>
        <div className="ch-imwrapper">
          <img
            src={contactHero?.image?.src}
            alt={contactHero?.image?.alt}
            className="ch-image"
          />
        </div>
      </div>
    </div>
  )
}
