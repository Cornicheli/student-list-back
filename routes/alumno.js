let router = require("express").Router();
let { create, read, update, destroy } = require("../controllers/alumnos");

router.post("/create", create);
router.get("/read", read);
router.put("/update/:id", update);
router.delete("/destroy/:id", destroy);

module.exports = router;
