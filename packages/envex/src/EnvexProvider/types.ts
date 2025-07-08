import type { ReactNode } from 'react'
import type { Env } from '../types.ts'

export interface EnvexProviderPropsInterface {
  initialEnv: Env
  children: ReactNode
}
