import { expect, test } from 'vitest'
import { render } from 'vitest-browser-react'
import { EnvexProvider, EnvexProviderIsMissingError } from '../../src'
import EnvList from '../../src/EnvList'

test('Try to render a component which uses "useEnv" without EnvexProvider as parent.', () => {
  try {
    render(<EnvList />)
  } catch (error) {
    expect(error).toBeInstanceOf(EnvexProviderIsMissingError)
  }
})

test('Try to render a component which uses "useEnv" without EnvexProvider as parent.', () => {
  window.ENV = {
    NEXT_PUBLIC_TEST: 'test',
  }

  try {
    render(
      <EnvexProvider initialEnv={{}}>
        <EnvList />
      </EnvexProvider>
    )
  } catch (error) {
    expect(error).toBeInstanceOf(EnvexProviderIsMissingError)
  }

  delete window.ENV
})
