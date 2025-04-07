import s from "./Modal.module.css"
import type { ReactNode } from "react"


type Props = {
  open: boolean
  onClose?: () => void
  title:string
  children:ReactNode
}


export const Modal = (props: Props) => {
  const { onClose, open, title,children } = props
  return <>
      {open && (
        <div className={s.overlay}>
          <div className={s.content}>
            <h3 className={s.title}>{title}</h3>
            <hr />
            {children}
            <button className={s.closeIcon} onClick={onClose}>
              x
            </button>
          </div>
        </div>
      )}
    </>
}