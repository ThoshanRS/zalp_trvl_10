/**
 * eslint-disable @sap/ui5-jsdocs/no-jsdoc
 */

sap.ui.define([  /*returns array of string and UI Component */
    "sap/ui/core/UIComponent",
    "sap/ui/Device"
],
function (UIComponent, Device) {
    "use strict";

    return UIComponent.extend("com.sapui5.Component", {
        metadata: {
            manifest: "json"
        },

        /**
         * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
         * @public
         * @override
         */
        init: function () {
            
            // call the base component's init function
            UIComponent.prototype.init.apply(this, arguments);

            //enable routing
           this.getRouter().initialize();

        


        }
    });
}
);