import { merge } from "webpack-merge";
import type { Configuration } from "webpack";
import commonConfig from "./webpack.common";
import { ModuleFederationPlugin } from "@module-federation/enhanced";

const prodConfig = (): Configuration => ({
  mode: "production",
  devtool: "source-map",
  output: {
    filename: "[name].[contenthash].js",
    publicPath: "/crm/latest/",
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "crm",
      filename: "remoteEntry.js",
      exposes: {
        "./CrmApp": "./src/bootstrap",
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
