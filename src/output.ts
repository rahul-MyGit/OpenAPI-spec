import { z } from '@hono/zod-openapi'



// The output from the file
export const UserSchema = z.object({
  name: z.string().min(1).max(10).openapi({
    example: "John"
  }),
  age: z.number().min(1).max(100).openapi({
    example: 30
  }),
  id: z.string().min(1).max(10).openapi({
    example: "24"
  })
})