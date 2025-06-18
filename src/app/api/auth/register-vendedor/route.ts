// 📂 src/app/(auth)/register-vendedor/route.ts

import { NextRequest, NextResponse } from "next/server"
import formidable, { type Fields, type Files } from "formidable"

/**
 * ❗️Evita que Next.js intente procesar el body automáticamente.
 * Esto es obligatorio al usar formidable con App Router.
 */
export const config = {
  api: {
    bodyParser: false,
  },
}

/**
 * 🧩 Función para parsear el formulario multipart con formidable
 */
async function parseForm(
  req: NextRequest
): Promise<{ fields: Fields; files: Files }> {
  return new Promise((resolve, reject) => {
    const form = formidable({ multiples: false })
    form.parse(req as any, (err, fields, files) => {
      if (err) return reject(err)
      resolve({ fields, files })
    })
  })
}

/**
 * 🔐 Endpoint de registro de vendedor
 */
export async function POST(req: NextRequest) {
  try {
    const { fields, files } = await parseForm(req)

    const nombre = fields.nombre as string | undefined
    const email = fields.email as string | undefined
    const password = fields.password as string | undefined
    const fotoFrente = files.fotoDPIFrente
    const fotoReverso = files.fotoDPIReverso
    const selfieDPI = files.selfieConDPI

    // ✅ Verifica que todo esté presente
    if (!nombre || !email || !password || !fotoFrente || !fotoReverso || !selfieDPI) {
      return NextResponse.json(
        { error: "Todos los campos son requeridos." },
        { status: 400 }
      )
    }

    // 🧪 Aquí podrías validar con Zod si lo deseas nuevamente

    // TODO: Mover imágenes a carpeta /public/uploads o subir a S3/Cloudinary
    // TODO: Hashear la contraseña
    // TODO: Guardar en la base de datos el nuevo usuario vendedor con rol: "vendedor"

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error("Error en registro vendedor:", err)
    return NextResponse.json(
      { error: "Error al procesar el formulario" },
      { status: 500 }
    )
  }
}