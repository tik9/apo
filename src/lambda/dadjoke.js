// example of async handler using async-await
// https://github.com/netlify/netlify-lambda/issues/43#issuecomment-444618311
import { Handler } from '@netlify/functions'

const handler = async (ev, co) => {
  try {
    var res = await (await fetch("https://icanhazdadjoke.com", { headers: { Accept: "application/json", "user-agent": "tiapo.netlify.app, timo@tik1.net" } })).json()
    return { statusCode: 200, body: JSON.stringify({ msg: res.joke }) }
  } catch (err) {
    console.log(err)
    return { statusCode: 500, body: JSON.stringify({ msg: err.message }) }
  }
}
export { handler }