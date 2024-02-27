'use client'

import { Dispatch, SetStateAction } from 'react'
import { createPortal } from 'react-dom'

interface PortalExampleProps {
  readonly children: React.ReactNode
  readonly textButton: string
  readonly btnLayout?: string
  readonly showModal: boolean
  readonly setShowModal: Dispatch<SetStateAction<boolean>>
}

export default function ModalTemplate(props: PortalExampleProps) {
  const onClose = () => props.setShowModal(false)

  return (
    <>
      <button
        className={props.btnLayout ?? 'btn-success'}
        onClick={() => props.setShowModal(true)}
      >
        {props.textButton}
      </button>
      {props.showModal &&
        createPortal(
          <div className="modal-backdrop">
            <dialog className="modal">
              <div className="modal-body">{props.children}</div>
              <button className="close-button" onClick={onClose} />
            </dialog>
          </div>,
          document.body
        )}
    </>
  )
}
