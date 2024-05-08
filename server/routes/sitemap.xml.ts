import { SitemapStream, streamToPromise } from 'sitemap'

export default defineEventHandler(async (event) => {
  const hostname = 'https://www.saveapp.cloud'
  const urls = [ '/', '/privacy', '/contribute', '/docs', '/docs/tools/cli' ]
  const sitemap = new SitemapStream({
    hostname: hostname
  })

  for (const url of urls) {
    sitemap.write({
      url: hostname + url,
      changefreq: 'yearly'
    })
  }
  sitemap.end()

  return streamToPromise(sitemap)
})
