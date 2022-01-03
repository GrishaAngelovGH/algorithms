import { render, screen } from '@testing-library/react'
import { act } from 'react-dom/test-utils'

import App from './App'

test('should render Linear Search Algorithm', () => {
  render(<App />)

  expect(screen.getAllByRole('heading')[1]).toHaveTextContent(/^Linear Search Algorithm$/)
})

test('should render Binary Search Algorithm', () => {
  render(<App />)

  act(() => {
    const binarySearchLink = document.querySelector("a[href='#/binary-search']")
    binarySearchLink.dispatchEvent(new MouseEvent('click', { bubbles: true }))
  })

  expect(screen.getAllByRole('heading')[1]).toHaveTextContent(/^Binary Search Algorithm$/)
})

test('should render Bubble Sort Algorithm', () => {
  render(<App />);

  act(() => {
    const bubbleSortLink = document.querySelector("a[href='#/bubble-sort']")
    bubbleSortLink.dispatchEvent(new MouseEvent('click', { bubbles: true }))
  })

  expect(screen.getAllByRole('heading')[1]).toHaveTextContent(/^Bubble Sort$/)
})

test('should render Quick Sort Algorithm', () => {
  render(<App />)

  act(() => {
    const bubbleSortLink = document.querySelector("a[href='#/quick-sort']")
    bubbleSortLink.dispatchEvent(new MouseEvent('click', { bubbles: true }))
  })

  expect(screen.getAllByRole('heading')[1]).toHaveTextContent(/^Quick Sort$/)
})

test.skip('should render Binary Tree Algorithms', () => {
  render(<App />);

  act(() => {
    const binaryTreeLink = document.querySelector("a[href='#/binary-tree']")
    binaryTreeLink.dispatchEvent(new MouseEvent('click', { bubbles: true }))
  })

  expect(screen.getAllByRole('heading')[1]).toHaveTextContent(/^Binary Tree Traversal Algorithms$/)
})

test('should render Caesar Cipher Algorithm', () => {
  render(<App />)

  act(() => {
    const bubbleSortLink = document.querySelector("a[href='#/caesar-cipher']")
    bubbleSortLink.dispatchEvent(new MouseEvent('click', { bubbles: true }))
  })

  expect(screen.getAllByRole('heading')[1]).toHaveTextContent(/^Caesar Cipher Algorithm$/)
})

test('should render Flood Fill Algorithm', () => {
  render(<App />)

  act(() => {
    const bubbleSortLink = document.querySelector("a[href='#/flood-fill']")
    bubbleSortLink.dispatchEvent(new MouseEvent('click', { bubbles: true }))
  })

  expect(screen.getAllByRole('heading')[1]).toHaveTextContent(/^Flood Fill Algorithm$/)
})
