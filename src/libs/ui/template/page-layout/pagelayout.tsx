import { Navbar } from '../../organism'
import { LayoutType } from './pagelayout.type'

const PageLayout = ({ children }: LayoutType) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  )
}

export default PageLayout
