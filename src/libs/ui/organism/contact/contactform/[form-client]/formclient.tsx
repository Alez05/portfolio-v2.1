'use client'
import React, { useRef, useState } from 'react'
import { TFormField } from '../contactform.type'
import '../contactform.css'

type TContactForm = {
  formData: TFormField
}

export const ClientForm = ({ formData }: TContactForm) => {
  const formRef = useRef<HTMLFormElement>(null)

  const [submissionError, setSubmissionError] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

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
    setSubmissionError(null)
    setSubmitSuccess(false)

    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData.entries())

    try {
      if (!data.name || !data.email || !data.message) {
        throw new Error('All fields are required.')
      }

      const response = await fetch('/api/contactform', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // fixed from earlier
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Failed to submit form. Please try again.')
      }

      // ✅ Success!
      setSubmitSuccess(true)

      if (formRef.current) {
        formRef.current.reset()
      }
    } catch (error) {
      setSubmissionError(
        error instanceof Error ? error.message : 'An error occurred.'
      )
    } finally {
      setIsSubmitting(false)
    }
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
        {submitSuccess && (
          <p className="cf-success">
            Thank you, your message has been sent. If everything is filled in
            correctly, well get back to you.
          </p>
        )}
        <form ref={formRef} className="cf-form" onSubmit={handleSubmit}>
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
          {submissionError && <p className="cf-error">{submissionError}</p>}
        </form>
      </div>
    </section>
  )
}
