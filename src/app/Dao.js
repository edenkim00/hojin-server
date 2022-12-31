//중복확인
async function getUserByEmail(connection, email) {
  const Query = `
    select id from User where email = ? and status='activate';
  `;
  const [result] = await connection.query(Query, email);
  return result;
}
//비번찾기검사
async function forgotPassword(connection, params) {
  const Query = `select id from User where email= ?  and graduationYear = ? and name = ? and status='activate';`;
  const [result] = await connection.query(Query, params);
  return result;
}

//회원가입
async function postUser(connection, params) {
  const Query = `INSERT INTO User(email, password, name, graduationYear) VALUES (?,?,?,?);`;
  await connection.query(Query, params);
  return;
}

//비밀번호 변경
async function changePassword(connection, params) {
  const Query = `UPDATE User set password=? WHERE email=? and status = 'activate';`;
  await connection.query(Query, params);
  return;
}

async function isUserExist(connection, params) {
  const Query = `SELECT id from User WHERE email=? and password=? and status='activate';`;
  const [result] = await connection.query(Query, params);
  return result;
}

async function getUserInfo(connection, userId) {
  const Query = `SELECT name, graduationYear from User WHERE id=? and status='activate';`;
  const [result] = await connection.query(Query, userId);
  return result;
}

async function getGradeYearUser(connection, userId) {
  const Query = `SELECT graduationYear from User WHERE id=? and status='activate';`;
  const [result] = await connection.query(Query, userId);
  return result;
}

async function vote(connection, params) {
  const Query = `INSERT INTO Vote(userId, sports, date, grade) Values(?,?,?,?);`;
  const [result] = await connection.query(Query, params);
  return result;
}

module.exports = {
  getUserByEmail,
  postUser,
  forgotPassword,
  changePassword,
  isUserExist,
  getUserInfo,
  getGradeYearUser,
  vote,
};
