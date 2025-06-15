import webpack from "webpack";
import WebpackDevServer from "webpack-dev-server";
import devConfig from "./webpack.dev";

const config = devConfig();
const compiler = webpack(config);
const server = new WebpackDevServer(config.devServer, compiler);

server.startCallback(() => {
  console.log(
    `🚀 Container Dev Server is running at http://localhost:${config.devServer?.port}`
  );
});
