import { Hono } from "jsr:@hono/hono";
import IExport from "../Interfaces/IExport.ts";

const classroomRoute = new Hono();

classroomRoute.get("getClassroom", (c) => {
	return c.text("Get Classroom Response");
});

export default { route: "classroom", router: classroomRoute } as IExport;
