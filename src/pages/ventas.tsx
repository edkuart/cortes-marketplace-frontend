// pages/ventas.tsx
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Ventas() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Mis Ventas</h1>

      <Tabs defaultValue="hoy" className="w-full">
        <TabsList>
          <TabsTrigger value="hoy">Hoy</TabsTrigger>
          <TabsTrigger value="semana">Esta Semana</TabsTrigger>
          <TabsTrigger value="mes">Este Mes</TabsTrigger>
        </TabsList>
        <TabsContent value="hoy">
          <Card>
            <CardHeader>
              <CardTitle>Ventas del día</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span>Huipil Cobán</span>
                <Badge variant="success">Entregado</Badge>
              </div>
              <div className="flex justify-between">
                <span>Faja típica</span>
                <Badge variant="secondary">Pendiente</Badge>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="semana">
          <Card>
            <CardHeader>
              <CardTitle>Ventas Semanales</CardTitle>
            </CardHeader>
            <CardContent>
              <p>No hay ventas registradas esta semana.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="mes">
          <Card>
            <CardHeader>
              <CardTitle>Ventas Mensuales</CardTitle>
            </CardHeader>
            <CardContent>
              <p>No hay ventas registradas este mes.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
