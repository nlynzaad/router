import { createFileRoute } from '@tanstack/solid-router'
import { Link, Outlet } from '@tanstack/solid-router'
import { fetchPosts } from '../posts'

export const Route = createFileRoute('/posts')({
  head: () => ({
    meta: [
      {
        title: 'Posts page',
      },
    ],
  }),
  loader: fetchPosts,
  component: PostsComponent,
})

function PostsComponent() {
  const posts = Route.useLoaderData()

  return (
    <div class="p-2 flex gap-2" data-testid="posts-links">
      <ul class="list-disc pl-4">
        {[...posts(), { id: 'i-do-not-exist', title: 'Non-existent Post' }].map(
          (post) => {
            return (
              <li class="whitespace-nowrap">
                <Link
                  to="/posts/$postId"
                  params={{
                    postId: post.id,
                  }}
                  class="block py-1 text-blue-600 hover:opacity-75"
                  activeProps={{ class: 'font-bold underline' }}
                >
                  <div>{post.title.substring(0, 20)}</div>
                </Link>
              </li>
            )
          },
        )}
      </ul>
      <hr />
      <Outlet />
    </div>
  )
}
