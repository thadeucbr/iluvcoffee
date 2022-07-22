// Generate a Nest Module with the Nest CLI
// nest g module {name}
// shorthand: nest g mo {name}

/* CoffeesModule FINAL CODE */
import { Module } from '@nestjs/common';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';

@Module({
  controllers: [CoffeesController],
  providers: [CoffeesService],
})
export class CoffeesModule {}
