import { NextResponse } from 'next/server'
import { getFormData } from './contactform'

export const GET = async () => {
  return NextResponse.json(getFormData)
}
