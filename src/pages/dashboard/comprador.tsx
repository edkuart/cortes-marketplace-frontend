// pages/dashboard/comprador.tsx
import { useUserStore } from '@/store/user'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function DashboardComprador() {
  const { user } = useUserStore()
  const router = useRouter()

  useEffect(() => {
    if (!user) {
      router.push('/login')
    }
  }, [user])

  return (
    <div className="p-8">
      <Card>
        <CardHeader>
          <CardTitle>Hola, {user?.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Bienvenido al panel de comprador. Aquí podrás revisar tus pedidos y productos favoritos.</p>
        </CardContent>
      </Card>
    </div>
  )
}