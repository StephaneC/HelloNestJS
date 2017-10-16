/**
  * redis is used to store datas.
  */

import * as redis from 'redis';

export const redisProviders = [
  {
    provide: 'RedisConnectionToken',
    useFactory: async (): Promise<redis.Client> => {
      (redis as any).Promise = global.Promise;
      var port = process.env.REDIS_PORT;
      var host = process.env.REDIS_HOST;
      var pwd = process.env.REDIS_PWD;
      //if env var exist, user it
        var options = {
          auth_pass : ''
        };
        if(pwd){
            console.log("redis with pwd  ");
            options.auth_pass = pwd;
        } else {
            console.log("redis no pwd  ");
        }
      return await  redis.createClient(port, process.env.REDIS_HOST, options)
    },
  },
];
