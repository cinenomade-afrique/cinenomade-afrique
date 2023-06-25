import {defineConfig} from "vite";
import {ViteEjsPlugin} from "vite-plugin-ejs";

export default defineConfig({
    plugins: [
      ViteEjsPlugin(
          {title: 'Cine Nomade Afrique'},
          {
            ejs: {
              // ejs options goes here.
              beautify: true,
            },
          }
      ),
    ],
  });