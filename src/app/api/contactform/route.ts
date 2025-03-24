import { NextResponse } from 'next/server'

import { supabase } from '@util/supabase/supabase'

export const POST = async (request: Request) => {
  try {
    const data = await request.json()

    const { name, email, message } = data

    if (!name || !email || !message) {
      console.log('Form recived', data)
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    const { error } = await supabase
      .from('form')
      .insert([{ name, email, message }])

    if (error) {
      console.log('Supabase error:', error)
      return NextResponse.json(
        { message: 'Failed to save the data' },
        { status: 200 }
      )
    }

    return NextResponse.json(
      { message: 'Form submitted succesfully' },
      { status: 200 }
    )
  } catch (error) {
    console.log('there is an error', error)
    return NextResponse.json(
      { error: 'Internal server error.' },
      { status: 500 }
    )
  }
}
