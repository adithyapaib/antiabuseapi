"use strict";
exports.__esModule = true;
function hello(req, res) {
    res.statusCode = 200;
    res.json({ status: 'online',
        endpoint: '/api',
        intsructions: "send the sentence with _ (replace spaces with _ )format to the /api end point",
        eg: "api/strings_cussword" });
}
exports["default"] = hello;
