import { FC  } from "react";

import cl from './MyButtonSecond.module.scss';

type Props = {
    children: string,
}

const MyButtonSecond: FC<Props> = ({children}: Props) => {

    return (
        <div className={cl.button}>
            <span>{children}</span>
        </div>
    )
}

export default MyButtonSecond;