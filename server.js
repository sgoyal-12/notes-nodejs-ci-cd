const express = require("express");
const path = require("path");
const app = express();

const PORT = process.env.PORT || 3000;

// In-memory notes store
let notes = [
  { id: 1, title: "Welcome", content: "This is your first note 🚀" }
];

// Middleware
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.get("/", (req, res) => {
  res.render("index", { notes });
});

app.post("/notes", (req, res) => {
  const { title, content } = req.body;
  if (!title || !content) return res.redirect("/");

  const newNote = {
    id: Date.now(),
    title,
    content
  };
  notes.push(newNote);
  res.redirect("/");
});

app.post("/notes/:id/delete", (req, res) => {
  const id = parseInt(req.params.id, 10);
  notes = notes.filter((note) => note.id !== id);
  res.redirect("/");
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Notes app running on port ${PORT}`);
  });
}

module.exports = app; // for testing
