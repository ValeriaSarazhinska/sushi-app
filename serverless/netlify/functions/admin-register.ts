import {Handler} from '@netlify/functions';
import {hashPassword} from "../common/password";
import {sighToken} from "../common/jwt";
import {api} from "../common/api";
import {AdminRegisterInput} from '../common/sdk'

const handler: Handler = async (event, context) => {
  const { body, headers } = event;
  if(!headers['x-sushiapp-secret-key'] ||
      headers['x-sushiapp-secret-key'] !== 'mysushiappsecretkey'){

    return {
      statusCode: 403,
      body: JSON.stringify({ message: "'x-sushiapp-secret-key' is missing or value is invalid"}),
    };
  }

  const input: AdminRegisterInput = JSON.parse(body!).input.admin;

  const password = hashPassword(input.password)

  const data = await api.InsertAdmin({
    username: input.username,
    password,
  },{
    'x-hasura-admin-secret' : 'myadminsecretkey'
  });

  const accessToken = sighToken(data.insert_admin_one?.id);

  return {
    statusCode: 200,
    body: JSON.stringify({ accessToken: accessToken }),
  };
};

export { handler };
