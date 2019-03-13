import { Request, Response, NextFunction } from 'express';
import { ResponseTrait } from '../Traits';
declare class BaseAuthenticateMiddleware extends ResponseTrait {
    constructor();
    static handle(req: Request, res: Response, next: NextFunction): any;
}
export default BaseAuthenticateMiddleware;