import { SignupForm } from '#/components/common/signup-form'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth/signup/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="max-w-sm w-full p-4">
      <SignupForm />
    </div>
  )
}
