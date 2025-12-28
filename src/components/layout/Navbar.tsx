export default function Navbar() {
  return (
    <header className="flex h-14 items-center justify-between border-b border-slate-800 px-6">
      <span className="text-sm text-slate-400">
        Real-time Analytics Dashboard
      </span>

      <div className="flex items-center gap-4">
        <button className="rounded bg-slate-800 px-3 py-1 text-sm hover:bg-slate-700">
          Dark Mode
        </button>
      </div>
    </header>
  )
}
