import { Accordion, Box, Button, Flex, Input } from '@app/components';
import { FieldArray, useFormikContext } from 'formik';
import React from 'react';
import { MinusCircle } from 'react-feather';
import Track from '../Track';

/**
 * @render react
 * @name Tracks component
 * @description Tracks component.
 * @example
 * <Tracks />
 */

const Tracks = () => {
  const { values } = useFormikContext();

  return (
    <Box>
      <FieldArray
        name="tracks"
        render={({ push, remove }) => (
          <Box overflow="hidden">
            {values.tracks.map((track: any, index: number) => {
              return (
                <Accordion
                  key={`tracks.${index}`}
                  headerContent={
                    <Flex alignItems="center" marginBottom={1} width="100%">
                      <Track
                        data={{
                          id: `id_${index}`,
                          name: track.name,
                          artists: track.artist
                            .split(',')
                            .filter(
                              (artist: string) => artist.trim().length > 0,
                            ),
                          featuring: track.featuring
                            .split(',')
                            .filter(
                              (artist: string) => artist.trim().length > 0,
                            ),
                          trackNumber: index + 1,
                        }}
                      />
                      <Flex onClick={() => remove(index)} paddingLeft={2}>
                        <MinusCircle />
                      </Flex>
                    </Flex>
                  }
                >
                  <Box>
                    <Input name={`tracks.${index}.name`} label="Title" />
                    <Input name={`tracks.${index}.artist`} label="Artist" />
                    <Input
                      name={`tracks.${index}.featuring`}
                      label="Featuring"
                    />
                  </Box>
                </Accordion>
              );
            })}
            <Button
              type="button"
              onClick={() => push({ name: '', artist: '', featuring: '' })}
              text="Add Track"
            />
          </Box>
        )}
      />
    </Box>
  );
};

export default Tracks;
