import React, { useState, useEffect } from 'react';

const PersonalInformation = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumer] = useState('');

    const setPhone = () => {
        if (phoneNumber[0] === '+' && phoneNumber.length === 13) {
            let ph = '';
            for (let i = 0; i < phoneNumber.length; i++) {
                ph += phoneNumber[i];
                if (i > 0) {
                    if (i === 3) ph += ' ';
                    if (i === 6) ph += ' ';
                    if (i === 8) ph += ' ';
                    if (i === 10) ph += ' ';
                    if (i === 12) ph += ' ';
                    setPhoneNumer(ph);
                }
            }
        }

    }

    useEffect(() => {
        document.addEventListener('click', setPhone);
        return () => {
            document.removeEventListener('click', setPhone);
        }
    }, [setPhone]);

    return (
        <div className="form-app">
            <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)} placeholder='First Name' required />
            <input type="text" value={lastName} onChange={e => setLastName(e.target.value)} placeholder='Last Name' required />
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder='E Mail' required />
            <input type="tel" maxLength='18' value={phoneNumber} onChange={e => setPhoneNumer(e.target.value)} placeholder='+995 5__ __ __ __' pattern='[+]{1}[0-9]{3} [0-9]{3} [0-9]{2} [0-9]{2} [0-9]{2}' required />
        </div>
    );
}

export default PersonalInformation;