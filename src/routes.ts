import { type RouteConfig, route } from "@react-router/dev/routes";

export default [
  route("/login", "pages/login.tsx"),
  route("*?", "catchall.tsx"),
] satisfies RouteConfig;
