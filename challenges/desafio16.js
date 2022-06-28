db.produtos.update({
    nome: {
      $exists: true,
      $in: ["Big Mac"],
    },
  }, {
    $currentDate: {
      ultimaModificacao: {
        $type: "timestamp",
      },
    },
  },
);

db.produtos.find({
  ultimaModificacao: { $exists: true },
}, {
  _id: false,
  nome: true, 
});
