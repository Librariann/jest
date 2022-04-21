import express from "express";
import routes from "./routes.js";
import bodyParser from "body-parser";
import homeRouter from "./routers/homeRouter";
// let db = new JsonDB(new Config("jsonDB", true, false, "/"));
// db.push("/test1", "super test");

// // It also create automatically the hierarchy when pushing new data for a DataPath that doesn't exists
// db.push("/test2/my/test", 5);

// // You can also push directly objects
// db.push("/test3", { test: "test", json: { test: ["test"] } });

// // If you don't want to override the data but to merge them
// // The merge is recursive and work with Object and Array.
// db.push(
//   "/test3",
//   {
//     new: "cool",
//     json: {
//       important: 5,
//     },
//   },
//   false
// );
const app = express();
let PORT = 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set("view engine", "ejs");

// app.get("/", async (req, res) => {
//   db.push("/test1", 111);
//   const data = db.getData("/test1");
//   res.send(`hello World!! - ${data}`);
//   console.log(data);
// });

app.use(routes.home, homeRouter);

app.listen(PORT, () => {
  console.log(`server on ${PORT}`);
});
