import filterPublicEnv from '../filterPublicEnv'
import getEnv from '../getEnv'
import type { Env } from '../types.ts'

const getPublicEnv = async (): Promise<Env> => {
  const env = await getEnv()

  return filterPublicEnv(env)
}

export default getPublicEnv
