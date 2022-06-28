db.produtos.find({
  nome: {
    $exists: true,
    $nin: ["Big Mac", "McChicken"],
  },
}, {
  _id: false,
  nome: true,
  curtidas: true,
  vendidos: true,
});
