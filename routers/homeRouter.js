import express from "express";
import routes from "../routes";
import { homeController } from "../controller/homeController";
const homeRouter = express.Router();

homeRouter.get(routes.home, homeController); // /admin

export default homeRouter;
