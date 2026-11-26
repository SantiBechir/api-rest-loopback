import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DataSourceMongodbDataSource} from '../datasources';
import {Carrito, CarritoRelations} from '../models';

export class CarritoRepository extends DefaultCrudRepository<
  Carrito,
  typeof Carrito.prototype.ID,
  CarritoRelations
> {
  constructor(
    @inject('datasources.DataSourceMongodb')
    dataSource: DataSourceMongodbDataSource,
  ) {
    super(Carrito, dataSource);
  }
}
