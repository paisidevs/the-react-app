import { ThemeProvider } from '@elandamor/tra-theme';
import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { Button, IButtonProps } from './index';

const setup = (props?: IButtonProps) => {
  return render(
    <ThemeProvider>
      <Button {...props} />
    </ThemeProvider>,
  );
};

describe('Button', () => {
  it('renders without crashing', () => {
    const { container } = setup();
    expect(container.firstChild?.nodeName.toLowerCase()).toBe('button');
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders a text button', () => {
    const { getByText } = setup();
    expect(getByText('Button')).toBeTruthy();
  });

  it('handles onClick event', () => {
    function Counter() {
      const [count, setCount] = React.useState(0);

      const props = {
        onClick: () => setCount(count + 1),
        text: count.toString(),
      };

      return <Button data-testid="button" {...props} />;
    }

    const { getByTestId } = render(
      <ThemeProvider>
        <Counter />
      </ThemeProvider>,
    );

    const buttonNode = getByTestId('button');
    fireEvent.click(buttonNode);

    expect(buttonNode).toHaveTextContent('1');
  });
});
