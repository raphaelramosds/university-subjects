import { Request, Response } from 'express';
import { SubjectModel } from '../database/models/SubjectModel';
import { v4 as uuid } from 'uuid';

class subjectController {
    async findAll(req: Request, res: Response) {
        const subjects = await SubjectModel.findAll();
        return !subjects
            ? res.status(204).send()
            : res.status(200).json(subjects);
    }

    async findOne(req: Request, res: Response) {
        const { subjectId } = req.params; // recuperar query da url
        const subject = await SubjectModel.findOne({
            where: {
                id: subjectId
            }
        });

        return subject ? res.status(200).json(subject) : res.status(204).send();
    }

    async create(req: Request, res: Response) {
        const { name, ch, mandatory } = req.body;

        if (!name || !ch) {
            throw new Error("Campo(s) vazio(s)");
        }

        const subject = await SubjectModel.create({
            id: uuid(),
            name,
            ch,
            mandatory
        });

        return res.status(201).json(subject); 
    }

    async update(req: Request, res: Response) {
        const { subjectId } = req.params;
        const subject = await SubjectModel.update(req.body, {
            where: {
                id: subjectId
            }
        });
        return res.status(201).json({
            status: "Atualizado com sucesso"
        });
    }

    async destroy(req: Request, res: Response) {
        const { subjectId } = req.params;
        const subject = await SubjectModel.destroy({
            where: {
                id: subjectId
            }
        });
        return res.status(200).json({
            status: "Deletado com sucesso"
        });
    }
}

// exportar uma instancia do controller
export default new subjectController;