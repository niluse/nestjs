import { ConfigService, ConfigType } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";    //! passport-jwt olan olmali burasi onemli !
import jwtConfig from "../config/jwt.config";
import { AuthJwtPayload } from "../types/auth-jwtPayload";
import { Injectable } from "@nestjs/common";
//* this JWT startegy is responsible for extracting Jwt from the incoming request headers and check if the jwt is valid
//* and if that's the case it allows the user to access that protected API

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private configService: ConfigService
    // jwtConfiguration: ConfigType<typeof jwtConfig>,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get<string>('JWT_SECRET') || 'default_secret_key',
    //   secretOrKey: jwtConfiguration.secret,
    });
  }

    //* PassportStrategy base class does the extracting, decoding and validating the jwt token 
    //* validate takes that decoded token 
    validate(payload:AuthJwtPayload){
        return {id:payload.sub} // on auth.service: 
                                // login(userId:number){
                                //     const payload: AuthJwtPayload={sub:userId}
                                //     return this.jwtService.sign(payload)
                                // }
    }
}