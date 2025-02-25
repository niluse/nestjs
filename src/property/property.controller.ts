import { Body, Controller, Get, HttpCode, Param, ParseIntPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreatePropertyDto } from './dto/createProperty.dto';
import { IdParamDto } from './dto/idParam.dto';
import { ParseIdPipe } from './pipes/parseIdPipe';
import { ZodValidationPipe } from './pipes/zodValidationPipe';
import { createPropertySchema, CreatePropertyZodDto } from './dto/createPropertyZod.dto';

@Controller('property')
export class PropertyController {
    @Get()
    findAll(){
        return 'All Properties'
    }

    @Get(":id")
    findOne(@Param('id', ParseIntPipe) id){
        console.log(typeof id)
        return id
    }

    // @Get(':id/:slug')
    // findOne(@Param('id') id, @Param("slug") slug){
    //     return`id: ${id}\nslug:${slug}`
    // }


    @Post()
    @UsePipes(new ZodValidationPipe(createPropertySchema))
    create(@Body() body: CreatePropertyZodDto){
        return body
    }

    // @Post()
    // @UsePipes(
    //     new ValidationPipe({
    //         whitelist: true, forbidNonWhitelisted: true,
    //         groups:["create"]
    //     }))
    // // @HttpCode(202)
    // create(@Body() body: CreatePropertyDto){
    //     return body
    // }
    // ya da :
    // @Post()
    // create(@Body(new ValidationPipe({whitelist: true, forbidNonWhitelisted: true})) body: CreatePropertyDto){
    //     return body
    // }

    @Patch(":id")
    update(
        // @Param() param:IdParamDto,
        // @Param() {id}:IdParamDto,
        @Param("id" , ParseIdPipe) id, 
        @Body(
        // new ValidationPipe({
        //     whitelist: true,
        //     forbidNonWhitelisted: true,
        //     groups:['update'],
        //     always:true
        // })
        )
        body:CreatePropertyDto){
            return body
        }
}
