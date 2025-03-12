import { NextResponse } from 'next/server'
import { homeHeroList } from './homehero'

export const GET = () => {
  return NextResponse.json(homeHeroList)
}
