import { RootLayoutProps } from '@/types/global'
import { Label } from '@radix-ui/react-dropdown-menu'
import Link from 'next/link'
import React from 'react'

const ASIDE_ITEMS = [{
  key: 'Testing',
  title: 'Testing',
  path: '/',
  icon: <p>This is icon</p>
}]

const Sidebar = () => {
  return (
    <aside className='relative bg-accent h-full px-3 py-2'>
      <ul >
        {ASIDE_ITEMS.map(item => (
          <li className='hover:underline' key={item.key}>
            <Link href={item.path}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default Sidebar