import { useUIStore } from '../../app/store'
import { useDebounce } from '../../hooks/useDebounce'
import { useEffect, useState } from 'react'

export default function SearchInput() {
  const setSearch = useUIStore((s) => s.setSearch)
  const [value, setValue] = useState('')
  const debounced = useDebounce(value)

  useEffect(() => {
    setSearch(debounced)
  }, [debounced, setSearch])

  return (
    <input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Search metrics..."
      className="rounded bg-slate-800 px-3 py-1 text-sm text-white"
    />
  )
}
