const {connection} = require('../../configs');

const get = async () =>{
    let query = "SELECT * FROM drugstores";
    const conn = await connection();
    try{
      const [results] = await conn.execute(query);
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
    get
}