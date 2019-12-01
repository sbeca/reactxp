"use strict";
/**
* ReactXP.ts
*
* Copyright (c) Microsoft Corporation. All rights reserved.
* Licensed under the MIT license.
*
* Wrapper for all ReactXP functionality. Users of ReactXP should import just this
* file instead of internals.
*/
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var React = require("react");
var RN = require("react-native");
var AccessibilityUtil_1 = require("../native-common/AccessibilityUtil");
var ActivityIndicator_1 = require("../native-common/ActivityIndicator");
var Alert_1 = require("../native-common/Alert");
var Animated_1 = require("../native-common/Animated");
var App_1 = require("../native-common/App");
var Button_1 = require("../native-common/Button");
var Clipboard_1 = require("../native-common/Clipboard");
var Input_1 = require("../native-common/Input");
var International_1 = require("../native-common/International");
var Link_1 = require("../native-common/Link");
var Linking_1 = require("../native-common/Linking");
var Location_1 = require("../common/Location");
var Modal_1 = require("../native-common/Modal");
var Picker_1 = require("../native-common/Picker");
var Platform_1 = require("../native-common/Platform");
var Popup_1 = require("../native-common/Popup");
var ScrollView_1 = require("../native-common/ScrollView");
var Storage_1 = require("../native-common/Storage");
var Styles_1 = require("../native-common/Styles");
var TextInput_1 = require("../native-common/TextInput");
var RXTypes = require("../common/Types");
var UserInterface_1 = require("../native-common/UserInterface");
var UserPresence_1 = require("../native-common/UserPresence");
var View_1 = require("../native-common/View");
var Accessibility_1 = require("./Accessibility");
var AccessibilityUtil_2 = require("./AccessibilityUtil");
var GestureView_1 = require("./GestureView");
var Image_1 = require("./Image");
var StatusBar_1 = require("./StatusBar");
var Text_1 = require("./Text");
AccessibilityUtil_1.default.setAccessibilityPlatformUtil(AccessibilityUtil_2.default);
// -- STRANGE THINGS GOING ON HERE --
// See web/ReactXP.tsx for more details.
var ReactXP;
(function (ReactXP) {
    ReactXP.Accessibility = Accessibility_1.default;
    ReactXP.ActivityIndicator = ActivityIndicator_1.default;
    ReactXP.Alert = Alert_1.default;
    ReactXP.App = App_1.default;
    ReactXP.Button = Button_1.default;
    ReactXP.Picker = Picker_1.default;
    ReactXP.Clipboard = Clipboard_1.default;
    ReactXP.GestureView = GestureView_1.default;
    ReactXP.Image = Image_1.default;
    ReactXP.Input = Input_1.default;
    ReactXP.International = International_1.default;
    ReactXP.Link = Link_1.default;
    ReactXP.Linking = Linking_1.default;
    ReactXP.Location = Location_1.default;
    ReactXP.Modal = Modal_1.default;
    ReactXP.Platform = Platform_1.default;
    ReactXP.Popup = Popup_1.default;
    ReactXP.ScrollView = ScrollView_1.default;
    ReactXP.StatusBar = StatusBar_1.default;
    ReactXP.Storage = Storage_1.default;
    ReactXP.Styles = Styles_1.default;
    ReactXP.Text = Text_1.default;
    ReactXP.TextInput = TextInput_1.default;
    ReactXP.UserInterface = UserInterface_1.default;
    ReactXP.UserPresence = UserPresence_1.default;
    ReactXP.View = View_1.default;
    var androidAnimatedClasses = __assign(__assign({}, Animated_1.CommonAnimatedClasses), { Text: RN.Animated.createAnimatedComponent(Text_1.default) });
    ReactXP.Animated = Animated_1.makeAnimated(androidAnimatedClasses);
    ReactXP.Types = RXTypes;
    ReactXP.Component = React.Component;
    ReactXP.createElement = React.createElement;
    ReactXP.Children = React.Children;
    ReactXP.__spread = React.__spread;
    ReactXP.Fragment = React.Fragment;
})(ReactXP || (ReactXP = {}));
// -- STRANGE THINGS GOING ON HERE --
// See web/ReactXP.ts for more details.
// tslint:disable-next-line
var _rxImplementsRxInterface = ReactXP;
_rxImplementsRxInterface = _rxImplementsRxInterface;
module.exports = ReactXP;
/*
var rx = module.exports;
Object.keys(rx)
    .filter(key => rx[key] && rx[key].prototype instanceof React.Component && !rx[key].displayName)
    .forEach(key => rx[key].displayName = 'RX.' + key + '');
*/
