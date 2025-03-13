'use server'

import { ContactType } from '@/libs/ui/organism/contact/contacthero/contacthero.type'

export const getContactHeroAction = async (): Promise<ContactType | null> => {
  try {
    const response = await fetch(`http://localhost:3000/api/contacthero`)

    if (!response.ok) {
      throw new Error(`Failed to fetch contact hero: ${response.statusText}`)
    }

    return (await response.json()) as ContactType
  } catch (error) {
    console.error('Error fetching contact hero data:', error)
    return null
  }
}
