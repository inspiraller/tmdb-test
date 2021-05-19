import React from 'react';

import { Pagination, Icon } from 'semantic-ui-react';
import { ContextMovies } from '../_ContextMovies';

const MoviesPagination = () => {
  const { movies, maxPerPage, page, setPage } = React.useContext(ContextMovies);
  const totalPages = Math.ceil(movies.length / maxPerPage);

  const handleClick = (_: any, opt: any) => {
    // TODO - add types.
    setPage(opt.activePage);
  };

  return (
    <Pagination
      boundaryRange={0}
      defaultActivePage={page}
      ellipsisItem={{ content: <Icon name="ellipsis horizontal" />, icon: true }}
      firstItem={null}
      lastItem={null}
      siblingRange={1}
      totalPages={totalPages}
      onPageChange={handleClick}
    />
  );
};

export default MoviesPagination;
