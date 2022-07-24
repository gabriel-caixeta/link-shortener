import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../db/client";

export default async (req: NextApiRequest, res: NextApiResponse) => {
	const slug = req.query["slug"] as string;

	if (!slug || typeof slug !== "string") {
		res.status(404).send(JSON.stringify({ error: "No slug provided" }));
		return;
	}

	const data = await prisma.shortLink.findFirst({
		where: { slug: { equals: slug } },
	});

	if (!data) {
		res.status(404).send(JSON.stringify({ error: "Slug not found" }));
		return;
	}

	return res.redirect(data.url);
};
