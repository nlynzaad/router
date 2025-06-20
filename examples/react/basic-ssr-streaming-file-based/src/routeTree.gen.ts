/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import type { FileRoutesByPath, CreateFileRoute } from '@tanstack/react-router'
import { Route as rootRoute } from './routes/__root'
import { Route as ErrorRouteImport } from './routes/error'
import { Route as PostsRouteRouteImport } from './routes/posts/route'
import { Route as IndexRouteImport } from './routes/index'
import { Route as PostsIndexRouteImport } from './routes/posts/index'
import { Route as PostsPostIdRouteImport } from './routes/posts/$postId'

// Create/Update Routes

const ErrorRoute = ErrorRouteImport.update({
  id: '/error',
  path: '/error',
  getParentRoute: () => rootRoute,
} as any)

const PostsRouteRoute = PostsRouteRouteImport.update({
  id: '/posts',
  path: '/posts',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexRouteImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const PostsIndexRoute = PostsIndexRouteImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => PostsRouteRoute,
} as any)

const PostsPostIdRoute = PostsPostIdRouteImport.update({
  id: '/$postId',
  path: '/$postId',
  getParentRoute: () => PostsRouteRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexRouteImport
      parentRoute: typeof rootRoute
    }
    '/posts': {
      id: '/posts'
      path: '/posts'
      fullPath: '/posts'
      preLoaderRoute: typeof PostsRouteRouteImport
      parentRoute: typeof rootRoute
    }
    '/error': {
      id: '/error'
      path: '/error'
      fullPath: '/error'
      preLoaderRoute: typeof ErrorRouteImport
      parentRoute: typeof rootRoute
    }
    '/posts/$postId': {
      id: '/posts/$postId'
      path: '/$postId'
      fullPath: '/posts/$postId'
      preLoaderRoute: typeof PostsPostIdRouteImport
      parentRoute: typeof PostsRouteRouteImport
    }
    '/posts/': {
      id: '/posts/'
      path: '/'
      fullPath: '/posts/'
      preLoaderRoute: typeof PostsIndexRouteImport
      parentRoute: typeof PostsRouteRouteImport
    }
  }
}

// Add type-safety to the createFileRoute function across the route tree

declare module './routes/index' {
  const createFileRoute: CreateFileRoute<
    '/',
    FileRoutesByPath['/']['parentRoute'],
    FileRoutesByPath['/']['id'],
    FileRoutesByPath['/']['path'],
    FileRoutesByPath['/']['fullPath']
  >
}
declare module './routes/posts/route' {
  const createFileRoute: CreateFileRoute<
    '/posts',
    FileRoutesByPath['/posts']['parentRoute'],
    FileRoutesByPath['/posts']['id'],
    FileRoutesByPath['/posts']['path'],
    FileRoutesByPath['/posts']['fullPath']
  >
}
declare module './routes/error' {
  const createFileRoute: CreateFileRoute<
    '/error',
    FileRoutesByPath['/error']['parentRoute'],
    FileRoutesByPath['/error']['id'],
    FileRoutesByPath['/error']['path'],
    FileRoutesByPath['/error']['fullPath']
  >
}
declare module './routes/posts/$postId' {
  const createFileRoute: CreateFileRoute<
    '/posts/$postId',
    FileRoutesByPath['/posts/$postId']['parentRoute'],
    FileRoutesByPath['/posts/$postId']['id'],
    FileRoutesByPath['/posts/$postId']['path'],
    FileRoutesByPath['/posts/$postId']['fullPath']
  >
}
declare module './routes/posts/index' {
  const createFileRoute: CreateFileRoute<
    '/posts/',
    FileRoutesByPath['/posts/']['parentRoute'],
    FileRoutesByPath['/posts/']['id'],
    FileRoutesByPath['/posts/']['path'],
    FileRoutesByPath['/posts/']['fullPath']
  >
}

// Create and export the route tree

interface PostsRouteRouteChildren {
  PostsPostIdRoute: typeof PostsPostIdRoute
  PostsIndexRoute: typeof PostsIndexRoute
}

const PostsRouteRouteChildren: PostsRouteRouteChildren = {
  PostsPostIdRoute: PostsPostIdRoute,
  PostsIndexRoute: PostsIndexRoute,
}

const PostsRouteRouteWithChildren = PostsRouteRoute._addFileChildren(
  PostsRouteRouteChildren,
)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/posts': typeof PostsRouteRouteWithChildren
  '/error': typeof ErrorRoute
  '/posts/$postId': typeof PostsPostIdRoute
  '/posts/': typeof PostsIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/error': typeof ErrorRoute
  '/posts/$postId': typeof PostsPostIdRoute
  '/posts': typeof PostsIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/posts': typeof PostsRouteRouteWithChildren
  '/error': typeof ErrorRoute
  '/posts/$postId': typeof PostsPostIdRoute
  '/posts/': typeof PostsIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/posts' | '/error' | '/posts/$postId' | '/posts/'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/error' | '/posts/$postId' | '/posts'
  id: '__root__' | '/' | '/posts' | '/error' | '/posts/$postId' | '/posts/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  PostsRouteRoute: typeof PostsRouteRouteWithChildren
  ErrorRoute: typeof ErrorRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  PostsRouteRoute: PostsRouteRouteWithChildren,
  ErrorRoute: ErrorRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

// @ts-ignore
import type * as ServerTypes from '../.tanstack-start/server-routes/routeTree.gen.ts'

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/posts",
        "/error"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/posts": {
      "filePath": "posts/route.tsx",
      "children": [
        "/posts/$postId",
        "/posts/"
      ]
    },
    "/error": {
      "filePath": "error.tsx"
    },
    "/posts/$postId": {
      "filePath": "posts/$postId.tsx",
      "parent": "/posts"
    },
    "/posts/": {
      "filePath": "posts/index.tsx",
      "parent": "/posts"
    }
  }
}
ROUTE_MANIFEST_END */
