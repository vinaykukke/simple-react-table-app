import React from 'react';
import Button from 'Components/Button';
import * as S from './index.styles';

const SearchBox = (props: any) => {
  return <S.SearchboxContainer>
    <S.Input
      type='text'
      placeholder='Search here'
      {...props}
    />
    <div>This search is case sensitive</div>
    <div>
      NOTE: The pagination is actually working. But since there are only 5 unique items and the other 25 are repeated
      it seems like the pagination does not work. You can test this out by changing the `defaultPageSize` prop in
      `src/client/components/SearchBox/index.tsx` to an odd number like 7. OR. even just select show `20 rows` and click the next button.
    </div>
  </S.SearchboxContainer>;
};

export default SearchBox;
