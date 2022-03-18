import { Request, Response } from "express";
import { SubjectModel } from "../database/models/SubjectModel";

class ListSubjectController {
  async handle(req: Request, res: Response) {
    const subjects = await SubjectModel.findAll();
    return !subjects
      ? res.status(204).send()
      : res.status(200).json(subjects);
  }
}

export default new ListSubjectController;