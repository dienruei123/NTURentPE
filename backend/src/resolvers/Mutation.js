import * as bcrypt from "bcryptjs"
import { GraphQLError } from "graphql"
import { v4 as uuidv4 } from "uuid"
import jwt from "jsonwebtoken"
import dotenv from "dotenv-defaults"

dotenv.config()
const generateToken = (data) => {
  let jwtSecretKey = process.env.JWT_SECRET_KEY || "JwtSecretKey"
  try {
    let token = jwt.sign(data, jwtSecretKey)
    // console.log(jwtSecretKey)
    return token
  } catch (e) {
    return "GENERATE_JWTSECRETKEY_ERROR"
  }
}

const Mutation = {
  login: async (parent, { username, passwd }, { UserModel }) => {
    const user = await UserModel.findOne({ username })
    if (!user) throw new GraphQLError(`USER_NOTFOUND_ERROR`)

    // console.log(passwd, user.passwd)
    const validPasswd = await bcrypt.compare(passwd, user.passwd)
    // const validPasswd = passwd === user.passwd
    if (!validPasswd) throw new GraphQLError(`PASSWORD_INCORRECT_ERROR`)

    const date = new Date().getTime()

    const data = {
      id: user.id,
      username: user.username,
      loggedInAt: date,
    }
    // console.log(data)
    const token = generateToken(data)
    user.isLoggedIn = true
    user.loggedInAt = date
    await user.save()
    // console.log(date, user)
    // console.log(token)
    // const verify = jwt.verify("", process.env.JWT_SECRET_KEY)
    // console.log(verify)
    return token
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
      isLoggedIn: false,
      loggedInAt: new Date().getTime(),
    }).save()
    console.log(user)
    // return user
    return user.populate("events")
  },
  logout: async (parent, { username }, { UserModel }) => {
    let user = await UserModel.findOne({ username })
    user.isLoggedIn = false
    user.loggedInAt = new Date().getTime()
    await user.save()
    return user
  },

  event: async (
    parent,
    { eventname, hostname, eventdatefrom, eventdateto, tags, description },
    { EventModel }
  ) => {
    let event = await new EventModel({
      eventname,
      hostname,
      eventdatefrom,
      eventdateto,
      tags,
      participants: [],
      description,
    })
    await event.save()
    return event
  },
  addtoEventlist: async (parent, { username, eventname }, { EventModel }) => {
    let event = await EventModel.findOne({ eventname })
    event.participants.push(username)
    event.save()
    return username
  },
}
export default Mutation
