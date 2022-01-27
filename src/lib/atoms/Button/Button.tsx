import { classNames } from 'utilities'

import styles from './Button.module.css'

interface ButtonProps {
  className?: string
  children?: string | string[]
  kind?: 'primary' | 'secondary' | 'destructive'
  fullWidth?: boolean
  submit?: boolean
  outline?: boolean
  onClick?(): void
}

export const Button = ({
  className,
  children,
  kind = 'secondary',
  fullWidth = false,
  submit = false,
  outline = false,
  onClick = () => {},
}: ButtonProps) => {
  const classes = classNames([
    styles.button,
    kind === 'primary' && styles.primary,
    kind === 'destructive' && styles.destructive,
    outline === true && styles.outline,
    fullWidth === true && styles.fullWidth,
    className !== undefined && className,
  ])

  const type = submit ? 'submit' : 'button'

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  )
}
