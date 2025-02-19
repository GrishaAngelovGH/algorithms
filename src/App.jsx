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

const layoutWith = Component => (
  <Layout sidebar={<Sidebar />}>
    <Component />
  </Layout>
)

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Navigate replace to='/linear-search' />} />
        <Route path='/linear-search' element={layoutWith(LinearSearch)} />
        <Route path='/binary-search' element={layoutWith(BinarySearch)} />
        <Route path='/bubble-sort' element={layoutWith(BubbleSort)} />
        <Route path='/quick-sort' element={layoutWith(QuickSort)} />
        <Route path='/binary-tree' element={layoutWith(BinaryTree)} />
        <Route path='/caesar-cipher' element={layoutWith(CaesarCipher)} />
        <Route path='/flood-fill' element={layoutWith(FloodFill)} />
      </Routes>
    </Router>
  )
}

export default App