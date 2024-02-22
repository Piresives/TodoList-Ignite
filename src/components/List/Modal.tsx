import { Button } from '../Button'
import { XCircle } from '@phosphor-icons/react'

import styles from './Modal.module.css'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
  title: string
  children: React.ReactNode
}

export function Modal({ isOpen, onClose, onConfirm, title, children }: ModalProps) {
  if (!isOpen) {
    return null
  }

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <header className={styles.modalHeader}>
          <strong>{title}</strong>
          <button type="button" onClick={onClose}>
            <XCircle size={24} />
          </button>
        </header>
        <div className={styles.modalBody}>
          {children}
        </div>
        <footer className={styles.modalFooter}>
          <Button onClick={onConfirm}>Confirmar</Button>
          <Button onClick={onClose}>Cancelar</Button>
        </footer>
      </div>
    </div>
  )
}