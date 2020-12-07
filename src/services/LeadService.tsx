import { apiDomain } from "../helpers/globals";

const getLeads = () => {
    const requestOptions = {
        method: 'GET',
    };
    const myURL = `${apiDomain}leads`;
    return fetch(myURL, requestOptions)
        .then(data => {
            console.log("data", data);
            return data.json();
        },error => {
            console.log("data", error);
            return [];
        }
    );
}
export default getLeads