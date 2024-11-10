import { Hono } from "jsr:@hono/hono";
import { cors } from "jsr:@hono/hono/cors";
import { expandGlob } from "jsr:@std/fs";
import IExport from "./Interfaces/IExport.ts";

const app = new Hono();
app.get("/", (c) => {
	localStorage.setItem("key", "val");
	return c.text("Hello World");
});

for await (const file of expandGlob(`${Deno.cwd()}/Routes/**/*.ts`)) {
	const { route, router }: IExport = (await import(file.path)).default;
	app.route(route, router);
}

app.use(cors());

Deno.serve({ port: 3001 }, app.fetch);
