import { Request, Response } from 'express';
import { MateriaModel } from '../database/models/MateriaModel';

class MateriaController {
    async findAll(req: Request, res: Response) {
        const materias = await MateriaModel.findAll();
        return !materias 
            ? res.status(204).send() 
            : res.status(200).json(materias);
    }

    async findOne(req: Request, res: Response) { 
        const { materiaId } = req.params; // recuperar query da url
        const materia = await MateriaModel.findOne({
            where: {
                id: materiaId
            }
        });

        return materia ? res.status(200).json(materia) : res.status(204).send();
     }

    async create(req: Request, res: Response) {
        const { nome, ch, obrigatoria } = req.body;
        const materia = await MateriaModel.create({
            nome,
            ch,
            obrigatoria
        });
        return res.status(201).json(materia); // retorne 201 e a materia cadastrada
    }

    async update(req: Request, res: Response) { 
        const { materiaId } = req.params;
        const materia = await MateriaModel.update(req.body, {
            where: {
                id: materiaId
            }
        });
        return res.status(201).json({
            status: "Atualizado com sucesso"
        });
    }

    async destroy(req: Request, res: Response) { }
}

// exportar uma instancia do controller
export default new MateriaController;