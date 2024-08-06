import { PrismaClient } from '@prisma/client'
import { Request, Response } from 'express'
const prisma = new PrismaClient()

export const lista = async (req: Request, res: Response) => {
    return res.json(await prisma.veiculo.findMany())
}

export const incluir = async (req: Request, res: Response) => {
    const { marca, modelo, cor, ano, preco, urlFoto } = req.body
    return res.json(await prisma.veiculo.create({
        data: { marca, modelo, cor, ano, preco, urlFoto }
    }))
}

export default {
    lista,
    incluir
}