import { NextResponse } from 'next/server'
import { contactHero } from './contacthero'

export const GET = async () => {
  return NextResponse.json(contactHero)
}
