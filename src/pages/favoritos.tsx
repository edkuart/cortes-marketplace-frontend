// pages/favoritos.tsx
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function Favoritos() {
  const favoritos = [
    { id: 3, nombre: 'Rebozo multicolor', precio: 180 }
  ]

  return (
    <div className="p-8">
      <Card>
        <CardHeader>
          <CardTitle>Mis Favoritos</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            {favoritos.map((f) => (
              <li key={f.id} className="flex justify-between">
                <span>{f.nombre}</span>
                <span>Q{f.precio}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}