import { VercelRequest, VercelResponse } from '@vercel/node';

export default function hello(req: VercelRequest, res: VercelResponse) {
  res.status(200).send({
    status: 'online',
    instructions: "send the sentence with _ (replace spaces with _ ) format to the /api endpoint",
    eg: "api/cusswords"
  });
}
