import { Router } from 'express'

import veiculos from './veiculos'
import propostas from './propostas'

const router = Router()
const api = Router()

api.use('/veiculo', veiculos)
api.use('/proposta', propostas)

router.use('/v1', api)

export default router
