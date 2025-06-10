// pages/producto/[id].tsx
import { useRouter } from 'next/router'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function ProductoDetalle() {
  const router = useRouter()
  const { id } = router.query

  return (
    <div className="p-8">
      <Card>
        <CardHeader>
          <CardTitle>Producto #{id}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Descripción del producto simulado.</p>
          <p>Precio: Q120.00</p>
        </CardContent>
      </Card>
    </div>
  )
}