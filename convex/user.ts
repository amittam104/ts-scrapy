import { query } from './_generated/server'
import { createAuth, authComponent } from './auth'

export const getUserAuth = query({
  handler: async (ctx) => {
    const { auth, headers } = await authComponent.getAuth(createAuth, ctx)
    const userAuth = await auth.api.getSession({ headers })

    if (!userAuth) return null

    return {
      user: {
        id: userAuth.user.id,
        name: userAuth.user.name,
        email: userAuth.user.email,
        emailVerified: userAuth.user.emailVerified,
        image: userAuth.user.image,
        createdAt: new Date(userAuth.user.createdAt).getTime(),
        updatedAt: new Date(userAuth.user.updatedAt).getTime(),
      },
      session: {
        id: userAuth.session.id,
        userId: userAuth.session.userId,
        expiresAt: new Date(userAuth.session.expiresAt).getTime(),
        createdAt: new Date(userAuth.session.createdAt).getTime(),
        updatedAt: new Date(userAuth.session.updatedAt).getTime(),
      },
    }
  },
})
