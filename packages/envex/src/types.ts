export type Env = Record<string, string | undefined>

declare global {
  interface Window {
    ENV?: Env
  }
}
