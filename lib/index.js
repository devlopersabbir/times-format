"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var useFormat = function () {
    var _a = (0, react_1.useState)(""), time = _a[0], setTime = _a[1];
    var format = function (onChangeValue) {
        var timeSplit = onChangeValue.split(":"), hours, minutes, meridian;
        hours = Number(timeSplit[0]);
        minutes = Number(timeSplit[1]);
        if (hours > 12) {
            meridian = "PM";
            hours -= 12;
        }
        else if (hours < 12) {
            meridian = "AM";
            if (hours === 0) {
                hours = 12;
            }
        }
        else {
            meridian = "PM";
        }
        setTime(hours + ":" + minutes + " " + meridian);
    };
    return {
        format: format,
        time: time,
    };
};
exports.default = useFormat;
