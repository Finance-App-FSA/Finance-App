const Sequelize = require('sequelize')
const db = require('../db')

const Articles = db.define('articles', {
  title: {
    type: Sequelize.TEXT,
    validate: {
      notEmpty: true
    }
  },
  description: {
    type: Sequelize.TEXT,
    validate: {
      notEmpty: true
    }
  },
  url: {
    type: Sequelize.TEXT,
    validate: {
      notEmpty: true
    }
  }
})
