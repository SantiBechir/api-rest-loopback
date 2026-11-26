import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DataSourceMongodbDataSource} from '../datasources';
import {Usuario, UsuarioRelations} from '../models';

export class UsuarioRepository extends DefaultCrudRepository<
  Usuario,
  typeof Usuario.prototype.ID,
  UsuarioRelations
> {
  constructor(
    @inject('datasources.DataSourceMongodb')
    dataSource: DataSourceMongodbDataSource,
  ) {
    super(Usuario, dataSource);
  }
}
