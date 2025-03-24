import { NextResponse } from 'next/server'

export const POST = async (request: Request) => {
  try {
    const data = await request.json()

    if (!data.name || !data.email || !data.message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    console.log('Form recived', data)

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
