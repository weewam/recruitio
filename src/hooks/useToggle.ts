import { useCallback, useState } from 'react'

export const useToggle = (state = false) => {
  const [active, setActive] = useState(state)

  const toggle = useCallback(() => setActive(!active), [active])

  return { active, toggle }
}
