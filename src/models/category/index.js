const {connection} = require('../../configs');

const getAllCategories = async () => {
  const conn = await connection();
  try{
    const [results] = await conn.execute('SELECT * FROM categories');
    return results;
  }
  catch(e)
  {
    console.error(e);

    return {
      isError : true,
      results : null,
      error : e
    }
  }
}

module.exports = {
  getAllCategories
}