import React from 'react'
import {connect} from 'react-redux'
import {fetchArticles} from '../store/articles'

class CompanyInfo extends React.Component {
  async componentDidMount() {
    try {
      await this.props.getArticles()
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    let articles = this.props.articles || []
    console.log('this is articles', articles)
    console.log('this is props', this.props)

    return (
      <div>
        <h3>Hi</h3>
      </div>
    )
  }
}

const mapState = state => ({
  articles: state.articles
})

const mapDispatch = dispatch => ({
  getArticles: () => dispatch(fetchArticles())
})

export default connect(mapState, mapDispatch)(CompanyInfo)
