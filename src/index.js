import "./index.css";
console.log("index.js");
import("./log.js").then((log) => {
  log.log("log1");
});
