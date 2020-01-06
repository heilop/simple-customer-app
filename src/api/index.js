export const apiGet = (url) => () => fetch(url).then(data => data.json());
