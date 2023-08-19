const validate = (data, setErrorsE, errorsE, setErrorsP, errorsP) => {

    const validatePassword = /\d/;

    if (!data.email) {
        setErrorsE({ ...errorsE, email: 'Empty email.' });
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(data.email)) {
        setErrorsE({ ...errorsE, email: 'Invalid email.' })
    } else if (data.email.length > 35){
        setErrorsE({...errorsE,email: 'Very long.'})
    } else{
        setErrorsE({...errorsE,email: ''})
    }


    if (!validatePassword.test(data.password)) {
        setErrorsP({ ...errorsP, password: 'Must have a number.' })
    } else {
        setErrorsP({ ...errorsP, password: '' })
    }

    if (data.password.length < 6 || data.password.length > 10) {
        setErrorsP({ ...errorsP, password: 'The password must be between 6 and 10 characters long.' })
    }

}

export default validate