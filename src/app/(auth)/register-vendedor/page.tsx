// src/app/(auth)/register-vendedor/page.tsx
import { RegisterVendedorForm } from "@/components/register-vendedor-form"

export default function RegisterVendedorPage() {
  return (
    <div className="bg-background flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="w-full max-w-sm">
        <RegisterVendedorForm />
      </div>
    </div>
  )
}
