import { ClientForm } from './[form-client]/formclient'
import { getContactFormAction } from './action'
import './contactform.css'

export const ContactForm = async () => {
  const formData = await getContactFormAction()

  if (!formData) {
    return (
      <div className="cf-error">
        <p>Failed to load content. Please try again later.</p>
      </div>
    )
  }

  return <ClientForm formData={formData} />
}
