// pages/dashboard/vendedor.tsx
import { useUserStore } from '@/store/user'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function DashboardVendedor() {
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
          <CardTitle>Bienvenido, {user?.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Este es tu panel como vendedor. Aquí podrás ver tus productos, ventas y reseñas.</p>
        </CardContent>
      </Card>
    </div>
  )
}