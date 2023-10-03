import { faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Modal({ setModalIsOpen, content }) {
  const handleClose = () => {
    setModalIsOpen(false)
  }
  return (
    <div
      className={'darkBG'}
      onClick={(e) => {
        e.target.className === 'darkBG' && setModalIsOpen(false)
      }}
    >
      <div className='main-modal-div'>
        <div className='content-div'>
          <button
            className='close-button'
            aria-label='Close'
            title='Close'
            onClick={handleClose}
          >
            <FontAwesomeIcon icon={faClose} />
          </button>
          <div className='text-left'>{content}</div>
        </div>
      </div>
    </div>
  )
}
