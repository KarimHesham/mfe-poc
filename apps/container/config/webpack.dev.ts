import { merge } from "webpack-merge";
import commonConfig from "./webpack.common";
import { ModuleFederationPlugin } from "@module-federation/enhanced";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import type { Configuration } from "webpack";

const devConfig = (): Configuration => {
  const common = commonConfig();
  return merge(common, {
    mode: "development",
    entry: "./src/index.ts",
    output: {
      publicPath: "http://localhost:3000/",
    },
    devtool: "cheap-module-source-map",
    devServer: {
      port: 3000,
      historyApiFallback: true,
    },
    plugins: [
      new ModuleFederationPlugin({
        name: "container",
        remotes: {
          crm: "crm@http://localhost:3001/remoteEntry.js",
          cms: "cms@http://localhost:3002/remoteEntry.js",
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
