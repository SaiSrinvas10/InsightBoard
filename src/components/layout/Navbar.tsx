import { useUIStore } from '../../app/store'

export default function Navbar() {
  const toggleTheme = useUIStore((s) => s.toggleTheme)

  return (
    <header className="flex h-14 items-center justify-between border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950 px-6">
      <span className="text-sm text-slate-400">
        Real-time Analytics Dashboard
      </span>

      <button
        onClick={toggleTheme}
        aria-label="Toggle dark mode"
        className="rounded px-3 py-1 text-sm
           bg-slate-200 text-slate-900
           dark:bg-slate-800 dark:text-white
           hover:bg-slate-300 dark:hover:bg-slate-700"
      >
        Toggle Theme
      </button>
    </header>
  )
}
