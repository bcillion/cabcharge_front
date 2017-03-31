import { Button, FormControl } from 'react-bootstrap';
import React from 'react';
import { Field, reduxForm } from 'redux-form';

import '../App.css';
import {resetForm, validate} from '../utils/validateEmailForm';

const  { DOM: {textarea } } = React

const renderField = ({ input, label, type,  meta: { touched, error } }) => (
    <div>

            <label>{label}:</label> {touched && ((error && <span className="input_error">{error}</span>))}

            <div className="input_padding">

                <FormControl
                    {...input} placeholder={label} type={type}
                />

            </div>

    </div>
);

const renderTextArea = ({input, label, meta: { touched, error, warning }}) => (
    <div>
        <label>{label}:</label> {touched && ((error && <span className="input_error">{error}</span>) )}
        <div>
            <span>{textarea}</span>
            <textarea {...input} placeholder="Content" rows="10" cols="100"></textarea>

        </div>
    </div>
);



const onClick = (input, store) => {

    store.dispatch({type: 'GET_DATA', input: input});

}



const SyncValidationForm = (props, {store}) => {
    const {handleSubmit, pristine, submitting } = props;

    return (
        <div>

            <form id="emailForm" onSubmit={handleSubmit((values) => {onClick(values, store)})}>

                <Field name="fromEmail" type="email" component={renderField} label="From"/>
                <Field name="toEmail" type="text" component={renderField} label="To (please use commas for multiple emails)"/>
                <Field name="subject" type="text" component={renderField} label="Subject"/>
                <Field name="ccEmail" type="text" component={renderField} label="cc (please use commas for multiple emails)"/>
                <Field name="bccEmail" type="text" component={renderField} label="bcc (please use commas for multiple emails)"/>
                <Field name="content" type="text" component={renderTextArea} label="Content"/>
                <div>
                    <Button type="submit" bsStyle="primary" bsSize="large" disabled={submitting} >Submit</Button>&nbsp;
                    <Button type="button" bsStyle="primary" bsSize="large" disabled={pristine || submitting} onClick={resetForm}>Reset</Button>
                    <span id="formResponse" className="sent_mssg"></span>
                </div>


        </form>

        </div>

    )
}

SyncValidationForm.contextTypes = {
    store: React.PropTypes.object
};

const EmailForm = reduxForm({
    form: 'emailForm',  // a unique identifier for this form
    validate             // <--- validation function given to redux-form
})(SyncValidationForm);

export default EmailForm;