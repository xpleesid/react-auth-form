import { AUTH_STORAGE_KEY } from 'constants/auth';
import { getLoggedInUserEmailOrNull, loginUser, logoutUser } from './AuthService';

describe('AuthService', () => {
  const FAKE_EMAIL = 'FAKE_EMAIL';
  const FAKE_SESSION = 'FAKE_SESSION';

  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe('loginUser', () => {
    it('should save provided data to localStorage', () => {
      const spy = jest.spyOn(Object.getPrototypeOf(window.localStorage), 'setItem').mockImplementation();

      loginUser(FAKE_EMAIL, FAKE_SESSION);

      expect(spy).toHaveBeenCalledWith(
        AUTH_STORAGE_KEY,
        JSON.stringify({ email: FAKE_EMAIL, sessionId: FAKE_SESSION })
      );
    });
  });

  describe('getLoggedInUserEmailOrNull', () => {
    it('should return saved data', () => {
      jest.spyOn(Object.getPrototypeOf(window.localStorage), 'getItem').mockImplementation(() =>
        JSON.stringify({
          email: FAKE_EMAIL,
          sessionId: '',
        })
      );

      const email = getLoggedInUserEmailOrNull();

      expect(email).toBe(FAKE_EMAIL);
    });

    it('should return null if nothing is stored in localStorage', () => {
      jest.spyOn(Object.getPrototypeOf(window.localStorage), 'getItem').mockImplementation(() => null);

      const email = getLoggedInUserEmailOrNull();

      expect(email).toBe(null);
    });

    it('should return null if stored data is invalid', () => {
      jest.spyOn(Object.getPrototypeOf(window.localStorage), 'getItem').mockImplementation(() => '(INVALID JSON}}');

      const email = getLoggedInUserEmailOrNull();

      expect(email).toBe(null);
    });

    it('should return null if stored data is not in correct format', () => {
      jest.spyOn(Object.getPrototypeOf(window.localStorage), 'getItem').mockImplementation(() =>
        JSON.stringify({
          hello: 'world',
        })
      );

      const email = getLoggedInUserEmailOrNull();

      expect(email).toBe(null);
    });
  });

  describe('logoutUser', () => {
    it('should remove iten from localStorage', () => {
      const spy = jest.spyOn(Object.getPrototypeOf(window.localStorage), 'removeItem').mockImplementation();

      logoutUser();

      expect(spy).toHaveBeenCalledWith(AUTH_STORAGE_KEY);
    });
  });
});
