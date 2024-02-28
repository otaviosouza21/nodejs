const { Router } = require('express');


const CategoriaController = require('../controllers/CategoriaController.js');

const categoriaController = new CategoriaController();
const router = Router();

router.get('/categorias', (req, res) => categoriaController.pegaTodos(req, res));
router.get('/categorias/:id',(req,res)=> categoriaController.pegaUmPorId(req,res))
router.post('/categorias',(req,res)=> categoriaController.criaNovo(req,res))
router.put('/categorias/:id', (req, res) => categoriaController.atualiza(req, res));
router.delete('/categorias/:id',(req,res)=> categoriaController.excluir(req,res))

/**
 * @swagger
 * /categorias:
 *   get:
 *     summary: Retorna todas as categorias
 *     description: Obtém uma lista de todas as categorias.
 *     responses:
 *       200:
 *         description: Sucesso
 *         content:
 *           application/json:
 *             example:
 *               message: Todos os Registros
 *               categorias:
 *                 - id: 1
 *                   titulo: Node.js
 *                   createdAt: '2024-02-24T01:17:04.855Z'
 *                   updatedAt: '2024-02-24T01:17:04.855Z'
 *                 - id: 2
 *                   titulo: Java
 *                   createdAt: '2024-02-24T01:17:04.855Z'
 *                   updatedAt: '2024-02-24T01:17:04.855Z'
 *   post:
 *     summary: Cadastra uma nova categoria
 *     description: Cria uma nova categoria com base nos parâmetros fornecidos.
 *     parameters:
 *       - in: body
 *         name: categoria
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             titulo:
 *               type: string
 *     responses:
 *       201:
 *         description: Categoria criada com sucesso
 *         content:
 *           application/json:
 *             example:
 *               id: 1
 *               titulo: Node.js
 *               createdAt: '2024-02-24T01:17:04.855Z'
 *               updatedAt: '2024-02-24T01:17:04.855Z'
 *       404:
 *         description: Categoria não encontrada
 *
 * /categorias/{id}:
 *   get:
 *     summary: Retorna uma categoria pelo ID
 *     description: Obtém detalhes de uma categoria específica com base no ID fornecido.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Sucesso
 *         content:
 *           application/json:
 *             example:
 *               id: 1
 *               titulo: Node.js
 *               createdAt: '2024-02-24T01:17:04.855Z'
 *               updatedAt: '2024-02-24T01:17:04.855Z'
 *       404:
 *         description: Categoria não encontrada
 */


module.exports = router;
