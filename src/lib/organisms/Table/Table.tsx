import { ReactNode } from 'react'
import { classNames } from 'utilities'

import styles from './Table.module.css'

interface TableProps {
  className?: string
  headings: string[]
  rows: ReactNode[][]
}

export const Table = ({ className, headings, rows }: TableProps) => {
  const classes = classNames([
    className !== undefined && className,
    styles.table,
  ])

  const tableHeadings = headings.map((heading) => (
    <th key={heading} data-column={heading}>
      {heading}
    </th>
  ))

  /* Disabling this rule because this is a demo */
  const tableRows = rows.map((row, i) => {
    const tableData = row.map((column, j) => (
      // eslint-disable-next-line react/no-array-index-key
      <td key={j} data-column={headings[j]}>
        {column}
      </td>
    ))
    // eslint-disable-next-line react/no-array-index-key
    return <tr key={i}>{tableData}</tr>
  })

  return (
    <table className={classes}>
      <thead>
        <tr>{tableHeadings}</tr>
      </thead>
      <tbody>{tableRows}</tbody>
    </table>
  )
}
