import { z } from 'zod';

const envVariables = z.object({
  VITE_API_ENDPOINT: z.string().url(),
  VITE_API_KEY: z.string(),
});

envVariables.parse(import.meta.env);

declare global {
  interface ImportMetaEnv extends z.infer<typeof envVariables> {}
}

export const config = {
  API_ENDPOINT: import.meta.env.VITE_API_ENDPOINT,
  API_KEY: import.meta.env.VITE_API_KEY,
  MAX_RESULTS: 30,
} as const;
