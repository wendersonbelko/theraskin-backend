const {connection} = require('../../configs');

const metadata = (req,res,next) =>{
    connection().query(
        'SELECT 1',
        (err, results, fields ) => {
          if(err){
            res.status(400).json(err);
          }else{
            res.status(200).json({ results });
          }
        }
      );
}

module.exports = {
    metadata
}
