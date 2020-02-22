import {
  Accordion,
  AccordionGroup,
  AccordionHeader,
  AccordionPanel,
  Box,
  Button,
  Flex,
  Input,
  Select,
} from '@elandamor/tra-components';
import { FieldArray, useFormikContext } from 'formik';
import React from 'react';
import { MinusCircle } from 'react-feather';
import { Track } from '../../../../components';
import { useArtistsQuery } from '../../../../generated/graphql';

/**
 * Formats select artists to DB compliant object[]
 */
const formatArtistsForDB = (artists: any[]) => {
  if (!artists) return [];

  const dbCompliantArtists =
    (artists.length > 0 &&
      artists.map((artist) => ({
        name: artist.label,
        ...(!artist.__isNew__ && { id: artist.value }),
      }))) ||
    [];

  return dbCompliantArtists;
};

/**
 * @render react
 * @name Tracks component
 * @description Tracks component.
 * @example
 * <Tracks />
 */

const Tracks = () => {
  const { values }: any = useFormikContext();

  const { data: artistsData } = useArtistsQuery();
  const artists = artistsData?.artists?.edges.map(({ node }: any) => ({
    label: node.name,
    value: node.id,
  }));

  return (
    <Box marginBottom={2}>
      <FieldArray
        name="tracks"
        render={({ push, remove }) => (
          <React.Fragment>
            <AccordionGroup>
              {values.tracks.map((track: any, index: number) => (
                <Accordion key={`tracks.${index}`}>
                  <AccordionHeader>
                    <Track
                      hideTrackNumber={false}
                      data={{
                        id: `id_${index}`,
                        name: track.name,
                        artists: formatArtistsForDB(track.artists),
                        featuring: formatArtistsForDB(track.featuring),
                        trackNumber: index + 1,
                      }}
                    />
                  </AccordionHeader>
                  <Box
                    height="56px"
                    justifyContent="center"
                    position="absolute"
                    right={0}
                    top={0}
                  >
                    <Flex onClick={() => remove(index)} paddingLeft={2}>
                      <MinusCircle />
                    </Flex>
                  </Box>
                  <AccordionPanel>
                    <Box>
                      <Input name={`tracks.${index}.name`} label="Title" />
                      <Select
                        isMulti
                        label="Artists"
                        name={`tracks.${index}.artists`}
                        options={artists}
                      />
                      <Select
                        isMulti
                        label="Featuring"
                        name={`tracks.${index}.featuring`}
                        options={artists}
                      />
                    </Box>
                  </AccordionPanel>
                </Accordion>
              ))}
            </AccordionGroup>
            <Button
              variant="outlined"
              type="button"
              onClick={() =>
                push({ name: '', artists: undefined, featuring: '' })
              }
              text="Add Track"
            />
          </React.Fragment>
        )}
      />
    </Box>
  );
};

export default Tracks;
