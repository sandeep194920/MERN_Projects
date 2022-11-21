import React from 'react'
import { useGlobalContext } from '../context'

function Modal() {
  const { closeModal, showModal } = useGlobalContext()
  return (
    <section className={`${showModal ? 'modal show-modal' : 'modal'}`}>
      <article className="container">
        <div className="modal-content">
          <h3>Modal</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor aut
            ut perspiciatis debitis tempora architecto delectus porro, neque
            animi quia maxime nobis optio iure eos natus corporis dolores
            laborum eum repudiandae a, in consequatur, voluptatum quaerat.
          </p>
          <p>
            Aliquid aspernatur deserunt qui. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Dolorem ducimus asperiores officia,
            voluptas possimus magni, esse recusandae neque sed ratione sit! At
            sed ex maxime nesciunt delectus quidem aliquam deleniti assumenda
            explicabo, tenetur rerum corporis quos! Delectus minima fugiat
            excepturi. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Ab, mollitia.
          </p>
        </div>
        <div className="modal-btn-container">
          <button onClick={closeModal}>Close</button>
        </div>
      </article>
    </section>
  )
}

export default Modal
