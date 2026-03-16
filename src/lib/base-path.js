const rawBasePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const basePath =
  rawBasePath && rawBasePath !== "/"
    ? `/${rawBasePath}`.replace(/\/+/g, "/").replace(/\/$/, "")
    : "";

export function withBasePath(path = "") {
  if (!path) return basePath || "";
  if (/^(?:[a-z]+:)?\/\//i.test(path) || path.startsWith("data:")) {
    return path;
  }
  if (!path.startsWith("/")) return path;
  if (!basePath) return path;
  return `${basePath}${path}`.replace(/\/+/g, "/");
}
