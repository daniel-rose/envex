import Script from 'next/script'
import { connection } from 'next/server'
import filterPublicEnv from '../filterPublicEnv'
import type { Env } from '../types.ts'

const EnvScript = async () => {
  await connection()

  const env: Env = filterPublicEnv(process.env)

  const innerHTML = {
    __html: `window.ENV = ${JSON.stringify(env)}`,
  }

  return (
    <Script
      id='envex'
      strategy='beforeInteractive'
      dangerouslySetInnerHTML={innerHTML}
    />
  )
}

export default EnvScript
