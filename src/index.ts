import openapi from "@elysiajs/openapi";
import { barista } from "@roastery/barista";
import type { OpenAPIV3 } from "openapi-types";

type Args = {
	tags?: OpenAPIV3.TagObject[];
	info?: OpenAPIV3.InfoObject;
	externalDocs?: OpenAPIV3.ExternalDocumentationObject;
};

export function CaffeineApiDocs(enabled: boolean, url: string, args?: Args) {
	return barista().use(
		openapi({
			path: "/docs",
			scalar: { showDeveloperTools: "never" },
			enabled,
			documentation: {
				...args,
				servers: [{ url, description: "Base URL" }],
			},
		}),
	);
}
