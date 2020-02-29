import { styled } from '@elandamor/tra-theme';
import React, { forwardRef, useEffect, useState } from 'react';
import { Box } from '../Box';

const Wrapper = styled(Box)<{ rounded?: boolean }>`
  background: ${({ theme }) =>
    theme.isDark
      ? theme.colors.opacity.whites[2]
      : theme.colors.opacity.blacks[2]};
  border-radius: ${({ rounded }) => rounded && '100%'};
  overflow: hidden;
  position: relative;

  img {
    left: 0;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
  }
`;

export const useHasImageLoaded = ({ src, onLoad, onError }: any) => {
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const image = new window.Image();
    image.src = src;

    image.onload = (event) => {
      setHasLoaded(true);
      onLoad && onLoad(event);
    };

    image.onerror = (event) => {
      setHasLoaded(false);
      onError && onError(event);
    };
  }, [src, onLoad, onError]);

  return hasLoaded;
};

const NativeImage = forwardRef(
  ({ htmlWidth, htmlHeight, alt, size, ...props }: any, ref) => (
    <img
      width={htmlWidth || size}
      height={htmlHeight || size}
      ref={ref}
      alt={alt}
      {...props}
    />
  ),
);

export const Image = forwardRef(
  (
    {
      src,
      fallbackSrc,
      onError,
      onLoad,
      ignoreFallback,
      aspect = 16 / 10,
      rounded,
      size,
      ...props
    }: any,
    ref,
  ) => {
    const hasLoaded = useHasImageLoaded({ src, onLoad, onError });
    let imageProps;

    if (ignoreFallback) {
      imageProps = { src, onLoad, onError };
    } else {
      imageProps = { src: hasLoaded ? src : fallbackSrc };
    }
    return (
      <Box size={size}>
        <Wrapper aspect={aspect} rounded={rounded}>
          <Box as={NativeImage} ref={ref} {...imageProps} {...props} />
        </Wrapper>
      </Box>
    );
  },
);
