import { Server } from "@hapi/hapi";

export default function registerRoute(server: Server): void {
    server.route({
        method: "GET",
        path: "/hello",
        handler: async _request => {
            return "Hello, world!";
        }
    });
}
