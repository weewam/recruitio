import { ReactNode, useEffect } from 'react'
import ReactDOM from 'react-dom'

import styles from './Modal.module.css'

interface ModalPortalProps {
  title: string
  children?: ReactNode
  onClose(): void
}

interface ModalProps extends ModalPortalProps {
  open: boolean
}

export const ModalPortal = ({ title, children, onClose }: ModalPortalProps) => {
  const portal = document.getElementById('portal')!

  useEffect(() => {
    const handleEscPress = (event: KeyboardEvent) => {
      if (event.key === 'Escape' || event.code === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleEscPress)
    return () => document.removeEventListener('keydown', handleEscPress)
  }, [onClose])

  return ReactDOM.createPortal(
    <>
      <div onClick={onClose} className={styles.backdrop} onKeyDown={onClose} />

      <div className={styles.modal} role="dialog">
        <h3 className={styles.title}>{title}</h3>
        {children}
      </div>
    </>,
    portal,
  )
}

export const Modal = ({ open, title, onClose, children }: ModalProps) => {
  if (open) {
    return (
      <ModalPortal title={title} onClose={onClose}>
        {children}
      </ModalPortal>
    )
  }

  return null
}
