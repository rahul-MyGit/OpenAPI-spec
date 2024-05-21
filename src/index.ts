import { OpenAPIHono, createRoute } from "@hono/zod-openapi"
import { ParamSchema } from "./input"
import { UserSchema } from "./output"

import { Hono } from "hono";
import { swaggerUI } from "@hono/swagger-ui";

const app = new OpenAPIHono();


const getUserRoute = createRoute({
  method: 'get',
  path: '/user/{id}',
  request: {
    params: ParamSchema
  },
  responses: {
    200: {
      content: {
        'application/json': {
          schema: UserSchema
        }
      },
      description: "Get the user details"
    }
  }
})

app.openapi(getUserRoute, (c)=>{
  const {id} = c.req.valid("param");
  return c.json({
    name: "Rahul",
    age: 23,
    id
  });
})


//The OpenAPI documentation will be available at /doc
app.doc('/doc', {
  openapi: '3.0.0',
  info: {
    version: '1.0.0',
    title: 'My API',
  },
})


//swagger endpoint
app.get('/ui', swaggerUI({url: '/doc'}));

export default app
