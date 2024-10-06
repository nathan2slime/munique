import { Request, Response } from 'express'

import { DocumentService } from '~/application/services/document.service'

const documentService = new DocumentService()

export class DocumentController {
  async create(req: Request, res: Response) {
    const document = await documentService.create(req.body)

    res.status(201).json(document)
  }

  async delete(req: Request, res: Response) {
    const id = req.params.id

    await documentService.delete(id)

    res.status(200).send()
  }

  async show(req: Request, res: Response) {
    const documents = await documentService.show()

    res.status(200).json(documents)
  }

  async getById(req: Request, res: Response) {
    const id = req.params.id
    const document = await documentService.getById(id)

    res.status(200).json(document)
  }

  async update(req: Request, res: Response) {
    const id = req.params.id

    const document = await documentService.update(id, req.body)

    res.status(200).json(document)
  }
}
