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
  modules: ["nuxt-calendly"],
  // entirely optional
  calendly: {
    /**
     * Setting to `false` disables the module.
     * @default true
     * @description Use this setting to disable the module.
     */
    isEnabled: true,
    /**
     * Loads the required CSS for Calendly directly into your app. Saves a HTTP Request.
     * @default true
     * @description Disable if you already load https://assets.calendly.com/assets/external/widget.css by yourself, or you want to load a custom CSS.
     */
    loadWidgetCSS: true,
    /**
     * Loads a required SVG Asset for Calendly directly into your app. Saves a HTTP Request.
     * @default true
     * @description Disable if you already load https://assets.calendly.com/assets/external/close-icon.svg by yourself, or you want to load a custom SVG.
     */
    loadWidgetCloseIconSvg: true,
  },
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
