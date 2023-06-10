import { createClient } from "next-sanity";

export const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,

  // 최신 api를 위해서 현재 날짜 사용
  apiVersion: "2023-06-10",

  // 캐싱 유무, 동적인 데이터 사용 false
  useCdn: false,

  // 데이터 create, update, delete
  token: process.env.SANITY_SECRET_TOKEN,
});
