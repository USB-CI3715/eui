/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import { HTMLAttributes } from 'react';
import { useEuiMemoizedStyles, UseEuiTheme } from '@elastic/eui';
import { css } from '@emotion/react';

const getOrderedListStyles = ({ euiTheme }: UseEuiTheme) => css`
  margin-inline-start: ${euiTheme.size.l};
  list-style: decimal;
`;

export const OrderedList = ({ children, ...restProps }: HTMLAttributes<HTMLUListElement>) => {
  const styles = useEuiMemoizedStyles(getOrderedListStyles);

  return (
    <ol {...restProps} css={styles}>
      {children}
    </ol>
  );
};
