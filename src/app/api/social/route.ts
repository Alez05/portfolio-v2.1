import { NextResponse } from 'next/server'
import { socialList } from './social'

export const GET = () => {
  return NextResponse.json(socialList)
}
