import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from '#/components/ui/sidebar'
import { Link, linkOptions } from '@tanstack/react-router'
import { Bookmark, Compass, Import, SquaresExclude } from 'lucide-react'
import { NavPrimary } from '../common/NavPrimary'
import type { NavPrimaryProps, NavUserProps } from '#/lib/types'
import { NavUser } from './nav-user'

const navItems: NavPrimaryProps['items'] = linkOptions([
  {
    title: 'Items',
    to: '/dashboard/items',
    icon: Bookmark,
    activeOptions: { exact: false },
  },
  {
    title: 'Import',
    to: '/dashboard/import',
    icon: Import,
    activeOptions: { exact: false },
  },
  {
    title: 'Discover',
    to: '/dashboard/discover',
    icon: Compass,
    activeOptions: { exact: false },
  },
])
export function AppSidebar({ user }: NavUserProps) {
  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem className="py-1">
            <SidebarMenuButton className="py-2" asChild>
              <Link
                to="/"
                className="flex w-full flex-row items-center gap-3 h-12"
              >
                <div className="bg-primary size-8 flex items-center justify-center rounded-md ">
                  <SquaresExclude className="text-white size-4" />
                </div>
                <span className="text-lg font-semibold">Scrapy</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        {/* <SearchForm /> */}
      </SidebarHeader>
      <SidebarContent>
        {/* We create a SidebarGroup for each parent. */}
        {/* {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={item.isActive}>
                      <a href={item.url}>{item.title}</a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))} */}
        <NavPrimary items={navItems} />
      </SidebarContent>
      <SidebarRail />
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
    </Sidebar>
  )
}
