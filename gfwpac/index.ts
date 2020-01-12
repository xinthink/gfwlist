import { Context } from "@azure/functions";
import { Response } from 'request';
import * as request from 'request-promise-native';

const GFW_LIST_URL = 'https://raw.githubusercontent.com/gfwlist/gfwlist/master/gfwlist.txt';
// const GFW_LIST_URL = 'http://gfw.xinthink.com/';

export default async function (context: Context): Promise<void> {
  context.log('fetching gfwlist...');
  const resp: Response = await request.get({
    uri: GFW_LIST_URL,
    resolveWithFullResponse: true,
  });
  context.res = {
    status: resp.statusCode,
    body: resp.body,
  };
}
