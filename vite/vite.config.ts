import { defineConfig, loadEnv } from "vite"
import react from "@vitejs/plugin-react-swc"
import path from "path"
import fs from "fs"
import { exec } from "child_process"
import dotenv from "dotenv"
// console.log(dotenv.config().parsed)

// open on start
// https
// custom port
// TODO proxy
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    server: {
      https: {
        key: fs.readFileSync(".cert/vite.local.com-key.pem"),
        cert: fs.readFileSync(".cert/vite.local.com.pem"),
      },
      host: "vite.local.com",
      port: 5000,
      open: true,
    },
    resolve: {
      alias: {
        src: path.resolve(__dirname, "./src"),
      },
    },
    define: {
      "process.env": loadEnv(mode, process.cwd(), ""),
    },
    plugins: [
      //https://github.com/williamyorkl/vite-plugin-proxy-middleware
      {
        name: "configure-server",
        apply: "serve",
        configureServer: (server) => {
          // server.use("/devtools/get-result", (req, res) => {
          //   debugger
          // })
          // const middlewares = server.middlewares
          // middlewares.use("/devtools/get-result", (req, res) => {
          //   debugger
          // })
          // https://github.com/mammadataei/vite-plugin-graphql-server/blob/main/src/index.ts
          server.middlewares.use(
            "/devtools/get-result",
            async (req, res, next) => {
              // custom handle request...
              const getBranch = () => {
                return new Promise((resolve) => {
                  exec("git branch --show", (err, stdout) => {
                    return resolve(stdout.replaceAll("\n", ""))
                  })
                })
              }
              res.setHeader("Content-Type", "application/json")
              res.write(
                JSON.stringify({
                  branch: await getBranch(),
                })
              )
              res.end()
            }
          )
          // https://vitejs.dev/guide/api-plugin.html#vite-specific-hooks
        },
      },
      react({
        jsxImportSource: "@emotion/react",
        plugins: [["@swc/plugin-emotion", {}]],
      }),
    ],
  }
})
