import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";
import * as dotenv from 'dotenv';
import * as path from 'path'

dotenv.config();

export default ():PostgresConnectionOptions=>({
    url: process.env.DATABASE_URL,
    type: "postgres",
    port: +(process.env.DATABASE_PORT!), // Doğru PostgreSQL portu
    entities: [path.resolve(__dirname,'..') + '/**/*.entity{.ts,.js}'],  //__dirname: absolute directory, current directory of the current file
    synchronize: false,
})