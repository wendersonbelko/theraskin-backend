const {connection} = require('../../configs');

const getProducts = async (categories) => {
  const conn = await connection();
  try{
    let query = 
      'SELECT '+
      'p.id as `product_id`, p.name as `product_name`,  p.image as `product_image`,  p.description as `product_description`,'  +
      'p.composition as `product_composition`, p.skin_type as `product_skin_type`,p.price as `product_price`,'+
      'c.id as `category_id`, c.name as `category_name` ' +
      'FROM products  as `p` ' +
      'LEFT JOIN categories as `c` ON p.category_id= c.id';
    
    if(categories.length > 0){
      query += ` WHERE c.id IN(${categories.join(',')})` 
    }
    
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
  getProducts
}
