import { SocialsType } from './socials.type'
import './socials.css'
import { getSocialListAction } from './action'
// import { useEffect, useState } from 'react'

const Socials = async ({}: SocialsType) => {
  // const [socialLinks, setSocialLinks] = useState<SocialData[]>([])

  // useEffect(() => {
  //   fetch('/socials.json')
  //     .then((response) => response.json())
  //     .then((data) => setSocialLinks(data))
  //     .catch((error) => console.error('Error loading the socials', error))
  // })

  const socialList = await getSocialListAction()

  return (
    <div className="socials-wrapper">
      {socialList.map(({ name, icon, href }) => (
        <a href={href} key={icon} target="_blank" rel="noreferrer" title={name}>
          <span className={`icon ${icon}`}></span>
        </a>
      ))}
    </div>
  )
}

export default Socials
