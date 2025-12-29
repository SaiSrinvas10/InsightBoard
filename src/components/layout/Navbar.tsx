import { useUIStore } from '../../app/store'

export default function Navbar() {
  const toggleTheme = useUIStore((s) => s.toggleTheme)

  return (
    <header className="flex h-14 items-center justify-between border-b border-slate-800 px-6">
      <span className="text-sm text-slate-400">
        Real-time Analytics Dashboard
      </span>

      <button
        onClick={toggleTheme}
        aria-label="Toggle dark mode"
        className="rounded bg-slate-800 px-3 py-1 text-sm hover:bg-slate-700"
      >
        Toggle Theme
      </button>
    </header>
  )
}
