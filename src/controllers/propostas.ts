import { PrismaClient } from '@prisma/client'
import { Request, Response } from 'express'
const prisma = new PrismaClient()

export const lista = async (req: Request, res: Response) => {
    return res.json(await prisma.proposta.findMany())
}

export const incluir = async (req: Request, res: Response) => {
    const { id, nome, email, proposta, data, veiculoId } = req.body
    const parsedData = new Date(data.split("/").reverse().join("/"))
    return res.json(await prisma.proposta.create({
        data: { id, nome, email, proposta, data: parsedData, veiculoId }
    }))
}

export default {
    lista,
    incluir
}
