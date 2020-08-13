const GET_COMPANY = 'GET_COMPANY'

export const getCompany = () => ({
  type: GET_COMPANY,
  company
})

export default function companyReducer(state = {}, action) {
  switch (action.type) {
    case GET_COMPANY:
      return action.company
    default:
      return state
  }
}
