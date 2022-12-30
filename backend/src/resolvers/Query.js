import { GraphQLError } from "graphql"

const Query = {
  users: async (parent, { username, passwd }, { UserModel }) => {
    const user = await UserModel.findOne({ username })
    if (!user) throw new GraphQLError(`User '${username}' not found!!`)
    // console.log(user)
    return user
  },
}

export default Query
