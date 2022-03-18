import { Request, Response } from "express";
import { SubjectModel } from '../database/models/SubjectModel';

class DestroySubjectController {
  async handle(req: Request, res: Response) {
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

export default new DestroySubjectController;