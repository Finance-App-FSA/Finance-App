import axios from 'axios'

const GET_ARTICLE = 'GET_ARTICLE'

export const getArticle = article => ({
  type: GET_ARTICLE,
  article: article
})

export const fetchArticle = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/company/:companyName')
    return dispatch(getArticle(data))
  } catch (error) {
    console.log(error)
  }
}

export default function articleReducer(state = {}, action) {
  switch (action.type) {
    case GET_ARTICLE:
      return action.article
    default:
      return state
  }
}
