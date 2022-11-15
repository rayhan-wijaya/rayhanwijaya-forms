import { publicProcedure, router } from 'server/trpc';
import { z } from 'zod';

import formRouter from 'server/routers/form.router';

const appRouter = router({
	form: formRouter,
});

export type AppRouter = typeof appRouter;

export default appRouter;
