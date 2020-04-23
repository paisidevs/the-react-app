import React from 'react';
import { fireEvent, render, wait } from '../../utilities/testing';
import { Button } from '../Button';
import { Input } from '../Input';
import { Form } from './index';

const handleSubmit = jest.fn();

const setup = () => {
  return render(
    <Form name="test" onSubmit={handleSubmit} initialValues={{ text: '' }}>
      <Input label="Text" name="text" />
      <Button type="submit" text="Submit" />
    </Form>,
  );
};

describe('Form', () => {
  it('renders without crashing', () => {
    const { container } = setup();
    expect(container).toBeTruthy();
    expect(container.firstChild?.nodeName.toLowerCase()).toBe('form');
  });

  it('handles onSubmit event', async () => {
    const { container, getByLabelText } = setup();

    const form = container.querySelector('form') as HTMLFormElement;
    const textNode = getByLabelText(/Text/i) as HTMLInputElement;

    expect(textNode).toHaveValue('');
    await wait(() => {
      fireEvent.change(textNode, { target: { value: 'Hello' } });
    });
    expect(textNode).toHaveValue('Hello');

    await wait(() => {
      fireEvent.submit(form);
    });
    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });
});
