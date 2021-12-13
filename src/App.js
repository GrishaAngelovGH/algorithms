import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'

import Layout from './components/Layout'
import Sidebar from './components/Sidebar'

import LinearSearch from './components/algorithms/LinearSearch'
import BinarySearch from './components/algorithms/BinarySearch'
import BubbleSort from './components/algorithms/BubbleSort'
import QuickSort from './components/algorithms/QuickSort'
import BinaryTree from './components/algorithms/BinaryTree'
import CaesarCipher from './components/algorithms/CaesarCipher'
import FloodFill from './components/algorithms/FloodFill'

function App() {

  const linearSearchRoute = (
    <Layout sidebar={<Sidebar />}>
      <LinearSearch />
    </Layout>
  )

  const binarySearchRoute = (
    <Layout sidebar={<Sidebar />}>
      <BinarySearch />
    </Layout>
  )

  const bubbleSortRoute = (
    <Layout sidebar={<Sidebar />}>
      <BubbleSort />
    </Layout>
  )

  const quickSortRoute = (
    <Layout sidebar={<Sidebar />}>
      <QuickSort />
    </Layout>
  )

  const binaryTreeRoute = (
    <Layout sidebar={<Sidebar />}>
      <BinaryTree />
    </Layout>
  )

  const caesarCipherRoute = (
    <Layout sidebar={<Sidebar />}>
      <CaesarCipher />
    </Layout>
  )

  const floodFillRoute = (
    <Layout sidebar={<Sidebar />}>
      <FloodFill />
    </Layout>
  )

  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Navigate replace to='/linear-search' />} />
        <Route path='/linear-search' element={linearSearchRoute} />
        <Route path='/binary-search' element={binarySearchRoute} />
        <Route path='/bubble-sort' element={bubbleSortRoute} />
        <Route path='/quick-sort' element={quickSortRoute} />
        <Route path='/binary-tree' element={binaryTreeRoute} />
        <Route path='/caesar-cipher' element={caesarCipherRoute} />
        <Route path='/flood-fill' element={floodFillRoute} />
      </Routes>
    </Router>
  )
}

export default App