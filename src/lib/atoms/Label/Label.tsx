import styles from './Label.module.css'

interface LabelProps {
  htmlFor: string
  children: string
}

export const Label = ({ htmlFor, children }: LabelProps) => {
  return (
    <label className={styles.label} htmlFor={htmlFor}>
      {children}
    </label>
  )
}
