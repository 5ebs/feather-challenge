export function getParam(paramName: string): string | null {
  if (typeof window === "undefined") return null;
  const windowUrl = window.location.search;
  const params = new URLSearchParams(windowUrl);
  return params.get(paramName);
}

export function setParam(paramName: string, value: string | null, originalUrl: string | null = null): URL {
  if (originalUrl === null) originalUrl = window.location.href;

  const url = new URL(originalUrl);
  if (value === null) {
    url.searchParams.delete(paramName);
    return url;
  }

  if (value === "") return url;

  const exist: boolean = url.searchParams.has(paramName);
  if (exist) {
    // rewrite value
    url.searchParams.set(paramName, value as string);
  } else {
    // add value
    url.searchParams.append(paramName, value as string);
  }
  return url;
}
