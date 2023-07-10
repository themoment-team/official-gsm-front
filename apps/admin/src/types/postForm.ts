import type { postFormSchema } from 'admin/shared';

import type { z } from 'zod';

export type PostFormType = z.infer<typeof postFormSchema>;
