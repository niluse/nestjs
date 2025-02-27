import { Body, Controller, Delete, Get, Header, Headers, HttpCode, Param, ParseIntPipe, Patch, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreatePropertyDto } from './dto/createProperty.dto';
import { IdParamDto } from './dto/idParam.dto';
import { ParseIdPipe } from './pipes/parseIdPipe';
import { ZodValidationPipe } from './pipes/zodValidationPipe';
import { createPropertySchema, CreatePropertyZodDto } from './dto/createPropertyZod.dto';
import { HeadersDto } from './dto/headers.dto';
import { RequestHeader } from './pipes/request-header';
import { PropertyService } from './property.service';
import { UpdatePropertyDto } from './dto/updateProperty.dto';
import { PaginationDto } from './dto/pagination.dto';

@Controller('property')
export class PropertyController {
    // propertyService:PropertyService
    // constructor(propertyService:PropertyService){
    //     this.propertyService = propertyService
    // }
    constructor(private propertyService:PropertyService){

    }
    
    @Get()
    findAll(@Query() paginationDto:PaginationDto){
        return this.propertyService.findAll(paginationDto)
    }

    @Get(":id")
    findOne(@Param('id', ParseIntPipe) id){
        return this.propertyService.findOne(id)
    }

    @Post()
    create(@Body() dto: CreatePropertyDto){
        return this.propertyService.create(dto)
    }

    @Patch(":id")
    update(
        @Param("id" , ParseIdPipe) id, 
        @Body() body:UpdatePropertyDto,
        @RequestHeader(new ValidationPipe({whitelist: true, validateCustomDecorators: true})) header: HeadersDto ) {
            return this.propertyService.update(id,body)
        }
    // validateCustomDecorators: true yi unutma!!

    @Delete(':id')
    delete(@Param('id',ParseIdPipe) id){
        return this.propertyService.delete(id)
    }

}
