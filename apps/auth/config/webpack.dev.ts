import { merge } from "webpack-merge";
import { ModuleFederationPlugin } from "@module-federation/enhanced";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import type { Configuration } from "webpack";
import commonConfig from "./webpack.common";

const devConfig = (): Configuration => {
  const common = commonConfig();
  return merge(common, {
    mode: "development",
    entry: "./src/index.ts",
    output: {
      publicPath: "http://localhost:3003/",
    },
    devtool: "cheap-module-source-map",
    devServer: {
      port: 3003,
      historyApiFallback: {
        index: "/index.html",
      },
    },
    plugins: [
      new ModuleFederationPlugin({
        name: "auth",
        filename: "remoteEntry.js",
        exposes: {
          "./AuthApp": "./src/bootstrap",
        },
        shared: {
          react: { singleton: true, requiredVersion: false, eager: true },
          "react-dom": { singleton: true, requiredVersion: false, eager: true },
          // "@mui/material": {
          //   singleton: true,
          //   requiredVersion: false,
          //   eager: true,
          // },
          // "@emotion/react": {
          //   singleton: true,
          //   requiredVersion: false,
          //   eager: true,
          // },
          // "@emotion/styled": {
          //   singleton: true,
          //   requiredVersion: false,
          //   eager: true,
          // },
          "@suite-poc/ui-kit": {
            singleton: true,
            requiredVersion: false,
            eager: true,
          },
        },
      }),
    ],
  });
};

export default devConfig;
