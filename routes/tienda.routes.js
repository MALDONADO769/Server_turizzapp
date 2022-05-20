import routerx from "express-promise-router";
import tiendaController from "../controllers/tienda.controller";

const router = routerx();

router.post("/insertar", tiendaController.guardar);
router.get("/consultar", tiendaController.consultar);
router.get("/consultarUno/:id", tiendaController.consultarUno);
router.delete("/eliminar/:id", tiendaController.eliminar);
router.put("/actualizar/:id", tiendaController.actualizar);

export default router;
