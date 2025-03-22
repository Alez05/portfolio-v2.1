type TField = {
  type: string
  id: string
  label: string
  placeholder: string
  required: boolean
}

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
    field: TField[] // <-- This is the type of field tbm
  }
  button: {
    id: string
    label: string
    type: 'submit' | 'button' | 'reset'
  }
}
