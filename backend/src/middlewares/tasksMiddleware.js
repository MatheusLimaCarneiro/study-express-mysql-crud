const connection = require("../models/connection");

const validateBody = (req, res, next) => {
  const { body } = req;

  if (body.title === undefined) {
    return res.status(400).json({ message: 'O campo "title" é obrigatório' });
  }

  if (body.title === "") {
    return res
      .status(400)
      .json({ message: 'O campo "title" não pode estar vazio' });
  }

  next();
};

const validateDelete = async (req, res, next) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ message: 'O parâmetro "id" é obrigatório' });
  }

  if (isNaN(Number(id))) {
    return res.status(400).json({ message: "O ID deve ser um número válido" });
  }

  try {
    const [task] = await connection.execute(
      "SELECT id FROM tasks WHERE id = ?",
      [id]
    );

    if (task.length === 0) {
      return res.status(404).json({ message: "Tarefa não encontrada" });
    }

    next();
  } catch (error) {
    console.error("Erro na validação:", error);
    return res.status(500).json({
      message: "Erro interno no servidor",
      details: error.message,
    });
  }
};

const validateUpdate = async (req, res, next) => {
  const { id } = req.params;
  const { body } = req;

  if (!id || isNaN(Number(id))) {
    return res.status(400).json({ message: "ID inválido" });
  }

  if (!body.title && !body.status) {
    return res.status(400).json({
      message: "Pelo menos um campo deve ser fornecido para atualização",
      valid_fields: ["title", "status"],
    });
  }

  if (body.title === "") {
    return res.status(400).json({ message: "O título não pode estar vazio" });
  }

  try {
    const [task] = await connection.execute(
      "SELECT id FROM tasks WHERE id = ?",
      [id]
    );

    if (task.length === 0) {
      return res.status(404).json({ message: "Tarefa não encontrada" });
    }

    req.existingTask = task[0];
    next();
  } catch (error) {
    console.error("Erro na validação:", error);
    return res.status(500).json({
      message: "Erro ao validar atualização",
      details: error.message,
    });
  }
};

module.exports = {
  validateBody,
  validateDelete,
  validateUpdate,
};
