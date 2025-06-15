import { merge } from "webpack-merge";
import type { Configuration } from "webpack";
import commonConfig from "./webpack.common";
import { ModuleFederationPlugin } from "@module-federation/enhanced";
import path from "path";
import webpack from "webpack";

const prodConfig = (): Configuration => {
  const common = commonConfig();
  return merge(common, {
    mode: "production",
    devtool: "source-map",
    entry: "./src/index.ts",
    output: {
      path: path.resolve(__dirname, "../dist"),
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
};

// Actually run webpack
webpack(prodConfig(), (err, stats) => {
  if (err || stats?.hasErrors()) {
    console.error(err || stats?.toJson().errors);
    process.exit(1);
  }
  console.log(stats?.toString({ colors: true }));
});
