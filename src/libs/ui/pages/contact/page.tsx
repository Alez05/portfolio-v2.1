import { PageLayout } from '@/libs/ui'
import { ContactForm, ContactHero, Socials } from '../../organism'

const ContactPage = () => {
  return (
    <PageLayout>
      <Socials  />
      <ContactHero />
      <ContactForm />
    </PageLayout>
  )
}

export default ContactPage
