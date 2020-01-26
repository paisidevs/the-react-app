// re-export all exports from React Testing Library to make it accessible via testing-library
export * from '@testing-library/react';
// override render method
export { customRender as render } from './Provider';
