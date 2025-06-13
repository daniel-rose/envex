'use client'

import { useContext } from 'react'
import EnvexContext from '../EnvexContext'
import { EnvexProviderIsMissingError } from '../errors.ts'
import type { Env } from '../types.ts'

const useEnv = (): Env => {
  const env = useContext(EnvexContext)

  if (env === undefined) {
    throw new EnvexProviderIsMissingError(
      'The hook useEnv must be used within a EnvexProvider'
    )
  }

  return env
}

export default useEnv
