const BASE = "https://sterlingdigital.gr";

export default function sitemap() {
  const lastModified = new Date();

  return [
    { url: BASE, lastModified, changeFrequency: "monthly", priority: 1 },
    {
      url: `${BASE}/services`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE}/privacy-policy`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE}/cookie-policy`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE}/terms`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
