function useMedia(queries: any, values: any, defaultValue: any) {
  // Array containing a media query list for each query
  const mediaQueryLists = queries.map((q: any) => window.matchMedia(q));

  // Function that gets value based on matching media query
  const getValue = () => {
    // Get index of first media query that matches
    const index = mediaQueryLists.findIndex((mql: any) => mql.matches);
    // Return related value or defaultValue if none
    return typeof values[index] !== 'undefined' ? values[index] : defaultValue;
  };

  // State and setter for matched value
  let value = getValue();

  // Set a listener for each media query with above handler as callback.
  mediaQueryLists.forEach((mql: any) => mql.addListener(getValue));

  return value;
}

export default useMedia;
