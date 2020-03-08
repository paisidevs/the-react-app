import _debug from 'debug';
import { isNil } from './isNil';

const hasDocument = typeof document === 'object' && document !== null;
const hasWindow =
  typeof window === 'object' && window !== null && window.self === window;

const isBrowser: Function = () =>
  // @ts-ignore - Property 'override' does not exist on type 'Function'
  !isNil(isBrowser.override) ? isBrowser.override : hasDocument && hasWindow;

if (isBrowser() && process.env.NODE_ENV !== 'production') {
  /* Heads Up!
   * https://github.com/visionmedia/debug/pull/331
   *
   * debug now clears storage on load, grab the debug settings before require('debug').
   * try/catch here as Safari throws on localStorage access in private mode or with cookies disabled.
   */

  let DEBUG;

  try {
    DEBUG = window.localStorage.debug;
  } catch (e) {
    /* eslint-disable no-console */
    console.error('reactBoilerplate could not enable debug.');
    console.error(e);
    /* eslint-enable no-console */
  }

  // enable what ever settings we got from storage
  _debug.enable(DEBUG);
}

/**
 * Create a namespaced logger function.
 * @param {String} namespace Usually a component name.
 * @example
 * import { makeLogger } from 'app/lib'
 * const debug = makeLogger('namespace')
 *
 * logger('Some message')
 * @returns {Function}
 */
export const makeLogger = (namespace: string) => _debug(`${namespace}`);

/**
 * Default logger, simple log.
 * @example
 * import { logger } from 'app/lib'
 * logger('Some message')
 */
// export const logger = makeLogger('log');
export const logger = (message?: any, ...optionalParams: any[]): void => {
  if (process.env.NODE_ENV !== 'prodcution') {
    console.log(message, ...optionalParams);
  }
};
