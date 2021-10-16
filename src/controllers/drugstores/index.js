const { drugstoresModel } = require('../../models');

const get = async (req,res,next) => {
    const {cities, latitude,longitude,km} = req.query;

    if(( parseInt(km) <= 0 || km == null ) && (latitude && longitude)){
        res.status(400).json(
            {
                isError : true,
                results : null,
                error : "Kilometer range must be greater than zero."
            }
        );
    }

    const drusgstores = await drugstoresModel.get(cities, latitude,longitude,km);
    
    if (drusgstores.isError) {
        res.status(400).json(drusgstores);
    } else {
        res.status(200).json(drusgstores);
    }
}

module.exports = {
    get
}