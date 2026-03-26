import { fetchAuthQuery } from '#/lib/auth-server'
import { createServerFn } from '@tanstack/react-start'
import { api } from 'convex/_generated/api'
import { redirect } from '@tanstack/react-router'

export const getSessionFn = createServerFn({ method: 'GET' }).handler(
  async () => {
    const userAuthRaw = await fetchAuthQuery(api.user.getUserAuth)

    if (!userAuthRaw) {
      throw redirect({ to: '/login' })
    }

    const userAuth = {
      session: {
        ...userAuthRaw.session,
      },
      user: {
        ...userAuthRaw.user,
        createdAt: new Date(userAuthRaw.user.createdAt),
        updatedAt: new Date(userAuthRaw.user.updatedAt),
      },
    }

    return userAuth
  },
)
