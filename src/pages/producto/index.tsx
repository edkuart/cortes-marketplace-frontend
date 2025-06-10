// pages/productos/index.tsx
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'

export default function ListaProductos() {
  const productos = [
    { id: 1, nombre: 'Corte Azul', precio: 150 },
    { id: 2, nombre: 'Huipil de Cobán', precio: 220 }
  ]

  return (
    <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
      {productos.map((producto) => (
        <Link href={`/producto/${producto.id}`} key={producto.id}>
          <Card className="cursor-pointer hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>{producto.nombre}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Precio: Q{producto.precio}</p>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}