const CONFIG = {
  // profile setting (required)

  // blog setting (required)
  blog: {
    title: "teker-blog",
    description: "El blog de teker.",
  },

  // CONFIG configration (required)
  link: "https://rulocode.com",
  since: 2020, // If leave this empty, current year will be used.
  lang: "es-ES", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

 
  isProd: process.env.NEXT_PUBLIC_ENVIRONMENT === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }
