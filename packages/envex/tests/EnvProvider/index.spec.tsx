import { expect, test } from 'vitest'
import { render } from 'vitest-browser-react'
import { EnvexProvider, EnvexScriptIsMissingError } from '../../src'

test('Try to render "EnvProvider" without required window variable "ENV".', () => {
  try {
    render(<EnvexProvider initialEnv={{}}>Children</EnvexProvider>)
  } catch (error) {
    expect(error).toBeInstanceOf(EnvexScriptIsMissingError)
  }
})

test('Try to render "EnvProvider" with required window variable "ENV".', async () => {
  window.ENV = {
    NEXT_PUBLIC_TEST: 'test',
  }

  const { getByText } = render(
    <EnvexProvider initialEnv={{}}>Children</EnvexProvider>
  )
  await expect.element(getByText('Children')).toBeInTheDocument()

  delete window.ENV
})
