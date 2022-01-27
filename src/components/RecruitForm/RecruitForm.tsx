import { useState, useEffect, useCallback } from 'react'
import { Input, Select, Form, Modal } from 'lib'
import { Person } from 'types'

interface RecruitFormProps {
  selected: number
  recruits: Person[]
  onSubmit(person: Person): void
  onClose(): void
}

const EMPTY_RECRUIT: Person = {
  name: '',
  email: '',
  age: '',
  role: 'Frontend',
  stage: 'Contact',
}

export const RecruitForm = ({
  selected,
  recruits,
  onSubmit,
  onClose,
}: RecruitFormProps) => {
  const title = recruits[selected] ? 'Edit recruit' : 'Add a new recruit'
  const [state, setState] = useState<Person>(EMPTY_RECRUIT)

  useEffect(() => {
    if (recruits[selected]) {
      setState({ ...recruits[selected] })
    } else {
      setState({ ...EMPTY_RECRUIT })
    }
  }, [recruits, selected])

  const handleFormChange = useCallback(
    (name: string, value: string) => {
      setState({
        ...state,
        [name]: value,
      })
    },
    [state],
  )

  const handleSubmit = useCallback(() => onSubmit(state), [state, onSubmit])

  const { name, email, age, role, stage } = state

  return (
    <Modal onClose={onClose} title={title} open>
      <Form onSubmit={handleSubmit}>
        <Input
          id="name"
          label="Name"
          kind="text"
          placeholder="John Doe"
          value={name}
          onChange={handleFormChange}
        />
        <Input
          id="email"
          label="Email"
          kind="email"
          value={email}
          placeholder="john.doe@example.com"
          onChange={handleFormChange}
        />
        <Input
          id="age"
          label="Age"
          kind="text"
          value={age}
          placeholder="Not a sophisticated field"
          onChange={handleFormChange}
        />
        <Select
          id="role"
          label="Role"
          selected={role}
          onChange={handleFormChange}
          options={[
            { label: 'Frontend', value: 'Frontend' },
            { label: 'Backend', value: 'backend' },
            { label: 'Fullstack', value: 'fullstack' },
            { label: 'Devops', value: 'devops' },
          ]}
        />
        <Select
          id="stage"
          label="Stage"
          selected={stage}
          onChange={handleFormChange}
          options={[
            { label: 'Contact', value: 'Contact' },
            { label: 'Dialog', value: 'Dialog' },
            { label: 'Interview', value: 'Interview' },
            { label: 'Offer', value: 'Offer' },
            { label: 'Terminated', value: 'Terminated' },
          ]}
        />
      </Form>
    </Modal>
  )
}
