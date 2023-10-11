import React from 'react'
import {createUseStyles} from 'react-jss'
import { faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

/**
 * CSS definition of the modal /
 * Using package react-jss
 *
 * @namespace
 * @author  Pierre-Yves Léglise <pleglise@pm.me>
 * 
 */
const useStyles = createUseStyles({
  "darkBG": {
    "background-color": "rgba(0, 0, 0, 0.2)",
    "width": "100%",
    "height": "100%",
    "overflow": "hidden",
    "z-index": "0",
    "position": "absolute",
    "top": "0",
    "left": "0"
  },
  "main-modal-div": {
    "position": "absolute",
    "top": "50%",
    "left": "50%",
    "transform": "translate(-50%, -50%)"
  },
  "content-div": {
    "border-radius": "0.75rem",
    "width": "auto",
    "height": "auto",
    "box-shadow": "0 2px 20px 0px #a6a6a6"
  },
  "close-button": {
    "position": "absolute",
    "background-color": "#3a33a4",
    "color": "#bad5ff",
    "top": "0",
    "right": "0",
    "padding-top": "0",
    "padding-bottom": "0",
    "padding-left": "0.5rem",
    "padding-right": "0.5rem",
    "margin-top": "-0.75rem",
    "margin-right": "-0.75rem",
    "align-self": "flex-end",
    "border-radius": "1rem",
    "border-width": "0",
    "font-size": "1.125rem",
    "line-height": "1.75rem",
    "font-weight": "500",
    "transition-property": "all",
    "transition-timing-function": "cubic-bezier(0.4, 0, 0.2, 1)",
    "transition-duration": "300ms",
    "cursor": "pointer"
  },
  "close-button:hover": {
    "color": "#000000",
    "background-color": "#ffffff"
  },
  "text-left": {
    "text-align": "left"
  },
  "p-content": {
    "padding": "2rem",
    "border-radius": "0.25rem",
    "background-color": "#ffffff"
  }
})

/**
 * Component that displays a modal sith the content in props
 *
 * @namespace
 * @component
 * @author  Pierre-Yves Léglise <pleglise@pm.me>
 * @example
 * import { Modal } from 'modal-nextjs'
import { useState } from 'react'

const Example = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const handleclick = () => {
    setModalIsOpen(true)
  }

  return (
    <main>
      <h1>Hello world</h1>
      <button onClick={handleclick}>Click to open modal</button>
      {modalIsOpen && (
        <Modal
          setModalIsOpen={setModalIsOpen}
          content={
            <div>
              <p className="p-class-example">Modal is open !</p>
            </div>
          }
        />
      )}
    </main>
  )
}

export default Example
 * @prop {Object}     setModalIsOpen                 State function used to close the modal.
 * @prop {String}     content                        Content to display in the modal
 * @returns {JSX.Element}   A JSX.Element that contains the modal.
 */
const Modal=({ setModalIsOpen, content })=> {
  const styles = useStyles()
  const handleClose = () => {
    setModalIsOpen(false)
  }
  return (
    <div
      className={styles.darkBG}
      onClick={(e) => {
        e.target.className === styles.darkBG && setModalIsOpen(false)
      }}
    >
      <div className={styles['main-modal-div']}>
        <div className={styles['content-div']}>
          <button
            className={styles['close-button']}
            aria-label='Close'
            title='Close'
            onClick={handleClose}
          >
            <FontAwesomeIcon icon={faClose} />
          </button>
          <div className={styles['text-left']}>{content}</div>
        </div>
      </div>
    </div>
  )
}
export default Modal

