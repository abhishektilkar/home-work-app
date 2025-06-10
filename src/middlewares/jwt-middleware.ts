import { Injectable, NestMiddleware } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class JwtMiddleware implements NestMiddleware {
    constructor(private jwtService: JwtService) {}

    use(req: any, res: any, next: (error?: any) => void) {
        const accessToken = req.headers['authorization']?.replace('Bearer', '').trim();
        if (!accessToken) return res.status(401).json({ message: 'No accessToken provided' });
        try {
            const user = this.jwtService.verify(accessToken);
            req.user = user;
            next();
        } catch (e) {
            return res.status(401).json({ message: 'Invalid AccessToken' });
        }
    }
}