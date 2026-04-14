const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL || "http://localhost:3001";

export const getApiUrl = (path) => `${API_BASE_URL}${path}`;

export const getAssetUrl = (path) => `${API_BASE_URL}/assets/${path}`;
