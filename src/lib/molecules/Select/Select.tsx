import { ChangeEvent } from 'react'
import { Label } from 'lib/atoms'

import styles from './Select.module.css'

interface SelectOptionProps {
  label: string
  value: string | number
}

interface SelectProps {
  id: string
  label: string
  options: SelectOptionProps[]
  selected: SelectOptionProps['value']
  onChange(name: string, value: string): void
}

export const Select = ({
  id,
  label,
  options,
  selected,
  onChange,
}: SelectProps) => {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) =>
    onChange(event.target.name, event.target.value)

  const optionsEl = options.map(({ label, value }) => {
    return (
      <option key={value} value={value}>
        {label}
      </option>
    )
  })

  return (
    <div className="form-item">
      <Label htmlFor={id}>{label}</Label>

      <div className={styles.selectWrapper}>
        <select
          id={id}
          name={id}
          aria-label={label}
          value={selected}
          onChange={handleChange}>
          {optionsEl}
        </select>

        <span className={styles.selectArrowWrapper}>
          <svg
            viewBox="0 0 14 8"
            className={styles.selectArrow}
            xmlns="http://www.w3.org/2000/svg">
            <g stroke="none" strokeWidth="1" fillRule="evenodd">
              <path d="M14 7a1 1 0 0 1-1.694.72L6.998 2.412l-5.24 5.24a1 1 0 1 1-1.48-1.343l-.002-.003 6-6A.997.997 0 0 1 6.996 0H7c.283 0 .538.117.72.306l6 6c.173.18.28.424.28.694Z" />
            </g>
          </svg>
        </span>
      </div>
    </div>
  )
}
