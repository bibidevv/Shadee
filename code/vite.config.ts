import react from "@vitejs/plugin-react";
import rsc from "@vitejs/plugin-rsc";

import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ mode }) => {
	// modifier l'hôte MySQL pour github actions
	if (process.env.GITHUB_ACTIONS) {
		process.env.MYSQL_HOST = "127.0.0.1";
	}
	return {
		server: {
			port: 5173,
			host: true,
		},
		test: {
			// charger le fichier d'environnement de tests
			env: loadEnv(mode, process.cwd(), ""),

			// inclure ou exclure des fichiers
			coverage: {
				exclude: ["node_modules", "mongodb", "server/index.ts"],
				include: ["server/**/*.ts"],
				// dossier d'exportation de la couverture de code en html
				reportsDirectory: "tests/coverage",
			},
		},
		plugins: [
			rsc({
				// `entries` option is only a shorthand for specifying each `rollupOptions.input` below
				// > entries: { rsc, ssr, client },
				//
				// by default, the plugin setup request handler based on `default export` of `rsc` environment `rollupOptions.input.index`.
				// This can be disabled when setting up own server handler e.g. `@cloudflare/vite-plugin`.
				// > serverHandler: false
			}),

			// use any of react plugins https://github.com/vitejs/vite-plugin-react
			// to enable client component HMR
			react(),

			// use https://github.com/antfu-collective/vite-plugin-inspect
			// to understand internal transforms required for RSC.
			// import("vite-plugin-inspect").then(m => m.default()),
		],

		// specify entry point for each environment.
		// (currently the plugin assumes `rollupOptions.input.index` for some features.)
		environments: {
			// `rsc` environment loads modules with `react-server` condition.
			// this environment is responsible for:
			// - RSC stream serialization (React VDOM -> RSC stream)
			// - server functions handling
			rsc: {
				build: {
					rollupOptions: {
						input: {
							index: "./src/framework/entry.rsc.tsx",
						},
					},
				},
			},

			// `ssr` environment loads modules without `react-server` condition.
			// this environment is responsible for:
			// - RSC stream deserialization (RSC stream -> React VDOM)
			// - traditional SSR (React VDOM -> HTML string/stream)
			ssr: {
				build: {
					rollupOptions: {
						input: {
							index: "./src/framework/entry.ssr.tsx",
						},
					},
				},
			},

			// client environment is used for hydration and client-side rendering
			// this environment is responsible for:
			// - RSC stream deserialization (RSC stream -> React VDOM)
			// - traditional CSR (React VDOM -> Browser DOM tree mount/hydration)
			// - refetch and re-render RSC
			// - calling server functions
			client: {
				build: {
					rollupOptions: {
						input: {
							index: "./src/framework/entry.browser.tsx",
						},
					},
				},
			},
		},
	};
});
