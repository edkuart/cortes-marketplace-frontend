// pages/carrito.tsx

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function Carrito() {
  const productos = [
    { id: 1, nombre: 'Blusa típica', precio: 100 },
    { id: 2, nombre: 'Faja bordada', precio: 80 }
  ]

  const total = productos.reduce((acc, p) => acc + p.precio, 0)

  return (
    <div className="p-8">
      <Card>
        <CardHeader>
          <CardTitle>Carrito de Compras</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            {productos.map(p => (
              <li key={p.id} className="flex justify-between">
                <span>{p.nombre}</span>
                <span>Q{p.precio}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex justify-between font-bold">
            <span>Total</span>
            <span>Q{total}</span>
          </div>
          <Button className="mt-4 w-full">Proceder al pago</Button>
        </CardContent>
      </Card>
    </div>
  )
}