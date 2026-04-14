const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL || "https://socialpedia-qg5q.onrender.com";

const normalizeBaseUrl = (url) => url.replace(/\/+$/, "");
const BASE_URL = normalizeBaseUrl(API_BASE_URL);

export const getApiUrl = (path) => `${BASE_URL}${path}`;

export const getAssetUrl = (path) => `${BASE_URL}/assets/${path}`;
