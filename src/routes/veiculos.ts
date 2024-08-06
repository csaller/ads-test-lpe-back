import { Router } from 'express'

import Veiculos from '../controllers/veiculos'

const router = Router()

router.get('/', Veiculos.lista)
router.post('/', Veiculos.incluir)

export default router
