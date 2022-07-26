/*
  👉👉👉 NOTE: If you are following along with this course and going to keep this dynamic module...
  
  ⭐⭐⭐⭐ ️️Make sure you pass in "username" and "password".
*/

import { DynamicModule } from '@nestjs/common';
import { DataSource, DataSourceOptions } from 'typeorm';

// Generate a DatabaseModule
// nest g mo database

// Initial attempt at creating "CONNECTION" provider, and utilizing useValue for values */
// {
//   provide: 'CONNECTION',
//   useValue: new DataSource({
//     type: 'postgres',
//     host: 'localhost',
//     port: 5432
//   }).initialize(),
// }

// Creating static register() method on DatabaseModule
// export class DatabaseModule {
//   static register(options: DataSourceOptions): DynamicModule {}
// }

// Improved Dynamic Module way of creating CONNECTION provider
export class DatabaseModule {
  static register(options: DataSourceOptions): DynamicModule {
    return {
      module: DatabaseModule,
      providers: [
        {
          provide: 'CONNECTION',
          useValue: new DataSource(options),
        },
      ],
    };
  }
}

/*
  👉👉👉 NOTE: If you are following along with this course and going to keep this dynamic module...
  
  ⭐⭐⭐⭐ ️️Make sure you pass in "username" and "password".
*/
