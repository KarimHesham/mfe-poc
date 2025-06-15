import { merge } from "webpack-merge";
import type { Configuration } from "webpack";
import commonConfig from "./webpack.common";
import { ModuleFederationPlugin } from "@module-federation/enhanced";

const prodConfig = (): Configuration => ({
  mode: "production",
  devtool: "source-map",
  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        cms: "cms@http://localhost:3002/remoteEntry.js",
        crm: "crm@http://localhost:3001/remoteEntry.js",
      },
      shared: {
        react: { singleton: true, requiredVersion: false, eager: true },
        "react-dom": { singleton: true, requiredVersion: false, eager: true },
        "@mui/material": {
          singleton: true,
          requiredVersion: false,
          eager: true,
        },
        "@emotion/react": {
          singleton: true,
          requiredVersion: false,
          eager: true,
        },
        "@emotion/styled": {
          singleton: true,
          requiredVersion: false,
          eager: true,
        },
      },
    }),
  ],
});

module.exports = merge(commonConfig, prodConfig);
