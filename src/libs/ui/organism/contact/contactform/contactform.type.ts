export type TFormField = {
  form: {
    header: {
      subtitle: string
      title: string
      description: string
      link: {
        text: string
        cta: string
      }
    }
    field: {
      type: string
      id: string
      label: string
      placeholder: string
      required: boolean
    }[]
  }
  button: {
    id: string
    label: string
    type: 'submit' | 'button' | 'reset'
  }
}
