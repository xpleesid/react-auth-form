import React from 'react';
import { Record, String } from 'runtypes';
import { Text } from '@eo-locale/react';

const errorWithResponse = Record({
  response: Record({
    data: Record({
      errorCode: String,
    }),
  }),
});

export const extractMessageFromError = (error: unknown) => {
  const code = errorWithResponse.guard(error) ? error.response.data.errorCode : '';

  switch (code) {
    case 'E005':
      return <Text id="errors.unexpectedError" />;
    case 'E078':
      return <Text id="errors.invalidCredentials" />;
    case 'E234':
      return <Text id="errors.userAlreadyExists" />;
    default:
      return <Text id="errors.unknownError" />;
  }
};
