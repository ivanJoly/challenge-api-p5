const Package = require("../models/Package");
const Passenger = require("../models/Passenger");

async function createPackage(req, res) {
  const { passengerId, category } = req.body;

  try {
    const passenger = await Passenger.findOne({ where: { id: passengerId } });

    if (!passenger) {
      return res
        .status(404)
        .json({ message: "No existe un pasajero con ese id." });
    }

    const packages = await Package.findAll({
      where: { passengerId: passenger.id },
    });

    if (packages.length === 3) {
      return res
        .status(400)
        .json({ message: "Ya llego al maximo de paquetes posibles." });
    }

    const createdPackage = await Package.create({
      passengerId,
      category,
    });

    return res.status(201).json({ passenger, createdPackage });
  } catch (error) {
    return res.status(500).json({ message: "Ocurrio un error", error });
  }
}

async function deletePackages(req, res) {
  const { packagesIds } = req.body;
  try {
    const countDeletePackages = await Package.destroy({
      where: { id: packagesIds },
    });

    return res.status(200).json({
      message: "Los paquetes fueron eliminados satisfactoriamente",
      countDeletePackages,
    });
  } catch (error) {
    return res.status(500).json({ message: "Ocurrio un error", error });
  }
}

module.exports = {
  createPackage,
  deletePackages,
};
