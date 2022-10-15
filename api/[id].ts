var gali = require('./gali');

export default function fetchUser(req, res) {
  const { id } = req.query;

  const preparedId = id.replace(/_/g, ' ');

  const exists = preparedId.split(' ').some(str => gali.includes(str))

  if (exists) {
    return res.status(200).json("true");
  }

  return res.status(200).json("false")
}