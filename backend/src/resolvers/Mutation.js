import * as bcrypt from "bcryptjs"
import { GraphQLError } from "graphql"
import { v4 as uuidv4 } from "uuid"

const Mutation = {
  login: async (parent, { username, passwd }, { UserModel }) => {
    const user = await UserModel.findOne({ username })
    if (!user) throw new GraphQLError(`USER_NOTFOUND_ERROR`)

    // console.log(passwd, user.passwd)
    const validPasswd = await bcrypt.compare(passwd, user.passwd)
    // const validPasswd = passwd === user.passwd
    if (!validPasswd) throw new GraphQLError(`PASSWORD_INCORRECT_ERROR`)

    return user
  },
  register: async (parent, { username, passwd, identity }, { UserModel }) => {
    let user = await UserModel.findOne({ username })
    if (user) throw new GraphQLError(`USER_EXISTING_ERROR`)

    const hashedPassword = await bcrypt.hash(passwd, 10)
    user = await new UserModel({
      id: uuidv4(),
      username,
      passwd: hashedPassword,
      // passwd,
      identity,
    }).save()
    return user
  },
}
export default Mutation
