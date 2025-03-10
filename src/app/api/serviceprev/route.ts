import { NextResponse } from 'next/server'
import { serviceprevList } from './serviceprev'

export const GET = () => {
  return NextResponse.json(serviceprevList)
}
