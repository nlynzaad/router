import { createFileRoute } from '@tanstack/solid-router'
import { Link, Outlet } from '@tanstack/solid-router'

export const Route = createFileRoute('/_pathlessLayout/_nested-layout')({
  component: LayoutComponent,
})

function LayoutComponent() {
  return (
    <div>
      <div>I'm a nested pathless layout</div>
      <div class="flex gap-2 border-b">
        <Link
          to="/route-a"
          activeProps={{
            class: 'font-bold',
          }}
        >
          Go to route A
        </Link>
        <Link
          to="/route-b"
          activeProps={{
            class: 'font-bold',
          }}
        >
          Go to route B
        </Link>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  )
}
