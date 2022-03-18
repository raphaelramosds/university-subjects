import { Request, Response } from "express";
import { SubjectModel } from "../database/models/SubjectModel";
import { v4 as uuid } from 'uuid';

class CreateSubjectController {
  async handle(req: Request, res: Response) {
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
}

export default new CreateSubjectController;