import * as esbuild from "https://deno.land/x/esbuild@v0.14.39/mod.js";
import { denoPlugin } from "https://deno.land/x/esbuild_deno_loader@0.4.3/mod.ts";

const res = await esbuild.serve({
  port: 3000,
  servedir: "./www"
}, {
  plugins: [denoPlugin()],
  entryPoints: ["./www/index.tsx"],
  outfile: "./www/dist/main.js",
  bundle: true,
  format: "esm",
});

await res.wait;

esbuild.stop();
