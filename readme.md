# Deno 🦕 + Tauri

Starter template for Tauri, bundling the frontend made with React using Deno with esbuild.

You can use TypeScript or JavaScript. With React or any other library, or just vanilla, with no extra steps.

- `src-tauri`: Rust backend
- `www`: Web frontend
- `build.ts`: Script to build your frontend
- `bundle.ts`: Script to bundle your frontend while developing

Prerequisites:
- [Rust](https://www.rust-lang.org/)
- [Deno](https://deno.land/)
- [Tauri](https://tauri.studio/v1/guides/getting-started/beginning-tutorial#alternatively-install-tauri-cli-as-a-cargo-subcommand)
- [Tauri os-specific dependencies](https://tauri.studio/v1/guides/getting-started/prerequisites#installing)

Development:
```shell
cargo tauri dev
```

Building:
```shell
cargo tauri build
```

Formatting:
```shell
deno fmt www
cargo fmt
```

Linting:
```shell
deno lint www
cargo clippy
```
