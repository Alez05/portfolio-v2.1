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

  const { header, field } = formData?.form || {}
  const { subtitle, title } = formData?.form.header || {}
  const { type, id, label } = formData?.button || {}

  const description = header?.description.replace(
    '{link}',
    `<a href="${header.link.cta}" class="cf-link">${header.link.text}</a>`
  )

  return (
    <section id="contact-form" className="cf-parent">
      <div className="cf-container">
        <h3 className="cf-subtitle">{subtitle}</h3>
        <h1 className="cf-title">{title}</h1>
        <p
          className="cf-description"
          dangerouslySetInnerHTML={{ __html: description || '' }}
        />
        <form className="cf-form">
          {field?.map((field) => (
            <div key={field.id} className="cf-field">
              <label htmlFor={field.id} className="cf-label">
                {field.label}
              </label>
              {field.type === 'textarea' ? (
                <textarea
                  id={field.id}
                  name={field.id}
                  placeholder={field.placeholder}
                  required={field.required}
                  className="cf-textarea"
                />
              ) : (
                <input
                  type={field.type}
                  id={field.id}
                  name={field.id}
                  placeholder={field.placeholder}
                  required={field.required}
                  className="cf-input"
                />
              )}
            </div>
          ))}
          {formData?.button ? (
            <button type={type} id={id} className="cf-button">
              {label}
            </button>
          ) : (
            <button type="submit" className="cf-button">
              Submit
            </button>
          )}
        </form>
      </div>
    </section>
  )
}
