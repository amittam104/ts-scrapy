import Header from '#/components/marketing/Header'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="bg-background h-full">Main Area</div>
    </div>
  )
}
