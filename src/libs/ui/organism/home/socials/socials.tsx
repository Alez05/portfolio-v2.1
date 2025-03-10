import { SocialsType } from './socials.type'
import './socials.css'
import { getSocialListAction } from './action'

const Socials = async ({}: SocialsType) => {
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
