// src/services/auth.ts
import { RegisterCompradorValues } from "@/schemas/register-comprador.schema"
import { RegisterVendedorValues } from "@/schemas/register-vendedor.schema"

export interface ApiResult {
  ok: boolean
  message?: string
}

/* ---------- REGISTRO COMPRADOR (JSON) ---------- */
export async function apiRegisterComprador(
  input: RegisterCompradorValues
): Promise<ApiResult> {
  try {
    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(input),
    })

    if (!res.ok) {
      const { error } = await res.json().catch(() => ({ error: "Error desconocido" }))
      return { ok: false, message: error ?? "Error al registrar" }
    }

    return { ok: true }
  } catch {
    return { ok: false, message: "Sin conexión con el servidor" }
  }
}

/* ---------- REGISTRO VENDEDOR (multipart/form-data) ---------- */
export async function apiRegisterVendedor(
  values: RegisterVendedorValues
): Promise<ApiResult> {
  try {
    // Preparamos el FormData con campos de texto y archivos
    const form = new FormData()
    form.append("nombre", values.nombre)
    form.append("email", values.email)
    form.append("password", values.password)
    form.append("fotoDPIFrente", values.fotoDPIFrente)
    form.append("fotoDPIReverso", values.fotoDPIReverso)
    form.append("selfieConDPI", values.selfieConDPI)

    const res = await fetch("/api/auth/register-vendedor", {
      method: "POST",
      body: form, // NO agregues Content-Type: el navegador lo define con boundary
    })

    if (!res.ok) {
      const { error } = await res.json().catch(() => ({ error: "Error desconocido" }))
      return { ok: false, message: error ?? "Error al registrar vendedor" }
    }

    return { ok: true }
  } catch {
    return { ok: false, message: "Sin conexión con el servidor" }
  }
}
