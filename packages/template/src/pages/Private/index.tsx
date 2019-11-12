import React from 'react';
import { Helmet } from 'react-helmet';
import { RouteComponentProps } from 'react-router-dom';

import { Image, Inner, Page, HorizontalScroller, Modal } from '@app/components';
import { H2, H3 } from '@app/typography';

// import { makeDebugger } from '@app/utils';
// const debug = makeDebugger('Private');

interface IPrivateProps extends RouteComponentProps {}

/**
 * @render react
 * @name Private page
 * @description Private page.
 */

const Private = (props: IPrivateProps) => {
  return (
    <Page>
      <Helmet>
        <title>Private</title>
        <meta
          name="description"
          content="The page requires a user to be authenticated to view."
        />
      </Helmet>
      <Image
        src="http://papers.co/wallpaper/papers.co-bg61-paint-ipad-pro-new-apple-art-purple-32-wallpaper.jpg"
        aspect="4/3"
      />
      <Inner p={2}>
        <H2>Private</H2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          ratione repellat est, quaerat itaque, molestiae quis commodi dolor
          veniam eaque laborum ex dicta, ea totam iste blanditiis! Distinctio,
          officiis non!
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          ratione repellat est, quaerat itaque, molestiae quis commodi dolor
          veniam eaque laborum ex dicta, ea totam iste blanditiis! Distinctio,
          officiis non!
        </p>
        <HorizontalScroller mx={-2}>
          <Image
            src="http://papers.co/wallpaper/papers.co-bg67-ipad-pro-paint-dark-apple-art-32-wallpaper.jpg"
            aspect="4/3"
          />
          <Modal
            defaultOpen={false}
            hasStickyHeader={true}
            trigger={
              <Image
                src="http://papers.co/wallpaper/papers.co-bg72-ipad-paint-weird-apple-art-32-wallpaper.jpg"
                aspect="4/3"
              />
            }
          >
            <Image
              src="http://papers.co/wallpaper/papers.co-bg72-ipad-paint-weird-apple-art-32-wallpaper.jpg"
              aspect="4/3"
              m={-2}
            />
            <H3>Heading</H3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus ratione repellat est, quaerat itaque, molestiae quis
              commodi dolor veniam eaque laborum ex dicta, ea totam iste
              blanditiis! Distinctio, officiis non!
            </p>
          </Modal>
          <Image
            src="http://papers.co/wallpaper/papers.co-bg69-apple-paint-orange-ipad-pro-art-32-wallpaper.jpg"
            aspect="4/3"
          />
        </HorizontalScroller>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          ratione repellat est, quaerat itaque, molestiae quis commodi dolor
          veniam eaque laborum ex dicta, ea totam iste blanditiis! Distinctio,
          officiis non!
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          ratione repellat est, quaerat itaque, molestiae quis commodi dolor
          veniam eaque laborum ex dicta, ea totam iste blanditiis! Distinctio,
          officiis non!
        </p>
      </Inner>
    </Page>
  );
};

export default Private;