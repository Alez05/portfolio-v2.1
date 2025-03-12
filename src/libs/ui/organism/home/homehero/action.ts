'use server'

import { homeHeroList } from '@api/homehero/homehero'

type HomeHeroData = (typeof homeHeroList)[0] // Get object type from the array

export const getHomeHeroAction = async (): Promise<HomeHeroData | null> => {
  try {
    const response = await fetch('http://localhost:3000/api/homehero')
    if (!response.ok) throw new Error('Failed to fetch home hero data')

    const result: HomeHeroData[] = await response.json()

    return result[0] || null // ✅ Return the first object or null if empty
  } catch (error) {
    console.error('Error fetching home hero data:', error)
    return null
  }
}
