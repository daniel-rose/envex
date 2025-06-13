import Script from 'next/script'
import { connection } from 'next/server'
import type { Env } from '../types.ts'

const EnvScript = async () => {
  await connection()

  const env: Env = {}

  for (const name of Object.keys(process.env)) {
    if (!name.startsWith('NEXT_PUBLIC_')) {
      continue
    }

    env[name] = process.env[name]
  }

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
