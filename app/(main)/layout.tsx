import Sidebar from '@/components/layout/side-bar'
import { RootLayoutProps } from '@/types/global'

const Layout = ({ children }: RootLayoutProps) => {
  return (
    <main className="grid grid-cols-12 gap-3 min-w-[1000px] max-w-[1200px] mx-auto py-20">
      <div className='col-span-3'>
        <Sidebar />
      </div>
      <div className='col-span-9'>
        {children}
      </div>
    </main>
  )
}

export default Layout