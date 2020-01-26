import { Flex, H2, H3 } from '@app/components';
import { throttle } from '@app/utilities';
import React, { FC, useState } from 'react';
import { ChevronLeft } from 'react-feather';
import { useHistory } from 'react-router-dom';

interface Breadcrumb {
  id: string;
  label: string;
}

export const BreadcrumbsContext = React.createContext({
  breadcrumbs: [] as Breadcrumb[],
  currentBreadcrumb: {} as Breadcrumb,
  previousBreadcrumb: {} as Breadcrumb | undefined,
  addCrumb: (_breadcrumb: Breadcrumb) => {},
  removeCrumb: (_breadcrumb: Breadcrumb) => {},
});

export const Breadcrumbs: FC<{
  blacklist?: string[];
  initialCrumbs?: Breadcrumb[];
}> = ({ blacklist = [], children, initialCrumbs = [] }) => {
  const history = useHistory();
  const [breadcrumbs, setBreadcrumbs] = useState<Breadcrumb[]>(initialCrumbs);

  const hasBreadcrumbs = breadcrumbs.length > 0;
  const currentBreadcrumb = breadcrumbs[breadcrumbs.length - 1];
  const previousBreadcrumb = hasBreadcrumbs
    ? breadcrumbs[breadcrumbs.length - 2]
    : undefined;

  const addCrumb = throttle((breadcrumb: Breadcrumb) => {
    const newBreadcrumbs = breadcrumbs.concat(breadcrumb);
    setBreadcrumbs(newBreadcrumbs);
  });

  const removeCrumb = throttle((breadcrumb: Breadcrumb) => {
    const newBreadcrumbs = breadcrumbs.filter(
      (crumb: Breadcrumb) => crumb.id !== breadcrumb.id,
    );
    setBreadcrumbs(newBreadcrumbs);
  });

  const renderCrumbs = () => (
    <React.Fragment>
      {previousBreadcrumb && (
        <Flex
          alignItems="center"
          height="40px"
          onClick={() => history.goBack()}
        >
          <ChevronLeft />
          <H2 data-testid="page-title" fontSize={2} margin={0}>
            {previousBreadcrumb.label?.toUpperCase()}
          </H2>
        </Flex>
      )}

      {currentBreadcrumb && !blacklist.includes(currentBreadcrumb.label) && (
        <H3 data-testid="page-subtitle" margin={0}>
          {currentBreadcrumb.label}
        </H3>
      )}
    </React.Fragment>
  );

  return (
    <BreadcrumbsContext.Provider
      value={{
        breadcrumbs,
        currentBreadcrumb,
        previousBreadcrumb,
        addCrumb,
        removeCrumb,
      }}
    >
      {renderCrumbs()}
      {children}
    </BreadcrumbsContext.Provider>
  );
};
