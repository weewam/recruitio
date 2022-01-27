type Role = 'Frontend' | 'Backend' | 'Fullstack' | 'Devops'
type Stage = 'Contact' | 'Dialog' | 'Interview' | 'Offer' | 'Terminated'

export interface Person {
  name: string
  email: string
  age: string
  role: Role
  stage: Stage
}