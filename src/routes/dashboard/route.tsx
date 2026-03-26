import AppHeader from '#/components/app/app-header'
import { AppSidebar } from '#/components/app/app-sidebar'
import { getSessionFn } from '#/data/session'
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'
import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard')({
  component: RouteComponent,
  loader: async () => await getSessionFn(),
})

function RouteComponent() {
  const { session, user } = Route.useLoaderData()

  console.log('user data from server function', user)
  return (
    <SidebarProvider>
      <AppSidebar user={user} />
      <SidebarInset>
        <AppHeader />
        <div className="flex flex-1 flex-col gap-4 p-4">
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
