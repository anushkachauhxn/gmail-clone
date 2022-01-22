import React from 'react';
import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { closeSendMessage } from '../features/mailSlice';
import './SendMail.css';
import firebase from 'firebase';
import { db } from '../firebase';

function SendMail() {
    const dispatch = useDispatch();

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (formData) => {
        db.collection("emails").add({
            to: formData.to,
            subject: formData.subject,
            message: formData.message,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });

        dispatch(closeSendMessage());
    };

    return (
        <div className="sendMail">
            <div className="sendMail__header">
                <h3>New Message</h3>
                <ion-icon 
                    onClick={() => dispatch(closeSendMessage())} 
                    className="sendMail__close" name="close-sharp"></ion-icon>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input 
                    name="to" 
                    placeholder="To" 
                    type="email" 
                    {...register("to", { required: true })}
                />
                
                <input 
                    name="subject" 
                    placeholder="Subject" 
                    type="text" 
                    {...register("subject", { required: true })}
                />
                
                <textarea 
                    name="message" 
                    placeholder="Message" 
                    {...register("message", { required: true })}
                ></textarea>

                {(errors.to || errors.subject || errors.message) && 
                    <p className="sendMail__error">All fields are required</p>}
                
                <div className="sendMail__options">
                    <Button 
                        className="sendMail__send" 
                        variant="contained" 
                        color="primary" 
                        type="submit"
                    >
                        Send
                    </Button>
                </div>
            </form>
        </div>
    );
}

export default SendMail;
