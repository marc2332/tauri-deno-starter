declare const __USE_LIVE_RELOAD: boolean | undefined;

import React from "https://esm.sh/react@18";
import { createRoot } from "https://esm.sh/react-dom@18/client";
import App from "./App.tsx";

// __USE_LIVE_RELOAD is defined in `define` and gets replaced by esbuild
const useLiveReload = __USE_LIVE_RELOAD;
if (useLiveReload) {
  console.log("Using live reload");
  new EventSource("/esbuild").addEventListener(
    "change",
    () => location.reload(),
  );
}

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(<App />);
