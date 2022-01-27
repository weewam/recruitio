import { useState, useCallback } from 'react'
import { RECRUITS } from 'dummyData'
import { RecruitForm, RecruitTable } from 'components'
import { Button, Input } from 'lib'
import { Person } from 'types'

import 'App.css'

const fallback = (
  <section className="fallback">
    <h2>No Recruits available</h2>
    <p>Try changing the search term or creating a new recruit</p>
  </section>
)

function App() {
  const [search, setSearch] = useState('')
  const [recruits, setRecruits] = useState(RECRUITS)
  const [activeRecruit, setActiveRecruit] = useState<number | null>(null)

  const openModal = (i: number) => setActiveRecruit(i)
  const closeModal = () => setActiveRecruit(null)

  const handleSearch = useCallback((_, value: string) => {
    setSearch(value)
  }, [])

  const putRecruit = useCallback(
    (recruit: Person) => {
      if (activeRecruit !== null) {
        const immutableRecruits = [...recruits]
        immutableRecruits[activeRecruit] = { ...recruit }

        setRecruits(immutableRecruits)
      }
    },
    [activeRecruit, recruits],
  )

  const removeRecruit = useCallback(
    (i: number) => {
      const immutableRecruits = [...recruits]
      immutableRecruits.splice(i, 1)

      setRecruits(immutableRecruits)
    },
    [recruits],
  )

  const filteredRecruits = recruits.filter(
    ({ name, email }) => name.includes(search) || email.includes(search),
  )

  const table = (
    <RecruitTable
      onEdit={openModal}
      onRemove={removeRecruit}
      recruits={filteredRecruits}
    />
  )

  const content = filteredRecruits.length ? table : fallback

  const form = activeRecruit !== null && (
    <RecruitForm
      recruits={recruits}
      selected={activeRecruit}
      onSubmit={putRecruit}
      onClose={closeModal}
    />
  )

  return (
    <>
      <main>
        <header>
          <h1>Recruits</h1>

          <Input
            id="search"
            value={search}
            placeholder="Search for a recruit"
            onChange={handleSearch}
          />

          <Button
            kind="primary"
            onClick={() => setActiveRecruit(recruits.length)}>
            New recruit
          </Button>
        </header>
        {content}
      </main>

      {form}
    </>
  )
}

export default App
