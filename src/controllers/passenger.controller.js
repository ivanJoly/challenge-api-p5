const { Passenger, Package } = require("../models/index");
const { codeValidation } = require("../utils");

async function getPassengers(req, res) {
  try {
    const passengers = await Passenger.findAll({
      attributes: ["id", "code", "name"],
      order: [["id", "DESC"]],
    });

    if (passengers) {
      return res.status(200).json({ passengers });
    }

    return res.status(400).json({
      message: "No hay pasajeros cargados aun.",
    });
  } catch (error) {
    return res.status(500).json({ message: "Ocurrio un error", error });
  }
}

async function getPassengerById(req, res) {
  const { passengerId } = req.params;

  if (!passengerId) {
    return res.status(400).send({
      message: "Debe enviar un id como parametro",
    });
  }

  try {
    const passenger = await Passenger.findOne({
      where: { id: passengerId },
      include: { all: true, nested: true },
    });

    if (!passenger) {
      return res.status(404).json({
        message: "No se encontraron pasajeros con ese id.",
      });
    }

    return res.status(200).json({ passenger });
  } catch (error) {
    return res.status(500).json({ message: "Ocurrio un error", err });
  }
}

async function createPassenger(req, res) {
  const { name, code } = req.body;

  if (name === null || name === " ") {
    return res.status(400).json({ message: "Debe colocar un nombre" });
  }

  if (code === null || code === " ") {
    return res
      .status(400)
      .json({ message: "El codigo debe tener 5 caracteres alfanumericos" });
  }

  if (code.length != 5 || codeValidation(code) === false) {
    return res
      .status(400)
      .json({ message: "El codigo debe tener 5 caracteres alfanumericos" });
  }

  try {
    const passenger = await Passenger.create({
      name,
      code,
    });

    return res.status(201).json({ passenger });
  } catch (error) {
    return res.status(500).json({ message: "Ocurrio un error", error });
  }
}

async function deletePassengerById(req, res) {
  const { passengerId } = req.params;
  if (!passengerId) {
    return res.status(400).send({
      message: "Debe enviar un id como parametro",
    });
  }

  try {
    const countDelete = await Passenger.destroy({ where: { id: passengerId } });

    if (!countDelete) {
      return res.status(404).json({
        message: "No se encontraron pasajeros con ese id.",
      });
    }

    const packagesIds = await Package.findAll({
      where: { passengerId },
    });

    await Package.destroy({
      where: { id: packagesIds },
    });

    return res
      .status(200)
      .json({ message: "Pasajero eleminado satisfactoriamente." });
  } catch (error) {
    return res.status(500).json({ message: "Ocurrio un error", err });
  }
}

module.exports = {
  getPassengers,
  createPassenger,
  getPassengerById,
  deletePassengerById,
};
