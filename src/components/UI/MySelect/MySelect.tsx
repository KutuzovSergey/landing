import React, { FC } from "react";
import { listModelsSelectType } from "../../../type/typesMain.ts";

import cl from './MySelect.module.scss';

type Props = {
    values: listModelsSelectType,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    name?: string,
    id?: string,
}

const MySelect: FC<Props> = (props: Props) => {
    return (
        <select name={props.name} key={props.id} id={props.id} className={cl.mySelect}>
            <option value="" className={cl.mySelect__main}>Модель</option>
            {
                props.values.map(val =>
                    <option value={val.value} key={val.id}>{val.name}</option>
                )
            }
        </select>
    )
}

export default MySelect;