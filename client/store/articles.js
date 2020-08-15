import axios from 'axios'

const GET_ARTICLES = 'GET_ARTICLES'

export const getArticles = articles => ({
  type: GET_ARTICLES,
  articles
})

export const fetchArticles = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/company/:companyName')
    return dispatch(getArticles(data))
  } catch (error) {
    console.log(error)
  }
}

export default function articlesReducer(state = [], action) {
  switch (action.type) {
    case GET_ARTICLES:
      return action.articles
    default:
      return state
  }
}
