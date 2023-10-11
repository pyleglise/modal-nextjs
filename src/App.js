// import logo from './logo.svg'
import { useState } from 'react'
import './App.css'
// import { Modal } from 'modal-nextjs'
import Modal from './lib/components/Modal'
// import { Modal } from './lib/components/Modal'
const styles = {
  'p-content': {
    padding: '5em',
    margin: 0,
  },
}
function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const handleclick = () => {
    setModalIsOpen(true)
  }
  return (
    <div className="App">
      <header className="App-header"></header>

      <main>
        <h1>Hello world</h1>
        <button onClick={handleclick}>Click to open modal</button>
        {modalIsOpen && (
          <Modal
            setModalIsOpen={setModalIsOpen}
            content={<p style={styles['p-content']}>Modal is well open !</p>}
          />
        )}
      </main>
    </div>
  )
}

export default App
