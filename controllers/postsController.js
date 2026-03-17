const connection = require("../db");

// INDEX
function index(req, res) {
  const sql = "SELECT * FROM posts";

  connection.query(sql, (err, results) => {
    if (err) return res.status(500).json(err);

    res.json(results);
  });
}
// SHOW
function show(req, res) {
  const id = parseInt(req.params.id);

  const post = posts.find((post) => post.id === id);

  res.json(post);
}
// CREATE
function create(req, res) {
  // dati del nuovo post
  const newPost = req.body;

  // nuovo id
  const newId = posts[posts.length - 1].id + 1;

  newPost.id = newId;

  // aggiungo il post all'array
  posts.push(newPost);

  // stampo l'array aggiornato
  console.log(posts);

  // risposta
  res.status(201).json(newPost);
}
// UPDATE
function update(req, res) {
  const id = parseInt(req.params.id);

  const post = posts.find((post) => post.id === id);

  if (!post) {
    return res.status(404).json({
      error: "Post non trovato",
    });
  }

  // dati aggiornati
  const updatedData = req.body;

  // aggiorno il post
  Object.assign(post, updatedData);

  console.log(posts);

  res.json(post);
}
// DELETE
function destroy(req, res) {
  const id = parseInt(req.params.id);

  const index = posts.findIndex((post) => post.id === id);

  posts.splice(index, 1);

  console.log(posts);

  res.sendStatus(204);
}
module.exports = {
  index,
  show,
  create,
  update,
  destroy,
};
