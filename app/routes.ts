import { type RouteConfig, index ,route} from "@react-router/dev/routes";

export default [index("routes/home.tsx"),route("Fonctionnality", "routes/fonctionality.tsx"),route("Concour", "routes/Concourt.tsx"),route("Blog", "routes/Blog.tsx"),route("Contact", "routes/Contact.tsx")] satisfies RouteConfig;
