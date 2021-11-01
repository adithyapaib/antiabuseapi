var gali = require('./gali');
export default function fetchUser(req, res) {
    res.statusCode = 200;
    let {id }= req.query;
    id=id.toLowerCase();
    id = id.split('_').join(' ');
    const exists = id.split(' ').some(str => gali.includes(str))
    if(exists)
    res.json("true");
    else
    {
      res.json("false");
    }

  }