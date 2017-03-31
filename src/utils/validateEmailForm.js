import $ from "jquery";

export const validate = (values) => {

    const errors = {}
    if (!values.fromEmail) {
        errors.fromEmail = 'Required'
    }  else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.fromEmail)) {
        errors.fromEmail = 'Invalid Email address'
    }

    if (!values.toEmail) {
        errors.toEmail = 'Required'
    }

    if (!values.subject) {
        errors.subject = 'Required'
    }

    if (!values.content) {
        errors.content = 'Required'
    }

    return errors
}

export const resetForm = () => {

    $('input').val('');
    $('textarea').val('');

}