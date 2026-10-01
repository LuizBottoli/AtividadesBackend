import Router from "express";

const router = Router()


app.get("/livros", function (req, res) {
  res.json(livros);
});

router.get("/livros", () => {});
router.get("/livros/:id", () => {});
router.post("/livros", () => {});
router.patch("/livros/:id", () => {});
router.delete("/livros:id", () => {});

export default router;

