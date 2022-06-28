db.produtos.find({
  $and: [
    { tags: { $exists: false } },
    { vendidos: { $nin: [50] } },
  ]
}, {
  _id: false,
  nome: true,
  vendidos: true,
});
