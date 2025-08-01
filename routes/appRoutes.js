import express from "express";
import {
    inicio,
    categoria,
    noEncontrado,
    buscador
} from "../controllers/appController.js";
import identificarUser from "../middleware/identificarUser.js";

const router = express.Router();

// Pagina principal
router.get("/", inicio)
//Categorias
router.get("/categorias/:id", categoria)
// Pagina 404 :(
router.get("/404", noEncontrado)
//Buscador
router.post("/buscador", buscador)

export default router;