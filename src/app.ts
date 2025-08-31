import { Hono } from "hono";
const app = new Hono();

// Operation
// CRUD

app.get("/", (c) => c.text("Hello, World!"));
app.get("/profile", (c) => c.text("Profile Page"));

export default app;