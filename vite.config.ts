import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { products } from "./data/products";
import { corridorPath } from "./seo/urls";
import { PAGE_SIZE } from "./data/browse";

export default defineConfig({
  appType: "mpa",
  plugins: [
    react(),
    {
      name: "archive-dev-routes",
      configureServer(server) {
        server.middlewares.use((request, _response, next) => {
          const url = new URL(request.url || "/", "http://localhost");
          const page = url.pathname.match(/^\/browse\/page\/(\d+)\/$/);
          // Only known generated browse routes get the app during development.
          // Production serves their pre-rendered files and keeps genuine 404s.
          if (
            url.pathname === corridorPath ||
            (page &&
              Number(page[1]) >= 2 &&
              Number(page[1]) <= Math.ceil(products.length / PAGE_SIZE))
          )
            request.url = "/" + url.search;
          next();
        });
      },
    },
  ],
  server: { port: 3000, host: "0.0.0.0" },
});
