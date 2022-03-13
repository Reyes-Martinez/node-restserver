const { response, request } = require("express");

const userGet = (req = request, res = response) => {
  const { nombre, apikey } = req.query;
  res.json({ msg: "get api-controller", nombre, apikey });
};

const userPut = (req = request, res = response) => {
  const id = req.params.id;
  res.json({ msg: "put api-controller", id });
};

const userPost = (req, res = response) => {
  const { nombre, edad } = req.body;
  res.json({ msg: "post api-controller", nombre, edad });
};

const userDelete = (req, res = response) => {
  res.json({ msg: "delete api-controller" });
};

module.exports = { userGet, userPut, userPost, userDelete };
