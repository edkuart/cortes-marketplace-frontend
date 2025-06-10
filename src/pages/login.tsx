// pages/login.tsx
import { useState } from 'react'
import { useRouter } from 'next/router'
import { useUserStore } from '@/store/user'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function Login() {
  const router = useRouter()
  const { setUser } = useUserStore()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    setUser({ id: 1, name: 'Demo User', role: 'vendedor', email })
    router.push('/dashboard/vendedor')
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow rounded-xl">
        <h1 className="text-xl font-bold">Iniciar sesión</h1>
        <Input placeholder="Correo electrónico" value={email} onChange={e => setEmail(e.target.value)} />
        <Input placeholder="Contraseña" type="password" value={password} onChange={e => setPassword(e.target.value)} />
        <Button className="w-full" onClick={handleLogin}>Entrar</Button>
      </div>
    </div>
  )
}