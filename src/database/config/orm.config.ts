import { DrugEntity } from 'src/drug/entities/drug.entity';
import { EntryEntity } from 'src/entry/entities/entry.entity';
import { EvolutionEntity } from 'src/evolution/entities/evolution.entity';

import { PatientEntity } from 'src/patient/entity/patient.entity';
import { UserEntity } from 'src/users/entities/user.entity';

export function ormConfig(): any {
  return {
    type: process.env.DATABASE_TYPE,
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT),
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    synchronize: true,
    logging: false,
    autoLoadEntities: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
    connectTimeout: parseInt(process.env.DATABASE_CONNECTION_TIME_OUT),
    extra: {
      connectionLimit: parseInt(process.env.DATABASE_CONNECTION_LIMIT),
    },
    entities: [
      UserEntity,
      PatientEntity,
      EntryEntity,
      DrugEntity,
      EvolutionEntity,
    ],
    migrations: ['dist/database/migrations/*.js'],
    subscribers: ['dist/observers/subscribers/*.subscriber.js'],
    cli: {
      entitiesDir: 'src/components/**/entity',
      migrationsDir: 'src/database/migrations',
      subscribersDir: 'src/observers/subscribers',
    },
  };
}
