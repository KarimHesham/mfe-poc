import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import type { Configuration } from "webpack";

const commonConfig = (): Configuration => ({
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      "@suite-poc/ui-kit": path.resolve(
        __dirname,
        "../../../packages/ui-kit/src"
      ),
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        options: {
          transpileOnly: true,
        },
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
});

export default commonConfig;
