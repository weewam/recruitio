import { useCallback, ReactNode } from 'react'
import { classNames } from 'utilities'
import { Button } from 'lib'

import styles from './Form.module.css'

export interface FormProps {
  className?: string
  children: ReactNode
  onSubmit?(): void
}

export const Form = ({
  className,
  children,
  onSubmit = () => {},
}: FormProps) => {
  const classes = classNames([
    className !== undefined && className,
    styles.form,
  ])

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault()
      onSubmit()
    },
    [onSubmit],
  )

  return (
    <form className={classes} onSubmit={handleSubmit}>
      {children}

      <Button kind="primary" submit fullWidth>
        Submit
      </Button>
    </form>
  )
}
