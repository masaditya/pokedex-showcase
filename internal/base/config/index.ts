'use strict';

export const FindAPIBaseURL = (): string =>
  process.env.API_BASE_URL || '';