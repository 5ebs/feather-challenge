import { stringify } from "querystring";

export const doGetFetch = async function handleDoFetch<T>(apiEndpoint: string, data?: string | null) {
  const apiURL = "http://localhost:4000/";

  const path = `${apiURL}${apiEndpoint}?${stringify(JSON.parse(data as string))}`;
  // const contentType = "application/json";

  const headers = new Headers();
  // if (contentType) headers.append("Content-Type", contentType);

  const response = await fetch(path, {
    method: "GET",
    headers,
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(JSON.stringify(error));
  }

  return response.json();
};
