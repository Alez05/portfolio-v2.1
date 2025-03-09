'use server'

type SocialData = {
  name: string
  icon: string
  href: string
}

export const getSocialListAction = async ():Promise<SocialData[]> => {
  try {
    const result = await (
      await fetch('http://localhost:3000/api/social')
    ).json()
    // console.log('result', result)
    return result as SocialData[]
  } catch (error) {
    console.log('Error on getSocialListAction', error)
    return []
  }
}
