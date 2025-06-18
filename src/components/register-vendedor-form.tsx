// src/components/register-vendedor-form.tsx

"use client"

import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import { UploadCloud, GalleryVerticalEnd } from "lucide-react"

import {
  registerVendedorSchema,
  RegisterVendedorValues,
} from "@/schemas/register-vendedor.schema"
import { apiRegisterVendedor } from "@/services/auth"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

// 🔵 Verificación de carga del componente
console.log("🟢 RegisterVendedorForm cargado correctamente")

export function RegisterVendedorForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const router = useRouter()

  const {
    register,
    handleSubmit,
    setError,
    control,
    formState: { errors, isSubmitting },
  } = useForm<RegisterVendedorValues>({
    resolver: zodResolver(registerVendedorSchema),
  })

  const onSubmit = async (data: RegisterVendedorValues) => {
    const { ok, message } = await apiRegisterVendedor(data)
    if (ok) router.push("/")
    else setError("root", { message })
  }

  const fileLabel = (file?: File) => (file ? file.name : "Seleccionar archivo")

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
        <div className="flex flex-col items-center gap-2">
          <GalleryVerticalEnd className="size-8" />
          <h1 className="text-xl font-bold">Registro de vendedor</h1>
          <p className="text-sm text-center text-muted-foreground">
            ¿Ya tienes cuenta?{" "}
            <a href="/login" className="underline underline-offset-4">
              Inicia sesión
            </a>
          </p>
        </div>

        <div className="grid gap-4">
          {[
            { id: "nombre", label: "Nombre", type: "text" },
            { id: "email", label: "Correo electrónico", type: "email" },
            { id: "password", label: "Contraseña", type: "password" },
            {
              id: "confirmarPassword",
              label: "Confirmar contraseña",
              type: "password",
            },
          ].map(({ id, label, type }) => (
            <div key={id} className="grid gap-2">
              <Label htmlFor={id}>{label}</Label>
              <Input id={id} type={type} {...register(id as any)} />
              {errors[id as keyof RegisterVendedorValues] && (
                <p className="text-sm text-red-500">
                  {String(errors[id as keyof RegisterVendedorValues]?.message)}
                </p>
              )}
            </div>
          ))}

          {[
            { id: "fotoDPIFrente", label: "DPI frente" },
            { id: "fotoDPIReverso", label: "DPI reverso" },
            { id: "selfieConDPI", label: "Selfie con DPI" },
          ].map(({ id, label }) => (
            <Controller
              key={id}
              control={control}
              name={id as keyof RegisterVendedorValues}
              render={({ field }) => (
                <div className="grid gap-2">
                  <Label>{label}</Label>
                  <Button
                    type="button"
                    variant="outline"
                    className="flex items-center gap-2"
                    onClick={() =>
                      (document.getElementById(id) as HTMLInputElement)?.click()
                    }
                  >
                    <UploadCloud className="size-4" />
                    {fileLabel(field.value as unknown as File)}
                  </Button>
                  <input
                    id={id}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) =>
                      field.onChange(e.target.files ? e.target.files[0] : undefined)
                    }
                  />
                  {errors[id as keyof RegisterVendedorValues] && (
                    <p className="text-sm text-red-500">
                      {
                        String(
                          errors[id as keyof RegisterVendedorValues]?.message
                        )
                      }
                    </p>
                  )}
                </div>
              )}
            />
          ))}

          {errors.root?.message && (
            <p className="text-sm text-center text-red-600">{errors.root.message}</p>
          )}

          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Enviando..." : "Registrarse"}
          </Button>
        </div>
      </form>

      <p className="text-center text-xs text-muted-foreground *:[a]:underline *:[a]:underline-offset-4">
        Al continuar, aceptas nuestros <a href="#">Términos</a> y{" "}
        <a href="#">Política de privacidad</a>.
      </p>
    </div>
  )
}
