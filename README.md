# Simple Modal component created for Next.js projects

A modal component built with Next.js using FontAwesome

## Installation

```
npm i modal-nextjs
```

Or :

```
yarn add modal-nextjs
```

Or :

```
pnpm add modal-nextjs
```

## Importing the css stylesheet

For compatibility purpose with next.js projects, the css stylesheet needs to be imported in your project.
Import the date picker and his css as shown in the example below :

## Example of use

```js
import { Modal } from 'modal-nextjs'
import 'modal-nextjs/dist/components/Modal.css'
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
          content={<p className="p-content">Modal is open !</p>}
        />
      )}
    </main>
  )
}

export default Example
```

#

### props:

`setModalIsOpen` : This state function is mandatory and will allow the modal to close itself | _**Required**_

`content` : The React content (HTML/css) to display in the modal
| _**Required**_
