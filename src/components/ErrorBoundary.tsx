import type { ReactNode } from 'react'
import { Component } from 'react'

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
}

export default class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error: Error) {
    console.error('Unhandled error:', error)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex h-screen items-center justify-center bg-slate-950 text-white">
          <div className="rounded bg-slate-900 p-6 text-center">
            <h2 className="mb-2 text-xl font-semibold">
              Something went wrong
            </h2>
            <p className="text-slate-400">
              Please refresh the page
            </p>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
