'use server'

type ServicePrevData = {
  title: string
  subtitle: string
  description: string
  resumeLink: string
  resumeTitle: string
  servicesLink: string
  servicesTitle: string
  profileImage: string
}

export const getServicePrevAction = async (): Promise<ServicePrevData[]> => {
  try {
    const result = await (
      await fetch('http://localhost:3000/api/serviceprev')
    ).json()
    return result as ServicePrevData[]
  } catch (error) {
    console.log('Error on getServicePrevAction', error)
    return []
  }
}
