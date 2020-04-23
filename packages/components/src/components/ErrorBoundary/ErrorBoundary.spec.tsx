// ErrorBoundary.spec.tsx
import React from 'react';
import { getElementByText, render } from '../../utilities/testing';
import { ErrorBoundary } from './index';

class ComponentThatWillFail extends React.Component {
  componentDidMount() {
    throw new Error('This component failed on purpose...');
  }

  render() {
    return null;
  }
}

describe('Error Boundary', () => {
  it('renders default ErrorBoundary', () => {
    spyOn(console, 'error');

    const { getByText } = render(
      <ErrorBoundary>
        <ComponentThatWillFail />
      </ErrorBoundary>,
    );

    getElementByText('h2', 'Oops!', getByText);
    getElementByText('span', 'An unexpected error has occured.', getByText);
  });

  it('renders ErrorBoundary with custom fallback', () => {
    spyOn(console, 'error');

    const { getByText } = render(
      <ErrorBoundary template={<h1>Oops! Something went wrong.</h1>}>
        <ComponentThatWillFail />
      </ErrorBoundary>,
    );

    getElementByText('h1', 'Oops! Something went wrong.', getByText);
  });
});
