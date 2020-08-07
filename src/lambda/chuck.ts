import axios from "axios";
import { Context } from "aws-lambda";
export async function handler(event: any, context: Context) {
  try {
    const data: any = await axios("https://api.chucknorris.io/jokes/random");

    return {
      statusCode: 200,
      body: JSON.stringify({ msg: data.data.value }),
    };
  } catch (err) {
    console.log(err); // output to netlify function log
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: err.message }), // Could be a custom message or object i.e. JSON.stringify(err)
    };
  }
}
