'use server'
import { getFormData } from '@api/contactform/contactform'

import { TFormField } from './contactform.type'

export const getContactFormAction = async (): Promise<TFormField> => {
  return getFormData
}

//   {
//   try {
//     const response = await fetch('http://localhost:3000/api/contactform')

//     if (!response.ok) {
//       throw new Error(
//         `Faile to get the contact form data: ${response.statusText}`
//       )
//     }
//     return (await response.json()) as TFormField
//   } catch (error) {
//     console.error('Error fetching contact form data:', error)
//     return {
//       form: {
//         header: {
//           subtitle: '',
//           title: '',
//           description: '',
//           link: {
//             text: '',
//             cta: '',
//           },
//         },
//         field: [],
//       },
//       button: {
//         id: '',
//         label: '',
//         type: 'submit',
//       },
//     }
//   }
// }
