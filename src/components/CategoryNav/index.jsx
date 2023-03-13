import React, { useCallback, useState } from "react";

import * as S from "./index.styled";

function CategoryNav() {
  const [filterState, setFilterState] = useState({
    passingTags: {
      hats: false,
      outers: false,
      tops: false,
      bags: false,
      pants: false,
      shoes: false,
      basic: false,
    },
  });

  const handleFilter = (e) => {
    const category = e.target.id;

    setFilterState({
      passingTags: { ...filterState.passingTags, [category]: !filterState.passingTags[category] },
    });
  };

  const filteredCollect = useCallback(() => {
    const clicked = [];
    const now = filterState.passingTags;

    for (let i in now) {
      if (now[i]) {
        clicked.push(i);
      }
    }

    return clicked;
  }, [filterState.passingTags]);

  const result = filteredCollect();

  return (
    <S.Container>
      <S.StyledButton variant="outlined" onClick={handleFilter}>
        모자
      </S.StyledButton>
      <S.StyledButton variant="outlined" onClick={handleFilter}>
        상의
      </S.StyledButton>
      <S.StyledButton variant="outlined" onClick={handleFilter}>
        아우터
      </S.StyledButton>
      <S.StyledButton variant="outlined" onClick={handleFilter}>
        가방
      </S.StyledButton>
      <S.StyledButton variant="outlined" onClick={handleFilter}>
        바지
      </S.StyledButton>
      <S.StyledButton variant="outlined" onClick={handleFilter}>
        신발
      </S.StyledButton>
      <S.StyledButton variant="outlined" onClick={handleFilter}>
        베이직
      </S.StyledButton>
    </S.Container>
  );
}
export default CategoryNav;
