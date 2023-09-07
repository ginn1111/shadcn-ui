import React from 'react'
import Header from '@/components/ui/header'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex flex-col h-full">
    <Header />
    <main className="container flex-1 mt-header">
      {children}
    </main>
  </div>
}

export default Layout
