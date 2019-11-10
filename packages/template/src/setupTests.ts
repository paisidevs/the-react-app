// this adds jest-dom's custom assertions
import '@testing-library/jest-dom';
import 'jest-canvas-mock';
import 'jest-styled-components';
import 'whatwg-fetch';

window.matchMedia = jest.fn().mockImplementation((query) => {
  return {
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
  };
});

// @ts-ignore - Type 'IntersectionObserver' is missing the following properties from type 'IntersectionObserver': root, rootMargin, thresholds, takeRecords
window.IntersectionObserver = class IntersectionObserver {
  constructor() {}

  disconnect() {
    return null;
  }

  observe() {
    return null;
  }

  unobserve() {
    return null;
  }
};
