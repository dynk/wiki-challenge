const service = require('../services/service');

async function consult(req, res) {
    try{
        const response = await service.openSearchWikipedia(req.body);
        return res.json(response);
    }catch(e) {
        return res.status(500).json(e);
    }
}

async function compare(req, res) {
    try{
        const response = await service.compareWikipedia(req.body);
        return res.json(response);
    }catch(e)  {
        return res.status(500).json(e);
    }
}



module.exports = {
    consult,
    compare
};