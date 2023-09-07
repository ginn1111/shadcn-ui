'use client'

import Link from "next/link"
import Logo from './logo'
import { ModeToggle } from "./toggle-theme"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "./navigation-menu"

const Header = () => {
  return <header className='w-full h-header dark:shadow-white/30 dark:shadow-md mx-auto shadow-sm bg-card/10 backdrop-blur-[14px] fixed left-0 right-0'>
    <div className="h-full container flex justify-between items-center">
      <Logo />
      <NavigationMenu className="h-full">
        <NavigationMenuList className="flex h-full items-center gap-[1rem]">
          <NavigationMenuItem value="components 1">
            <NavigationMenuTrigger>
              <NavigationMenuLink href="/components">Component 1</NavigationMenuLink>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationComponentContent items={[
                { key: 'c1', title: 'Component title 1', link: '/components/title1' },
                { key: 'c2', title: 'Component title 2', link: '/components/title2' }
              ]} />
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem value="components">
            <NavigationMenuTrigger>
              <NavigationMenuLink href="/components">Component</NavigationMenuLink>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationComponentContent items={[{ key: 'c2', title: 'Component title 1', link: '/components/title1' }]} />
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuLink>
            <ModeToggle />
          </NavigationMenuLink>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  </header>
}

type Item = {
  key: string;
  title: string;
  link: string;
}

type NavigationComponentContentProps = {
  items: Item[]
}

const NavigationComponentContent = (props: NavigationComponentContentProps) => {
  const { items } = props
  return <ul className="grid grid-cols-2 w-[250px] gap-[1rem] min-w-max px-[1.25rem] py-[0.75rem]">
    {items.map(item => {
      return <li key={item.link} className="text-base">
        <Link href={item.link}>
          <div className="bg-card min-h-[100px] shadow-md px-[1rem] py-[0.5rem]">
            {item.title}
          </div>
        </Link>
      </li>
    })}
  </ul>
}

export default Header
