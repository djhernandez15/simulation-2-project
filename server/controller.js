module.exports = {
  getHouse: (req, res) => {
    const db = req.app.get("db");
    db.get_houses()
      .then(result => res.status(200).json(result))
      .catch(error => console.log(error));
  },
  addHouse: (req, res) => {
    const { name, address, city, state, zipcode } = req.body;
    const db = req.app.get("db");
    db.add_house([name, address, city, state, zipcode])
      .then(() => res.status(200))
      .catch(error => console.log(error));
  },
  deleteHouse: (req, res) => {
    const { id } = req.params;
    const db = req.app.get("db");

    db.delete_house([id])
      .then(() => res.sendStatus(200))
      .catch(error => console.log(error));
  }
};
