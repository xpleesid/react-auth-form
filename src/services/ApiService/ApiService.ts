import { setupWorker } from 'msw';
import { loginHandler } from './loginHandler';
import { resetPasswordHandler } from './resetPasswordHandler';
import { signupHandler } from './signupHandler';

const worker = setupWorker(signupHandler, loginHandler, resetPasswordHandler);

worker.start();
