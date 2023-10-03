import logo from './logo.svg'
import './App.css'
import { Modal } from './lib/components/Modal'

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const handleclick = () => {
    setModalIsOpen(true)
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <main>
        <h1>Hello world</h1>
        <button onClick={handleclick}>Click to open modal</button>
        {modalIsOpen && (
          <Modal
            setModalIsOpen={setModalIsOpen}
            content={<p className="p-content">Modal is open !</p>}
          />
        )}
      </main>
    </div>
  )
}

export default App
