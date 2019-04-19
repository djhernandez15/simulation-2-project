module.exports = {
  getHouse: (req, res) => {
    const db = req.app.get("db");
    db.get_houses()
      .then(result => res.status(200).json(result))
      .catch(error => console.log(error));
  },
  addHouse: (req, res) => {
    const { property_name, address, city, state, zipcode } = req.body;
    const db = req.app.get("db");
    db.add_house(property_name, address, city, state, zipcode)
      .then(result => res.status(200).json(result))
      .catch(error => console.log(error));
  }
};
