import { Fragment } from 'react'
import { Button, Table } from 'lib'
import { Person } from 'types'

import styles from './RecruitTable.module.css'

interface RecruitTableProps {
  recruits: Person[]
  onEdit(i: number): void
  onRemove(i: number): void
}

export const RecruitTable = ({
  recruits,
  onEdit,
  onRemove,
}: RecruitTableProps) => {
  const headings = ['Name', 'Email', 'Age', 'Stage', 'Action']

  const rows = recruits.map(({ name, email, age, role, stage }, i) => {
    const nameColumn = (
      <Fragment key={name}>
        <p>{name}</p>
        <span>{role}</span>
      </Fragment>
    )

    const removeButton = (
      <Button
        className={styles.remove}
        onClick={() => onRemove(i)}
        kind="destructive"
        outline>
        X
      </Button>
    )

    const editButton = <Button onClick={() => onEdit(i)}>Edit</Button>

    const actions = (
      <div key={`${name} actions`}>
        {editButton}
        {removeButton}
      </div>
    )

    return [nameColumn, email, age, stage, actions]
  })

  return <Table className={styles.table} headings={headings} rows={rows} />
}
