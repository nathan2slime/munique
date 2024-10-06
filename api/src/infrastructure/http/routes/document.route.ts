import { Router } from 'express'

import {
  CreateDocumentDto,
  UpdateDocumentDto,
  DocumentIdDto
} from '~/application/dtos/document.dto'
import { syncHandler } from '~/domain/errors/sync.handler'
import { DocumentController } from '~/infrastructure/http/controllers/document.controller'
import { validatorMiddleware } from '~/infrastructure/http/middlewares/validator.middleware'

const documentController = new DocumentController()

export const documentRouter: Router = Router()

/**
 * @swagger
 * components:
 *   schemas:
 *     UpdateDocument:
 *       type: object
 *       properties:
 *         status:
 *           type: string
 *           example: "deleted"
 *         name:
 *           type: string
 *           example: "New Document"
 *     CreateNewDocument:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           example: "Document"
 *         status:
 *           type: string
 *           example: "active"
 *         userId:
 *           type: string
 *           example: "74151ac9-7b82-4d39-aee2-0e4dc992818f"
 *     Document:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           example: "Document"
 *         status:
 *           type: string
 *           example: "active"
 *         user:
 *             $ref: '#/components/schemas/User'
 *         id:
 *           type: string
 *           example: "74151ac9-7b82-4d39-aee2-0e4dc992818f"
 *         userId:
 *           type: string
 *           example: "74151ac9-7b82-4d39-aee2-0e4dc992818f"
 */

/**
 * @swagger
 * tags:
 *   - name: Documents
 *     description: Operations related to documents
 */

/**
 * @swagger
 * /document/create:
 *   post:
 *     summary: Create new document.
 *     description: Create new document.
 *     tags:
 *         - Documents
 *     requestBody:
 *       required: true,
 *       content:
 *         application/json:
 *             schema:
 *               $ref: '#/components/schemas/CreateNewDocument'
 *     responses:
 *       '201':
 *         description: A successful response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Document'
 *       '404':
 *         description: User does not exists
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       '500':
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */

documentRouter.post(
  '/create',
  validatorMiddleware(CreateDocumentDto),
  syncHandler(documentController.create)
)

/**
 * @swagger
 * /document/delete/{id}:
 *   delete:
 *     summary: Delete user.
 *     description: Delete user by id.
 *     tags:
 *         - Documents
 *     parameters:
 *        - name: id
 *          in: path
 *          required: true
 *          schema:
 *          type: string
 *     responses:
 *       '200':
 *         description: A successful response
 *       '404':
 *         description: Document does not exists
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       '500':
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */

documentRouter.delete(
  '/delete/:id',
  validatorMiddleware(DocumentIdDto, 'params'),
  syncHandler(documentController.delete)
)

/**
 * @swagger
 * /document/update/{id}:
 *   put:
 *     summary: Update document.
 *     description: Update document by id.
 *     tags:
 *         - Documents
 *     parameters:
 *        - name: id
 *          in: path
 *          required: true
 *          schema:
 *          type: string
 *     requestBody:
 *       required: true,
 *       content:
 *         application/json:
 *             schema:
 *               $ref: '#/components/schemas/UpdateDocument'
 *     responses:
 *       '200':
 *         description: A successful response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Document'
 *       '404':
 *         description: Document does not exists
 *       '500':
 *         description: Internal server error
 */

documentRouter.put(
  '/update/:id',
  validatorMiddleware(DocumentIdDto, 'params'),
  validatorMiddleware(UpdateDocumentDto),
  syncHandler(documentController.update)
)

/**
 * @swagger
 * /user/show:
 *   get:
 *     summary: Get all documents.
 *     description: Get all documents.
 *     tags:
 *         - Documents
 *     responses:
 *       '200':
 *         description: A successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Document'
 *       '404':
 *         description: Document does not exists
 *       '500':
 *         description: Internal server error
 */

documentRouter.get('/show', syncHandler(documentController.show))

/**
 * @swagger
 * /document/describe/{id}:
 *   get:
 *     summary: Get document.
 *     description: Get document by id.
 *     tags:
 *         - Documents
 *     parameters:
 *        - name: id
 *          in: path
 *          required: true
 *          schema:
 *          type: string
 *     responses:
 *       '200':
 *         description: A successful response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Document'
 *       '404':
 *         description: Document does not exists
 *       '500':
 *         description: Internal server error
 */

documentRouter.get(
  '/describe/:id',
  validatorMiddleware(DocumentIdDto, 'params'),
  syncHandler(documentController.getById)
)
