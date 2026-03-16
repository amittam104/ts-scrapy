import { authClient } from '#/lib/auth-client'
import { SidebarTrigger } from '@/components/ui/sidebar'
import { useNavigate } from '@tanstack/react-router'
import { toast } from 'sonner'
import { Button } from '../ui/button'
import { LogOut } from 'lucide-react'

export default function AppHeader() {
  const { data: session, isPending } = authClient.useSession()
  const navigate = useNavigate()

  const handleSignOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          toast.success('Signed out successfully')
          navigate({ to: '/' }) // redirect to login page
        },
        onError: ({ error }) => {
          toast.error(error.message)
        },
      },
    })
  }

  return (
    <header className="sticky top-0 flex h-16 shrink-0 items-center justify-between gap-2 border-b bg-background px-4">
      <SidebarTrigger className="-ml-1" />

      {isPending
        ? null
        : session && (
            <div>
              <Button
                onClick={async () => handleSignOut()}
                variant="destructive"
              >
                Log Out <LogOut className="size-3 ml-0.5" />
              </Button>
            </div>
          )}
    </header>
  )
}
