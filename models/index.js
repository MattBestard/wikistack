const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack');

const Page = db.define('page', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 'title'
  },
  slug: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 'title'
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false,
    defaultValue: 'content'
  },
  status: {
    type: Sequelize.ENUM('open', 'closed')
  }
});

const User = db.define('user', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 'name'
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 'blahblah@blah.com',
    validate: {
        isEmail: true
    }
  }
});

module.exports = { db };
// Page, User

