import { merge } from "webpack-merge";
import type { Configuration } from "webpack";
import { ModuleFederationPlugin } from "@module-federation/enhanced";
import commonConfig from "./webpack.common";

const prodConfig = (): Configuration => ({
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
    publicPath: "/cms/latest/",
  },
  devtool: "source-map",
  plugins: [
    new ModuleFederationPlugin({
      name: "cms",
      filename: "remoteEntry.js",
      exposes: {
        "./CmsApp": "./src/bootstrap",
      },
      shared: {
        react: { singleton: true, requiredVersion: false },
        "react-dom": { singleton: true, requiredVersion: false },
        "@mui/material": { singleton: true, requiredVersion: false },
        "@emotion/react": { singleton: true, requiredVersion: false },
        "@emotion/styled": { singleton: true, requiredVersion: false },
      },
    }),
  ],
});

module.exports = merge(commonConfig, prodConfig);
