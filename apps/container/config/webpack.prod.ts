import { merge } from "webpack-merge";
import webpack, { type Configuration } from "webpack";
import commonConfig from "./webpack.common";
import { ModuleFederationPlugin } from "@module-federation/enhanced";
import path from "path";

const domain = process.env.PRODUCTION_URL;

const prodConfig = (): Configuration => {
  const common = commonConfig();
  return merge(common, {
    mode: "production",
    devtool: "source-map",
    entry: "./src/index.ts",
    output: {
      path: path.resolve(__dirname, "../dist"),
      publicPath: "/container/latest/",
    },
    plugins: [
      new ModuleFederationPlugin({
        name: "container",
        remotes: {
          cms: `cms@${domain}/cms/latest/remoteEntry.js`,
          crm: `crm@${domain}/crm/latest/remoteEntry.js`,
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
};

webpack(prodConfig(), (err, stats) => {
  if (err || stats?.hasErrors()) {
    console.error(err || stats?.toJson().errors);
    process.exit(1);
  }
  console.log(stats?.toString({ colors: true }));
});
