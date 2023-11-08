import UserNetwork from './user';
import { Application } from 'express';
import Routes from "../utils/constants/routes.json";

function routes(server: Application){
    server.use(Routes.user, UserNetwork);
}
export default routes;