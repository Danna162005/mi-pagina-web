import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'

import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, maximum-scale=1',
      },
      {
        title: 'STREAM STORE | Precios de Streaming',
      },
      {
        name: 'description',
        content:
          'STREAM STORE - Los mejores precios en cuentas de streaming: Netflix, Disney+, Max, Prime Video, Paramount+, Crunchyroll y más. Planes de 1, 3 y 6 meses, y mega combos.',
      },
      {
        name: 'theme-color',
        content: '#0a0a12',
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
