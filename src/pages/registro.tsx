// pages/registro.tsx
import { useState } from 'react'
import { useRouter } from 'next/router'
import { useUserStore } from '@/store/user'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function Registro() {
  const router = useRouter()
  const { setUser } = useUserStore()
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleRegistro = () => {
    setUser({ id: 2, name: username, role: 'vendedor', email })
    router.push('/dashboard/vendedor')
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow rounded-xl">
        <h1 className="text-xl font-bold">Registro</h1>
        <Input placeholder="Usuario" value={username} onChange={e => setUsername(e.target.value)} />
        <Input placeholder="Correo electrónico" value={email} onChange={e => setEmail(e.target.value)} />
        <Input placeholder="Contraseña" type="password" value={password} onChange={e => setPassword(e.target.value)} />
        <Button className="w-full" onClick={handleRegistro}>Registrarse</Button>
      </div>
    </div>
  )
}