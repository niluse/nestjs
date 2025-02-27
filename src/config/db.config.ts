import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";
import * as dotenv from 'dotenv';
import * as path from 'path'
import { registerAs } from "@nestjs/config";

dotenv.config();

export default registerAs("dbconfig.dev",():PostgresConnectionOptions=>({
    url: process.env.DATABASE_URL,
    type: "postgres",
    port: +(process.env.DATABASE_PORT!), // Doğru PostgreSQL portu
    entities: [path.resolve(__dirname,'..') + '/**/*.entity{.ts,.js}'],  //__dirname: absolute directory, current directory of the current file
    synchronize: true, // Production'da false olmalı
}))