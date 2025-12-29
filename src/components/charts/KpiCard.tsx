interface Props {
  label: string
  value: number | string
  unit?: string
}

import { memo } from 'react'

function KpiCard({ label, value, unit }: Props) {
  return (
    <div className="rounded bg-slate-100 text-slate-900 dark:bg-slate-900 dark:text-slate-100 p-4">
      <p className="text-sm text-slate-400">{label}</p>
      <p className="mt-2 text-2xl font-bold">
        {value} {unit}
      </p>
    </div>
  )
}

export default memo(KpiCard)
