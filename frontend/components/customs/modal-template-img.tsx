'use client'

import Image from 'next/image'
import { Dispatch, SetStateAction } from 'react'
import { createPortal } from 'react-dom'

interface PortalExampleProps {
  readonly children: React.ReactNode
  readonly nameSVG: string
  readonly alt: string
  readonly showModal: boolean
  readonly setShowModal: Dispatch<SetStateAction<boolean>>
}

export default function ModalTemplateImg(props: PortalExampleProps) {
  const onClose = () => props.setShowModal(false)

  return (
    <>
      <button onClick={() => props.setShowModal(true)}>
        <Image
          className="p-1"
          src={`/${props.nameSVG}.svg`}
          alt={props.alt}
          width={35}
          height={35}
        />
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
