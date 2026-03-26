import { query } from './_generated/server'
import { createAuth, authComponent } from './auth'

export const getUserAuth = query({
  handler: async (ctx) => {
    const { auth, headers } = await authComponent.getAuth(createAuth, ctx)
    const userAuth = await auth.api.getSession({ headers })
    console.log('User Auth in convex Fn', userAuth)

    if (!userAuth) return null

    return {
      user: {
        id: userAuth.user.id,
        name: userAuth.user.name,
        email: userAuth.user.email,
        emailVerified: userAuth.user.emailVerified,
        image: userAuth.user.image,
        createdAt: new Date(userAuth.user.createdAt),
        updatedAt: new Date(userAuth.user.updatedAt),
      },
      session: {
        id: userAuth.session.id,
        userId: userAuth.session.userId,
        expiresAt: new Date(userAuth.session.expiresAt),
        createdAt: new Date(userAuth.session.createdAt),
        updatedAt: new Date(userAuth.session.updatedAt),
      },
    }
  },
})
