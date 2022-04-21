import { JsonDB } from "node-json-db";
import { Config } from "node-json-db/dist/lib/JsonDBConfig";
import { urlCheck } from "../utils/functions";
let db = new JsonDB(new Config("./db/jsonDB", true, false, "/"));

//toHaveLength - 배열길이 체크
//toContain - 특정 원소가 배열에 들어있는지 체크
describe("데이터 연결 확인", () => {
  const status = db.getData("/statusCode");

  test("API(DB) 연결 성공시 Status Code는 200을 반환한다.", () => {
    expect(status).toBe(200);
  });

  test("크롤링 사이트 연결 성공시 200으로 성공체크", async () => {
    const check_site = await urlCheck(
      "http://www.ichannela.com/news/template/recent_news.do?cateCode=000400"
    );
    const check_site2 = await urlCheck("https://www.naver.com");
    expect(check_site.status).toBe(200);
    expect(check_site2.status).toBe(200);
  });
});
