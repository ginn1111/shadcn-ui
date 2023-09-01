'use client'

import Link from "next/link"
import Logo from './logo'
import { ModeToggle } from "./toggle-theme"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "./navigation-menu"

const Header = () => {
  return <header className='w-full h-header dark:shadow-white/30 dark:shadow-md mx-auto shadow-sm bg-card/10 backdrop-blur-[14px] fixed left-0 right-0'>
    <div className="h-full container flex justify-between items-center">
      <Logo />
      <NavigationMenu className="h-full" defaultValue="components">
        <NavigationMenuList className="flex h-full items-center gap-[1rem]">
          <NavigationMenuItem value="components 1">
            <NavigationMenuTrigger>
              <NavigationMenuLink href="/components">Component 1</NavigationMenuLink>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationComponentContent items={[
                { title: 'Component title 1', link: '/components/title1' },
                { title: 'Component title 2', link: '/components/title2' }
              ]} />
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem value="components">
            <NavigationMenuTrigger>
              <NavigationMenuLink href="/components">Component</NavigationMenuLink>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationComponentContent items={[{ title: 'Component title 1', link: '/components/title1' }]} />
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
  title: string;
  link: string;
}

type NavigationComponentContentProps = {
  items: Item[]
}

const NavigationComponentContent = (props: NavigationComponentContentProps) => {
  const { items } = props
  return <ul className="grid grid-cols-2 w-[200px] gap-2 min-w-max px-[1rem] py-[0.5rem]">
    {items.map(item => {
      return <li className="text-base"><Link href={item.link}>{item.title}</Link></li>
    })}
  </ul>
}

export default Header
