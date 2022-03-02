import React, { useState, useEffect } from 'react';
import { formData } from '../formData';

const PersonalInformation = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [mail, setMail] = useState('');
    const [phoneNumber, setPhoneNumer] = useState('');

    const checkPhoneNumber = () => {
        if (phoneNumber[0] === '+' && phoneNumber.length === 13) {
            let ph = '';
            for (let i = 0; i < phoneNumber.length; i++) {
                ph += phoneNumber[i];
                if (i > 0) {
                    if (i === 3) ph += ' ';
                    if (i === 6) ph += ' ';
                    if (i === 8) ph += ' ';
                    if (i === 10) ph += ' ';

                    setPhoneNumer(ph);
                }
            }
        }
        if (!phoneNumber.length) return true;
        if (phoneNumber.length && phoneNumber.includes('+995')) return true;
        return false;
    }

    const setData = () => {
        checkPhoneNumber();
        formData.first_name = firstName;
        formData.last_name = lastName;
        formData.email = mail;
        formData.phone = phoneNumber;
    }

    useEffect(() => {
        window.addEventListener('click', setData);
        return () => {
            window.removeEventListener('click', setData);
        }
    }, [setData]);

    return (
        <div className="form-app">
            <input type="text" className={firstName.length >= 2 ? 'valid-text' : ''} value={firstName} onChange={e => setFirstName(e.target.value)} placeholder='First Name' required />
            <input type="text" className={lastName.length >= 2 ? 'valid-text' : ''} value={lastName} onChange={e => setLastName(e.target.value)} placeholder='Last Name' required />
            <input type="email" className={mail.includes('@') ? 'valid-text' : ''} value={mail} onChange={e => setMail(e.target.value)} placeholder='E Mail' required />
            <input type="tel" maxLength='17' value={phoneNumber} onChange={e => setPhoneNumer(e.target.value)} placeholder='+995 5__ __ __ __' pattern='[+]{1}[0-9]{3} [0-9]{3} [0-9]{2} [0-9]{2} [0-9]{2}' />
        </div>
    );
}

export default PersonalInformation;