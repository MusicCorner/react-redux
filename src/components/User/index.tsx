import React from 'react';

import { ApiUser } from '@common/types/apiTypes';

export const User: React.FC<ApiUser> = ({ id, name }) => (
  <div>
    <div>ID: {id}</div>
    <div>Name: {name}</div>
  </div>
);
