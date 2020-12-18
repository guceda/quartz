import React, { FC } from 'react';
import { Box, Flex } from 'rebass';

import circleStyles from './commit-legend.styles';
import Label from '../../label';
import Labeling from '../../typography/labeling';

const graphColors = ['#21B182', '#EB5757', '#F2994A'];

export interface CommitLegendValue {
  date: number;
  added: number;
  removed: number;
  modified: number;
}

export interface CommitLegendProps {
  values: CommitLegendValue | null;
  groupKey: string;
  keys: string[];
}

const CommitLegend: FC<CommitLegendProps> = ({
  values,
  groupKey,
  keys,
  ...props
}: CommitLegendProps) => (
  <Flex {...props} mt="10px" flexDirection="column">
    <Flex flexDirection="row">
      {keys.map((key, idx) => (
        <Flex key={`legend-${key}`} ml="12px">
          <Box mr="5px" mt="3px" sx={circleStyles(graphColors[idx])} />
          <Labeling>{key}</Labeling>
          <Label ml="5px">{values ? values[key] : ''}</Label>
        </Flex>
      ))}
    </Flex>
    <Flex
      key={`legend-${groupKey}`}
      mt="20px"
      ml="10px"
      justifyContent="space-between"
    >
      <Labeling>{groupKey}</Labeling>
      <Label mr="5px">{values ? values[groupKey] : ''}</Label>
    </Flex>
  </Flex>
);

export default CommitLegend;
