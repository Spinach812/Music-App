import { Request, Response } from "express";
import Topic from "../../models/topic.models";

// [GET] /topics
export const topic = async (req: Request, res: Response) => {
  const topics = await Topic.find({
    deleted: false,
  });
};
