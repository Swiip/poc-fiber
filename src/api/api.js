const timeout = duration =>
  new Promise(resolve => setTimeout(resolve, duration));

const fetchs = {
  characters: async () => (await fetch(`/data/characters.json`)).json(),
  character: async id =>
    (await (await fetch(`/data/characters.json`)).json()).find(c => c.id === id)
};

export const fetchApi = async path => {
  const [resource, ...params] = path.split("/");
  await timeout(2000);
  return fetchs[resource](...params);
};
