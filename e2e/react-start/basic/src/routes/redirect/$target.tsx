import { retainSearchParams } from '@tanstack/react-router'
import z from 'zod'

export const Route = createFileRoute({
  params: {
    parse: (p) =>
      z
        .object({
          target: z.union([z.literal('internal'), z.literal('external')]),
        })
        .parse(p),
  },
  validateSearch: z.object({
    reloadDocument: z.boolean().optional(),
    preload: z.literal(false).optional(),
    externalHost: z.string().optional(),
  }),
  search: {
    middlewares: [retainSearchParams(['externalHost'])],
  },
})
