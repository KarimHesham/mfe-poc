import { merge } from "webpack-merge";
import webpack, { type Configuration } from "webpack";
import { ModuleFederationPlugin } from "@module-federation/enhanced";
import commonConfig from "./webpack.common";
import path from "path";

const prodConfig = (): Configuration => {
  const common = commonConfig();
  return merge(common, {
    mode: "production",
    entry: "./src/index.ts",
    output: {
      path: path.resolve(__dirname, "../dist"),
      publicPath: "/auth/latest/",
    },
    devtool: "source-map",
    plugins: [
      new ModuleFederationPlugin({
        name: "auth",
        filename: "remoteEntry.js",
        exposes: {
          "./AuthApp": "./src/bootstrap",
        },
        shared: {
          react: { singleton: true, requiredVersion: false },
          "react-dom": { singleton: true, requiredVersion: false },
          // "@mui/material": { singleton: true, requiredVersion: false },
          // "@emotion/react": { singleton: true, requiredVersion: false },
          // "@emotion/styled": { singleton: true, requiredVersion: false },
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
