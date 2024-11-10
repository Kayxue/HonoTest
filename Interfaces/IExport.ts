import { Hono } from "jsr:@hono/hono";

export default interface IExport {
	route: string;
	router: Hono;
}
