//src/features/auth/RegisterForm.tsx

"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import { GalleryVerticalEnd } from "lucide-react"

import { registerCompradorSchema, RegisterCompradorValues } from "@/schemas/register-comprador.schema"
import { apiRegisterComprador } from "@/services/auth"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function RegisterForm({ className, ...props }: React.ComponentProps<"div">) {
  const router = useRouter()

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<RegisterCompradorValues>({
    resolver: zodResolver(registerCompradorSchema),
  })

  const onSubmit = async (data: RegisterCompradorValues) => {
    const { ok, message } = await apiRegisterComprador(data)
    if (ok) {
      router.push("/")
    } else {
      setError("root", { message })
    }
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
        <div className="flex flex-col items-center gap-2">
          <div className="flex size-8 items-center justify-center rounded-md">
            <GalleryVerticalEnd className="size-6" />
          </div>
          <h1 className="text-xl font-bold">Crea tu cuenta</h1>
          <p className="text-sm text-center text-muted-foreground">
            ¿Ya tienes cuenta? <a href="/login" className="underline underline-offset-4">Inicia sesión</a>
          </p>
        </div>

        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="nombre">Nombre</Label>
            <Input id="nombre" {...register("nombre")} />
            {errors.nombre && <p className="text-sm text-red-500">{errors.nombre.message}</p>}
          </div>

          <div className="grid gap-2">
            <Label htmlFor="email">Correo electrónico</Label>
            <Input id="email" type="email" {...register("email")} />
            {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
          </div>

          <div className="grid gap-2">
            <Label htmlFor="password">Contraseña</Label>
            <Input id="password" type="password" {...register("password")} />
            {errors.password && <p className="text-sm text-red-500">{errors.password.message}</p>}
          </div>

          <div className="grid gap-2">
            <Label htmlFor="confirmarPassword">Confirmar contraseña</Label>
            <Input id="confirmarPassword" type="password" {...register("confirmarPassword")} />
            {errors.confirmarPassword && <p className="text-sm text-red-500">{errors.confirmarPassword.message}</p>}
          </div>

          <div className="grid gap-2">
            <Label htmlFor="telefono">Teléfono (opcional)</Label>
            <Input id="telefono" {...register("telefono")} />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="direccion">Dirección (opcional)</Label>
            <Input id="direccion" {...register("direccion")} />
          </div>

          {errors.root?.message && <p className="text-sm text-center text-red-600">{errors.root.message}</p>}

          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Creando cuenta..." : "Registrarse"}
          </Button>
        </div>
      </form>

      <p className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs *:[a]:underline *:[a]:underline-offset-4">
        Al continuar, aceptas nuestros <a href="#">Términos</a> y <a href="#">Política de privacidad</a>.
      </p>
    </div>
  )
}
