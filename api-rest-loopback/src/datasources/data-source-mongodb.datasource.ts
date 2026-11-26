import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as dns from 'dns';

if (dns.getServers().every(s => s === '127.0.0.1' || s === '::1')) {
  dns.setServers(['8.8.8.8', '1.1.1.1']);
}

const config = {
  name: 'DataSourceMongodb',
  connector: 'mongodb',
  url: 'mongodb+srv://santiagobechir05_db_user:WR301QmSQ6ydVm7j@cluster0.dfogp3c.mongodb.net/api_rest_loopback?retryWrites=true&w=majority',
  host: '',
  port: 0,
  user: '',
  password: '',
  database: 'api_rest_loopback',
  useNewUrlParser: true,
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class DataSourceMongodbDataSource
  extends juggler.DataSource
  implements LifeCycleObserver
{
  static dataSourceName = 'DataSourceMongodb';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.DataSourceMongodb', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
