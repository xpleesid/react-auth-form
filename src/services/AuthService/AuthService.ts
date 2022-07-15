import { AuthData, AuthDataSchema } from './AuthService.types';

// for simplicity we're gonna use a bunch of simple functions as "service" and localStorage as "token" storage
// while reading code below, keep a few caveats in mind:

// 1. It's far away from production-ready solution. In real life apps we'll have to create a separated token service, add role parsing,
// setup role-based display logic (like CASL), probably use exterbal libraries (like Keycloak), set Bearer header for our custom Axios
// instance, etc. But lack of stated features here is intentional since this project is being used for demonstration purposes only.

// 2. Function-based approach looks good, but lacks scalability. For real-life apps i'd prefer classes with DI (e.g. inversify)

const AUTH_FIELD = 'AUTH_FIELD';

export const loginUser = (email: string, sessionId: string): void => {
  const authData: AuthData = {
    email,
    sessionId,
  };

  localStorage.setItem(AUTH_FIELD, JSON.stringify(authData));
  window.dispatchEvent(new Event('storage'));
};

export const getLoggedInUserEmailOrNull = (): string | null => {
  const authData = localStorage.getItem(AUTH_FIELD);

  if (!authData) {
    return null;
  }

  try {
    const parsedData = JSON.parse(authData);

    if (!AuthDataSchema.guard(parsedData)) return null;

    return parsedData.email;
  } catch {
    return null;
  }
};

export const logoutUser = (): void => {
  localStorage.removeItem(AUTH_FIELD);
  window.dispatchEvent(new Event('storage'));
};

export const isLoggedIn = (): boolean => {
  return getLoggedInUserEmailOrNull() !== null;
};
