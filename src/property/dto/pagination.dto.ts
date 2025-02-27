import { IsNumber, IsOptional, IsPositive } from "class-validator"

export class PaginationDto{
    @IsNumber()
    @IsPositive()
    @IsOptional()
    skip:number // number of the records that we need to skip before starting to returning the result

    @IsNumber()
    @IsPositive()
    @IsOptional()
    limit:number    // maximum number of records to return
}