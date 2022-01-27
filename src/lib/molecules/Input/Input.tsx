import { ChangeEvent } from 'react'
import { Label } from 'lib/atoms'

interface InputProps {
  label?: string
  id: string
  value?: string
  placeholder: string
  kind?: 'text' | 'email'
  onChange(name: string, value: string): void
}

export const Input = ({
  label,
  id,
  value,
  placeholder,
  kind = 'text',
  onChange,
}: InputProps) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
    onChange(event.target.name, event.target.value)

  const labelEl = label && <Label htmlFor={id}>{label}</Label>

  return (
    <div className="form-item">
      {labelEl}
      <input
        id={id}
        name={id}
        value={value}
        type={kind}
        aria-label={label}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  )
}
