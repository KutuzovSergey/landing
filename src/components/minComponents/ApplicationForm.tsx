import { FC } from 'react';
import MyButton from '../UI/MyButton/MyButton.tsx';
import MyInput from '../UI/MyInput/MyInput.tsx';
import { useSendApplication } from '../../hooks/useSendApplication.ts';

import '../../styles/minComponentsStyles/applicationForm.scss';

const ApplicationForm: FC = () => {
    const [inputValue, changeInputName, changeInputPhone] = useSendApplication();

    return (
        <form className="application-form">
            <div className="application-form__bloсk">
                <MyInput
                    type='text'
                    name='name'
                    value={inputValue.inputName}
                    placeholder='Имя'
                    onChange={changeInputName}
                />
            </div>
            <div className="application-form__bloсk">
                <MyInput
                    type='tel'
                    name='name'
                    value={inputValue.inputPhone}
                    placeholder='+7 --- --- -- --'
                    onChange={changeInputPhone}
                />
            </div>
            <div className="application-form__bloсk">
                <MyButton>Перезвонить мне</MyButton>
            </div>
        </form>
    )
}

export default ApplicationForm;