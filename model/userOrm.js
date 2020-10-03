const connection = require('../config/connection');
const { findAllUsers, inserUserQuery } = require('./userQueries');
const connection = require('../config/connection');

const fetchUsers = async () => {
  try {
    const [rows] = await connection.query(findAllUsers);
    return rows;
  } catch (e) {
    throw new Error(e);
  }
};

const inserUserToDb = async (username) => {
  try {
    const [reslult] = await connection.query(insertUserQuery, username);
    return reslult;
  } catch () {
    throw new Error (e);
  }
}

module.exports = {
  fetchUsers,
  inserUserToDb,
}