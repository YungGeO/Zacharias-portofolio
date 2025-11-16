export const getImageUrl = (path) => `${import.meta.env.BASE_URL}assets/${path}`;
// Usage: getImageUrl("avatar/me.jpeg") => "/assets/avatar/me.jpeg"