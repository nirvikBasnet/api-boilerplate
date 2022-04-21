import 'dotenv/config';
import 'module-alias/register'; //register module alias
import validateEnv from '@/utils/validateEnv';
import App from './app';

validateEnv();

const app = new App([], Number(process.env.PORT));
app.listen();
