import { FC  } from "react";

import cl from './MyButtonFirst.module.scss';

type Props = {
    children: string,
}

const MyButtonFirst: FC<Props> = ({children}: Props) => {

    return (
        <div className={cl.buttonSpan}>
            <span>{children}</span>
        </div>
    )
}

export default MyButtonFirst;