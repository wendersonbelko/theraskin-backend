const { drugstoresModel } = require('../../models');

const get = async (req,res,next) => {
    const drusgstores = await drugstoresModel.get();
    
    if (drusgstores.isError) {
        res.status(400).json(drusgstores);
    } else {
        res.status(200).json(drusgstores);
    }
}

module.exports = {
    get
}