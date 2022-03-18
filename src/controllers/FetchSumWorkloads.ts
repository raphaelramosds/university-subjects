import { Request, Response } from "express";
import { SubjectModel } from '../database/models/SubjectModel';

class FetchSumWorkloads {
  async handle(req: Request, res: Response) {
    const total = await SubjectModel.sum("ch");
    return res.status(200).json({
      sum: total
    });
  }
}

export default new FetchSumWorkloads;
