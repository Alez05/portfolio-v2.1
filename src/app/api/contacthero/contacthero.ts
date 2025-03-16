import { ContactType } from '@/libs/ui/organism/contact/contacthero/contacthero.type'

export const contactHero: ContactType = {
  title: 'Contact',
  image: {
    src: '/image/profile.png',
    alt: 'Contact hero image',
  },
  description:
    "Questions/comments? Or are you here to request a free quote for a website, logo design, or something else? Feel free to contact me via the form below. You'll get your answer on the same day.",
  link: {
    text: 'To contact form',
    cta: '#contact-form',
  },
}
