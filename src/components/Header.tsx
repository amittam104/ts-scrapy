import { Link } from '@tanstack/react-router'
import ThemeToggle from './ThemeToggle'
import { Button } from './ui/button'
import { LogIn, UserPlus } from 'lucide-react'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/90 px-4 backdrop-blur-lg w-full mx-auto border-b border-border/80">
      <nav className="page-wrap flex flex-wrap items-center gap-x-3 gap-y-2 py-3 sm:py-4 w-full max-w-7xl justify-between">
        <div className="flex items-center gap-2">
          <img
            src="https://tanstack.com/images/logos/logo-color-banner-600.png"
            alt="Tanstack Logo"
            className="size-6"
          />
          <h1 className="text-base font-bold">TS-Scrapy</h1>
        </div>
        <div></div>
        <div className="flex items-center gap-4">
          <div>
            <ThemeToggle />
          </div>
          <div className="flex items-center gap-2">
            <Link to="/login">
              <Button variant="secondary">
                Log in <LogIn />
              </Button>
            </Link>
            <Link to="/signup">
              <Button>
                Sign up <UserPlus />
              </Button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}
