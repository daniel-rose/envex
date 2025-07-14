import { PUBLIC_ENV_PREFIX } from '../constants.ts'
import type { Env } from '../types.ts'

const filterPublicEnv = (env: Record<string, string | undefined>): Env => {
  const publicEnv: Env = {}

  for (const name of Object.keys(env)) {
    if (!name.startsWith(PUBLIC_ENV_PREFIX)) {
      continue
    }

    publicEnv[name] = env[name]
  }

  return publicEnv
}

export default filterPublicEnv
