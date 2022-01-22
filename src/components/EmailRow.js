import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { selectMail } from '../features/mailSlice';
import { Checkbox, IconButton } from '@mui/material';
import './EmailRow.css';

function EmailRow({ id, title, subject, description, time }) {
    const history = useHistory();

    const dispatch = useDispatch();
    const openMail = () => {
        dispatch(selectMail({
            id, 
            title, 
            subject, 
            description, 
            time,
        }));
        history.push("/mail");
    };

    return (
        <div onClick={openMail} className="emailRow">
            <div className="emailRow__options">
                <Checkbox className="emailRow__checkbox" />
                <IconButton className="emailRow__star"><ion-icon name="star-outline"></ion-icon></IconButton>
            </div>

            <h3 className="emailRow__title">
                {title}
            </h3>

            <div className="emailRow__message">
                <h4>
                    {subject}
                    <span className="emailRow__description">
                        {" - "}
                        {description}
                    </span>
                </h4>
            </div>

            <p className="emailRow__time">
                {time}
            </p>
        </div>
    );
}

export default EmailRow;
