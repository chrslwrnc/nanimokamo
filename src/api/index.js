import { createClient } from "contentful";

export { getEntity, delay } from "./utils";

export default createClient({
  space: "", //process.env.CONTENTFUL_SPACE_ID,
  environment: "master", // process.env.CONTENTFUL_ENVIRONMENT_ID,
  accessToken: "" // process.env.CONTENTFUL_ACCESS_TOKEN,
});
