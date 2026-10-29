import { module } from '@prisma/composer';
import webService from './src/service.ts';
// This is the already-connected Prisma project/module name.
export default module('sms', ({ provision }) => { provision(webService); });
