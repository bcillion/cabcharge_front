import rp from 'request-promise';
import config_dev from '../../config/app_DEV';
import config_pro from '../../config/app_PRO';
import {resetForm} from '../utils/validateEmailForm';
import {APIConstants} from '../constants/APIConstants';

const getAPI = next => (data) => {

    const fullUrl = (global.__DEVELOPMENT__) ? config_dev.API.email_api_url : config_pro.API.email_api_url; //"http://localhost:8000/api"; //config.get('API/email_api_url'); //
    document.getElementById('formResponse').innerText = " Sending Email, Please Wait.....";

    var options = {
        method: 'POST',
        url: fullUrl,
        body: JSON.stringify({
            data:  data
        }),

        headers : {
            'Content-Type' : 'application/x-www-form-urlencoded;'
        },
        json: true // Automatically parses the JSON string in the response

    };

    let element = document.getElementById('formResponse');

    rp(options)
        .then(function (result) {

            //console.log(result.response);
            if(result.response === "success"){
                element.innerText = " Email Sent";
                resetForm();

                setTimeout(function() {
                    element.innerText = "";

                }, 3000);

            }else{
                element.innerText = " Error, please try again later.";
            }
        })
        .catch(function (err) {

            element.innerText = " Error, please try again later.";
        });

}


const apiService = store => next => action => {

    next(action);

    const getapi = getAPI(next);

    switch (action.type) {
        case APIConstants.GET_DATA:
            return getapi(action.input);

        default:
            break
    }

};

export default apiService;