const {connection} = require('../../configs');

const get = async (cities, latitude,longitude,km) =>{
    let query = "SELECT * FROM drugstores";
    const conn = await connection();
    try{
      const values = [];
      if(cities || latitude || longitude){
        query += " WHERE ";

        if(cities){
          query += `city IN (?) `;
          values.push(cities?.split(','));
        }

        if(latitude && longitude){
          if(cities){
            query += "AND ";
          }
          //https://stackoverflow.com/questions/2234204/find-nearest-latitude-longitude-with-an-sql-query
          query += `POW(69.1 * (latitude - ?), 2) + POW(69.1 * (? - longitude) * COS(latitude / 57.3), 2) < ? `;
          values.push(latitude);
          values.push(longitude);
          values.push(km);
        }
      }
      const [results] = await conn.query(query,values);
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