export default defineNuxtConfig({
  srcDir: "", // Set the source directory
  devtools: {
    enabled: true,
    timeline: {
      enabled: true,
    },
  },
  runtimeConfig: {
    public: {},
  },
  css: [],
  ssr: false,
  modules: [],
  app: {
    head: {
      title: "",
      meta: [
        {
          charset: "utf-8",
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
      ],
      script: [
        {
          type: "module",
          src: "https://assets.calendly.com/assets/external/widget.js",
        },
      ],
    },
  },
  // plugins: [{ src: "~/plugins/useBootstrap.client.ts", mode: "client" }],
});
