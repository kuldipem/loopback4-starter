import {model, property, belongsTo} from '@loopback/repository';

import {BaseEntity} from './base-entity.model';
import {User} from './user.model';
import {Tenant} from './tenant.model';
import {Role} from './role.model';

@model({
  name: 'user_tenants',
})
export class UserTenant extends BaseEntity {
  @property({
    type: 'number',
    id: true,
  })
  id?: number;

  @belongsTo(
    () => User,
    {name: 'user_id'},
    {
      required: true,
    },
  )
  userId: number;

  @belongsTo(
    () => Tenant,
    {name: 'tenant_id'},
    {
      required: true,
    },
  )
  tenantId: number;

  @belongsTo(
    () => Role,
    {name: 'role_id'},
    {
      required: true,
    },
  )
  roleId: number;

  @property({
    type: 'string',
    required: true,
    default: 'active',
  })
  status: string;

  constructor(data?: Partial<UserTenant>) {
    super(data);
  }
}
