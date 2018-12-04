import { unstable_createResource as createResource } from "react-cache";

import { fetchApi } from "./api";

const ApiResource = createResource(fetchApi);

let cache = {};

export const myFetcher = path => {
  if (cache[path]) {
    if (cache[path].then) {
      throw cache[path];
    }
    return cache[path];
  }

  const myFetch = async () => {
    cache[path] = await fetchApi(path);
  };

  cache[path] = myFetch();
  throw cache[path];
};

export const reactCacheFetcher = ApiResource.read;
