import { NavLink } from 'react-router-dom'
import { useUIStore } from '../../app/store'

const navItems = [
  { to: '/dashboard', label: 'Dashboard' },
  { to: '/alerts', label: 'Alerts' },
  { to: '/settings', label: 'Settings' }
]

export default function Sidebar() {
  const isOpen = useUIStore((s) => s.isSidebarOpen)

  if (!isOpen) return null

  return (
    <aside className="w-60 border-r border-slate-800 p-4">
      <h1 className="mb-8 text-xl font-semibold">InsightBoard</h1>

      <nav className="space-y-2">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `block rounded px-3 py-2 text-sm transition ${
                isActive
                  ? 'bg-slate-800 text-white'
                  : 'text-slate-400 hover:bg-slate-900 hover:text-white'
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}
