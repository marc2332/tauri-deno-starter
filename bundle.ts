import * as esbuild from "https://deno.land/x/esbuild@v0.19.11/mod.js";
import { denoPlugin } from "https://deno.land/x/esbuild_deno_loader@0.4.3/mod.ts";

async function watch() {
  const ctx = await esbuild.context({
    plugins: [denoPlugin()],
    entryPoints: ["./www/index.tsx"],
    outfile: "./www/dist/main.js",
    bundle: true,
    format: "esm",
    define: {
      "__USE_LIVE_RELOAD": "true",
    },
  });

  const serve = await ctx.serve({
    port: 3000,
    servedir: "./www",
  });

  console.log(`Serving internally on ${serve.host}:${serve.port}`);
  console.log("Watching...");
  await ctx.watch();
}

await watch();
