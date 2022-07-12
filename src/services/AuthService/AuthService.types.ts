import { Record, Static, String } from 'runtypes';

export const AuthDataSchema = Record({
  email: String,
  sessionId: String,
});

export type AuthData = Static<typeof AuthDataSchema>;
