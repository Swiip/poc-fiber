import React from "react";

import { unstable_createResource as createResource } from "react-cache";

const timeout = duration =>
  new Promise(resolve => setTimeout(resolve, duration));

const fetchApi = async path => {
  await timeout(2000);
  return (await fetch(path)).json();
};

const ApiResource = createResource(fetchApi);

const Content = () => {
  const data = ApiResource.read("/data/characters.json");
  return <div>Loaded {data.length} elements</div>;
};

export default Content;
