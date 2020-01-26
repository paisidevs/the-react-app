import { Box, Input, Select } from '@app/components';
import React from 'react';
import { genres, releaseTypes } from '../../../../data';

/**
 * @render react
 * @name General component
 * @description General component.
 * @example
 * <General />
 */

const General = () => (
  <Box>
    <Input name="name" label="Name" />
    <Select label="Artist" name="artist" options={[]} />
    <Select label="Release Type" name="releaseType" options={releaseTypes} />
    <Select label="Genre" name="genre" options={genres} />
  </Box>
);

export default General;
