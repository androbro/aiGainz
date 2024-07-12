import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

type ResponseData = {
    message: string;
};

const prisma = new PrismaClient();

//https://www.youtube.com/watch?v=FMnlyi60avU

export default async (req: NextApiRequest, res: NextApiResponse<ResponseData>) => {
    res.status(200).json({ message: 'Hello World' });
};