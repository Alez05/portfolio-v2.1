import { NextResponse } from 'next/server'
import { footerData } from './footer'

export const GET = async () => {
  return NextResponse.json(footerData)
}
