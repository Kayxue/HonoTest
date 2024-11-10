import { Hono } from "jsr:@hono/hono";

import IExport from "../Interfaces/IExport.ts";

const userRoute = new Hono();
userRoute.get("getUser", (c) => {
	return c.text("Get User Response");
});

export default { route: "user", router: userRoute } as IExport;
