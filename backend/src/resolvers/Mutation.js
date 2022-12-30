import * as bcrypt from "bcrypt"
import { GraphQLError } from "graphql"
import { v4 as uuidv4 } from "uuid"

const Mutation = {
  login: async (parent, { username, passwd }, { UserModel }) => {
    const user = await UserModel.findOne({ username })
    if (!user) throw new GraphQLError(`Username '${username}' not found!!!`)

    const validPasswd = await bcrypt.compare(passwd, user.passwd)
    if (!validPasswd) throw new GraphQLError(`Wrong password!!!`)

    return user
  },
  register: async (parent, { username, passwd, identity }, { UserModel }) => {
    let user = await UserModel.findOne({ username })
    if (user) throw new GraphQLError(`Username '${username}' already exists!!!`)

    const hashedPassword = await bcrypt.hash(passwd, 10)
    user = await new UserModel({
      id: uuidv4(),
      username,
      passwd: hashedPassword,
      identity,
    }).save()
    return user
  },
}
export default Mutation
