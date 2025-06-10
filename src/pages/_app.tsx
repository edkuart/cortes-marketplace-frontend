// pages/_app.tsx
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { NextIntlClientProvider } from 'next-intl';
import Navbar from '@/components/Navbar'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextIntlClientProvider messages={pageProps.messages} locale="es">
      <Navbar />
      <Component {...pageProps} />
    </NextIntlClientProvider>
  );
}