'use client'
import React, { useState } from 'react'
import { TFormField } from '../contactform.type'
import '../contactform.css'

type TContactForm = {
  formData: TFormField
}

export const ClientForm = ({ formData }: TContactForm) => {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const { header, field } = formData?.form || {}
  const { subtitle, title } = formData?.form.header || {}
  const { type, id, label } = formData?.button || {}

  const description = header.description.replace(
    '{link}',
    `<a href="${header.link.cta}" class="cf-link">${header.link.text}</a>`
  )

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
  }

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
          {field.map((field) => (
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
            <button
              type={type}
              id={id}
              className="cf-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : label}
            </button>
          ) : (
            <button type="submit" className="cf-button" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          )}
        </form>
      </div>
    </section>
  )
}
