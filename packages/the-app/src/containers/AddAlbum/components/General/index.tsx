import { Box, Image, Input, Select } from '@app/components';
import { useFormikContext } from 'formik';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { SingleDatePicker } from '../../../../components';
import { Uploader } from '../../../../components/Uploader';
import { genres, releaseTypes } from '../../../../data';

/**
 * @render react
 * @name General component
 * @description General component.
 * @example
 * <General />
 */

const General = () => {
  const history = useHistory();
  const { setFieldValue, values } = useFormikContext();
  const { cover } = values as any;

  history.listen(() => {
    console.log('All I do is listen!!!');
  });

  return (
    <Box>
      <Box mb={2}>
        <Image src={cover} aspect={1} />
        <Box position="absolute" left={0} top={0} height="100%" width="100%">
          <Uploader
            onFileAdded={({ preview }) => setFieldValue('cover', preview)}
            height="100%"
            width="100%"
          />
        </Box>
      </Box>
      <Input label="Name" name="name" />
      <Select label="Artist" name="artist" options={[]} />
      <SingleDatePicker label="Release Date" name="releaseDate" />
      <Select label="Release Type" name="releaseType" options={releaseTypes} />
      <Select label="Genre" name="genre" options={genres} />
    </Box>
  );
};

export default General;
