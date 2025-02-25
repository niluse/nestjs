// dbConfig.ts
import { Property } from "src/entities/property.entity";
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";

export const pgConfig: PostgresConnectionOptions = {
    url: process.env.DATABASE_URL,
    type: "postgres",
    port: 5432, // Doğru PostgreSQL portu
    entities: [__dirname+'/**/*.entity{.ts,.js}'],  //__dirname: absolute directory, current directory of the current file
    synchronize: true, // Production'da false olmalı
};
