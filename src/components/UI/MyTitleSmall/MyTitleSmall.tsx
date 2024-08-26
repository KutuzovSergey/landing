import { FC } from "react";

import cl from './MyTitleSmall.module.scss';

type Props = {
    children: string,
}

const MyTitleSmall: FC<Props> = ({children}: Props) => {

    return (
        <div className={cl.title}>
            <span className={cl.title__text}>
            {children}
            </span>
        </div>
    )
}

export default MyTitleSmall;