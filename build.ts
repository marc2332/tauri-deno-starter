import * as esbuild from "https://deno.land/x/esbuild@v0.15.8/mod.js";
import { denoPlugin } from "https://deno.land/x/esbuild_deno_loader@0.5.2/mod.ts";

await esbuild.build({
    plugins: [denoPlugin()],
    entryPoints: ["./www/index.tsx"],
    outfile: "./www/dist/main.js",
    bundle: true,
    format: "esm",
});

esbuild.stop();
