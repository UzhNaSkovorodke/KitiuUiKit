import React, { ReactNode, useCallback, useEffect } from 'react'
import cls from './Modal.module.scss'
import { classNames } from "@/shared/lib/classNames/classNames";
import { Portal } from "@/shared/ui/Portal/Portal";

interface ModalProps {
  className?: string
  children?: ReactNode
  isOpen?: boolean
  onClose?: () => void
}

export const Modal = (props: ModalProps) => {
  const { className, children, isOpen, onClose } = props


  const closeHandler = useCallback(() => {
    if (onClose) {
      onClose()
    }
  }, [onClose])

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeHandler()
      }
    },
    [closeHandler]
  )
  const onContentClick = (e: React.MouseEvent) => {
    e.stopPropagation()
  }
  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown)
    }

    return () => {
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen, onKeyDown])

  return (
    <Portal>
      <div
          className={classNames(cls.Modal, [className ?? '', isOpen ? cls.opened : '', cls[' ']])}>
        <div className={cls.overlay} onClick={closeHandler} />
        <div className={cls.content} onClick={closeHandler}>
          <div onClick={onContentClick}>{children}</div>
        </div>
      </div>
    </Portal>
  )
}
