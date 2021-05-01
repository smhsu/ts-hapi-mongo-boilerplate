import { Server } from "@hapi/hapi";

/**
 * Serves everything in the "public" folder as static content.
 * 
 * @param server - the Hapi server to add the route to
 */
export default function registerRoutes(server: Server): void {
    server.route({
        method: "GET",
        path: "/{any*}",
        handler: {
            directory: {
                path: "public",
                listing: false
            }
        }
    });
}
