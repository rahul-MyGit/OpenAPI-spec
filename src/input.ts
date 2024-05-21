import { z } from '@hono/zod-openapi'


// for inputs from the user on the route
export const ParamSchema = z.object({
  id: z.string().min(1).max(3).openapi({
    param: {
      name: 'id',
      in: 'path'
    },
    example: "123"
  })
})
