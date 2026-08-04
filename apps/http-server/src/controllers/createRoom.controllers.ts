import { Request, Response } from "express";

export const createRoom = (req: Request, res: Response) => {
  res.json({
    message: `Room Created`,
  });
};
