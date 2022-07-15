import { setupWorker } from 'msw';
import { loginHandler } from './loginHandler';
import { recoverPasswordHandler } from './recoverPasswordHandler';
import { signupHandler } from './signupHandler';

const worker = setupWorker(signupHandler, loginHandler, recoverPasswordHandler);

worker.start();
