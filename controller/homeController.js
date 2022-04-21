import { JsonDB } from "node-json-db";
import { Config } from "node-json-db/dist/lib/JsonDBConfig";
import { urlCheck } from "../utils/functions";
import * as cheerio from "cheerio";
import axios from "axios";

export const homeController = async (req, res) => {
  let db = new JsonDB(new Config("./db/jsonDB", true, false, "/"));
  let $href = [];
  const crawlingData = await urlCheck(
    "https://bbs.ruliweb.com/xbox/board/300003"
  );

  const $ = cheerio.load(crawlingData.data);
  $(
    "div.board_main > table.board_list_table > tbody > tr.table_body > td.subject > div.relative > a.deco"
  ).each((index, item) => {
    $href.push({
      id: index + 1,
      href: item.attribs.href,
      class: item.attribs.class,
      text: item.children[0].data,
    });
  });

  db.push("/data", $href);

  res.render("home", { result: db.getData("/data") });
};
