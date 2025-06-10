// components/Navbar.tsx
'use client'
import Link from 'next/link'
import { useUserStore } from '@/store/user'
import { Button } from '@/components/ui/button'

export default function Navbar() {
  const { user, logout } = useUserStore()

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-gray-100 border-b">
      <div>
        <Link href="/" className="font-bold text-lg">Cortes Market</Link>
      </div>
      <div className="flex gap-4 items-center">
        {user ? (
          <>
            <span>{user.name}</span>
            <Button onClick={logout}>Cerrar sesión</Button>
          </>
        ) : (
          <>
            <Link href="/login">Login</Link>
            <Link href="/registro">Registro</Link>
          </>
        )}
      </div>
    </nav>
  )
}