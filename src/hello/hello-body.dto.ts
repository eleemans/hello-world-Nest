import {IsDefined, IsNotEmpty} from "class-validator"

export class HelloBodyDTO{
  @IsDefined()
  @IsNotEmpty({message: "A custom error message if you want to"})
    message!: string;
}