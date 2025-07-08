import type { Env } from '../types.ts'

const filterPublicEnv = (env: Record<string, string | undefined>): Env => {
  const publicEnv: Env = {}

  for (const name of Object.keys(env)) {
    if (!name.startsWith('NEXT_PUBLIC_')) {
      continue
    }

    publicEnv[name] = env[name]
  }

  return publicEnv
}

export default filterPublicEnv
