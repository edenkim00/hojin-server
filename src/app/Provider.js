const { pool } = require("../../config/database");
const { logger } = require("../../config/winston");

const Dao = require("./Dao");

// Provider: Read 비즈니스 로직 처리

exports.getUserEmail = async function (email) {
  const connection = await pool.getConnection(async (conn) => conn);
  const result = await Dao.getUserByEmail(connection, email);
  connection.release();
  return result;
}

exports.forgotPassword = async function (params) {
  const connection = await pool.getConnection(async (conn) => conn);
  const result = await Dao.forgotPassword(connection, params);
  connection.release();
  return result;
}

exports.isUserExist = async function (params) {
  const connection = await pool.getConnection(async (conn) => conn);
  const result = await Dao.isUserExist(connection, params);
  connection.release();
  return result;
}

exports.getUserInfo = async function (userId){
  const connection = await pool.getConnection(async (conn) => conn);
  const result = await Dao.getUserInfo(connection, userId);
  connection.release();
  return result;
}

exports.getGradeYearUser = async function(userId){
  const connection = await pool.getConnection(async (conn) => conn);
  const result = await Dao.getGradeYearUser(connection, userId);
  connection.release();
  return result;
}

exports.doubleCheckVote = async function(params){
  const connection = await pool.getConnection(async (conn) => conn);
  const result = await Dao.doubleCheckVote(connection, params);
  connection.release();
  return result;
}

exports.voteResult = async function(params) {
  const connection = await pool.getConnection(async (conn) => conn);
  const result = await Dao.voteResult(connection, params);
  connection.release();
  return result;
}