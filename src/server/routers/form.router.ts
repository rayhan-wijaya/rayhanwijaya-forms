import { router, publicProcedure } from 'server/trpc';
import { z } from 'zod';

const formRouter = router({
	create: publicProcedure
		.input(
			z.object({
				title: z.string(),
				description: z.string().optional(),
			})
		)
		.mutation(({ input }) => {
			// Create form in database ..
		}),
	list: publicProcedure
		.input(
			z.object({
				pageNumber: z.number().int().optional(),
				amountPerPage: z.number().int().optional(),
			})
		)
		.query(({ input }) => {
			// Return forms from database ..

			return [];
		}),
	respond: publicProcedure
		.input(
			z.object({
				formId: z.string().uuid(),
				response: z.map(
					z.number().int(),
					z.union([ z.string(), z.array(z.string()) ]),
				),
			})
		)
		.mutation(({ input }) => {
			// Create response data in database ..
		}),
});

export default formRouter;
