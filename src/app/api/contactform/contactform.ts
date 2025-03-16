// formData.ts
import { TFormField } from '@ui/organism/contact/contactform/contactform.type'

export const getFormData: TFormField = {
  form: {
    header: {
      subtitle: 'KEEP IN TOUCH',
      title: 'CONTACT FORM',
      description:
        'You can {link} to send me an email message via your standard email client, or fill in the fields below.',
      link: {
        text: 'click here',
        cta: 'mailto:',
      },
    },
    field: [
      {
        type: 'text',
        id: 'name',
        label: 'Name',
        placeholder: 'Enter your name',
        required: true,
      },
      {
        type: 'email',
        id: 'email',
        label: 'Email',
        placeholder: 'Enter your email',
        required: true,
      },
      {
        type: 'textarea',
        id: 'message',
        label: 'Message',
        placeholder: 'Enter your message',
        required: true,
      },
    ],
  },
  button: {
    id: 'submit',
    label: 'SUBMIT',
    type: 'submit',
  },
}
