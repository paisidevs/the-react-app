import { StyledSystemProps } from '@app/theme';
import { Uppy } from '@uppy/core';
import { DragDrop } from '@uppy/react';
import React from 'react';
import { Wrapper } from './styles';

interface Props extends StyledSystemProps {
  hideActions?: boolean;
  preview?: string;
  onFileAdded?: (file: any) => void;
  onError?: (error: any) => void;
  onComplete?: (result: any) => void;
}

interface State {
  file?: File;
  fileAdded?: boolean;
  preview?: string;
}

const MAX_FILE_SIZE = 20000000; // 20Mb

class Uploader extends React.Component<Props, State> {
  uppy: Uppy;

  constructor(props: Props) {
    super(props);

    this.state = {
      file: undefined,
      fileAdded: false,
      preview: props.preview,
    };

    this.uppy = new Uppy({
      meta: { type: 'avatar' },
      allowMultipleUploads: false,
      restrictions: {
        maxFileSize: MAX_FILE_SIZE,
        maxNumberOfFiles: 1,
        minNumberOfFiles: 1,
        allowedFileTypes: [
          'image/jpeg',
          'image/png',
          'image/bmp',
          'image/tiff',
          'image/gif',
        ],
      },
      autoProceed: true,
      onBeforeFileAdded: (currentFile) =>
        Object.assign({}, currentFile, {
          name: `${Date.now().toString()}.${currentFile.name.split('.').pop()}`,
        }),
    });

    this.onComplete();
    this.onError();
    this.onFileAdded();
  }

  onComplete = () => {
    const { onComplete } = this.props;

    this.uppy.on('complete', (result) => {
      if (onComplete) {
        this.setState({ fileAdded: false });
        onComplete(result);
      }
    });

    this.uppy.on('upload-success', (file, response) => {
      if (onComplete) {
        this.setState({ fileAdded: false });
        onComplete({ file, response });
      }
    });
  };

  onError = () => {
    const { onError } = this.props;

    this.uppy.on('error', (error) => {
      if (onError) {
        this.setState({ preview: this.props.preview, fileAdded: false });
        onError(error);
      }
    });

    this.uppy.on('upload-error', (error) => {
      if (onError) {
        this.setState({ preview: this.props.preview, fileAdded: false });
        onError(error);
      }
    });
  };

  onFileAdded = () => {
    const { onFileAdded } = this.props;

    this.uppy.on('file-added', async (file) => {
      const preview = URL.createObjectURL(file.data);

      this.setState({ preview, file, fileAdded: true });

      if (onFileAdded) {
        onFileAdded(Object.assign(file, { preview }));
      }
    });
  };

  upload = () => {
    this.uppy.upload();
  };

  reset = () => {
    this.uppy.reset();
    this.setState({
      preview: this.props.preview || undefined,
      fileAdded: false,
    });
  };

  componentWillUnmount() {
    this.uppy.close();
  }

  render() {
    return (
      <Wrapper onClick={() => this.reset()} {...this.props}>
        <DragDrop
          uppy={this.uppy}
          // @ts-ignore
          height="100%"
          width="100%"
        />
      </Wrapper>
    );
  }
}

export { Uploader };
