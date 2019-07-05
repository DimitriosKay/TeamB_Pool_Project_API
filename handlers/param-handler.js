/**
 * Checks if all requried params are found in a request.
 * If not an error response is sent describing the issue.
 * 
 * @param req request object.
 * @param res response object.
 * @param params Array of param strings to check for. If one isn't found a HTTP 500 error is sent.
 * @param next Function to call if required params are found.
 */
module.exports = (req, res, params, next) => {
    for (const param of params) {
        if (param && !req.query[param]) {
            next(`Request failed. Request must include '${param}' param.`);
        }
    }   
    next();
<<<<<<< HEAD
};
=======
};
>>>>>>> origin/queue_collection
