import { Body, Controller, Get, HttpCode, Param, Post } from '@nestjs/common';
import { Http2ServerRequest } from 'http2';

@Controller('property')
export class PropertyController {
    @Get()
    findAll(){
        return 'All Properties'
    }

    // @Get(":id")
    // findOne(@Param('id') id:string){
    //     return `${id}`
    // }

    @Get(':id/:slug')
    findOne(@Param('id') id, @Param("slug") slug){
        return`id: ${id}\nslug:${slug}`
    }

    @Post()
    @HttpCode(202)
    create(@Body() body){
        return body
    }
}
