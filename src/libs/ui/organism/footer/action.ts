import { TFooter } from './footer.type'

export const getFooterDataAction = async (): Promise<TFooter> => {
  try {
    const response = await fetch('http://localhost:3000/api/footer')

    return (await response.json()) as TFooter
  } catch (error) {
    console.log('There is an error', error)
  }
}
