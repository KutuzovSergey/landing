import { FC } from "react";
import MyButton from "../UI/MyButton/MyButton.tsx";
import MySelect from "../UI/MySelect/MySelect.tsx";
import { useSearch } from "../../hooks/useSearch.ts";

import "../../styles/buildComponentsStyles/modelSearch.scss";

const ModelSearch: FC = () => {
  const [listModels] = useSearch();

  return (
    <div className="search">
        <div className="search__title">
            <span>Поиск МОДЕЛИ</span>
        </div>

        <div className="search__selection-field">
            <MySelect values={listModels} />
        </div>

        <div className="search__button">
            <MyButton>Поиск</MyButton>
        </div>
    </div>
  );
};

export default ModelSearch;
