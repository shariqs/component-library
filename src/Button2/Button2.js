/* eslint-disable no-nested-ternary */

import React from 'react';
import { Button } from 'antd';

export const Button2 = ({ primary, backgroundColor, size, label, onClick, ...props }) => {
  return <Button onClick={onClick}>{label}</Button>;
};
