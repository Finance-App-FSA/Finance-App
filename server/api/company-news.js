const router = require('express').Router()
const NewsAPI = require('newsapi')
const newsapi = new NewsAPI('97e44a617dc04d7a95e7cd8946263102')

router.get('/:companyName', async (req, res, next) => {
  try {
    await newsapi.v2
      .everything({
        q: `${req.params.companyName} stock`,
        sources: 'bloomberg, business-insider, the-verge',
        domains: 'bloomberg.com, businessinsider.com, theverge.com',
        from: Date.now() - 7 * 24 * 60 * 60 * 1000,
        to: Date.now(),
        language: 'en',
        sortBy: 'relevancy',
        page: 1
      })
      .then(response => {
        res.json(response)
      })
  } catch (error) {
    console.log('error >>> ', error)
  }
})
module.exports = router
