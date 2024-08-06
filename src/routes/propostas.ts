import { Router } from 'express'

import Propostas from '../controllers/propostas'

const router = Router()

router.get('/', Propostas.lista)
router.post('/', Propostas.incluir)

export default router
