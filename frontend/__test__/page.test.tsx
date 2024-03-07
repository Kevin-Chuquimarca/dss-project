import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import Login from '@/components/customs/login'

test('Page', () => {
  render(<Login />)
  expect(screen.getByRole('heading', { level: 1, name: 'Login' })).toBeDefined()
})
