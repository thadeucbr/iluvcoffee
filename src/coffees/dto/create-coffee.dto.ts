/**
 * Generate a DTO class with the Nest CLI
 * --no-spec (no test file needed for DTO's)
 */
//  nest g class coffees/dto/create-coffee.dto --no-spec

// Apply the ValidationPipe globally in our main.ts file
// app.useGlobalPipes(new ValidationPipe());

// Install needed dependencies
// npm i class-validator class-transformer

import { IsString } from 'class-validator';

export class CreateCoffeeDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly brand: string;

  @IsString({ each: true })
  readonly flavors: string[];
}
