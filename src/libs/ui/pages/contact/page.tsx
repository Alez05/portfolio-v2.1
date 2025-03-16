import { PageLayout } from '@/libs/ui'
import { ContactForm, ContactHero } from '../../organism'

const ContactPage = () => {
  return (
    <PageLayout>
      <ContactHero />
      <ContactForm />
    </PageLayout>
  )
}

export default ContactPage
