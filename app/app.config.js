/**
 * Created by anhvu on 14-Jun-17.
 */
(function() {
    "use strict";

    function AppConfig() {
        var a = [{
                name: "Fade up",
                "class": "animate-fade-up"
            }, {
                name: "Scale up",
                "class": "ainmate-scale-up"
            }, {
                name: "Slide in from right",
                "class": "ainmate-slide-in-right"
            }, {
                name: "Flip Y",
                "class": "animate-flip-y"
            }],
            b = new Date,
            c = b.getFullYear(),
            d = {
                brand: "ShopS",
                name: "Vương Anh Vũ",
                year: c,
                layout: "wide",
                menu: "vertical",
                isMenuCollapsed: !1,
                fixedHeader: !0,
                fixedSidebar: !0,
                pageTransition: a[0],
                skin: "12"
            },
            e = {
                primary: "#31C0BE",
                success: "#60CD9B",
                info: "#66B5D7",
                infoAlt: "#8170CA",
                warning: "#EEC95A",
                danger: "#E87352",
                gray: "#DCDCDC"
            },

            //Khai bao link webservice
            uri = "http://giaiphapshop.com:8088/shops-services/",
            inventoryUri = {
                list: uri + "inventory/find",
                create: uri + "inventory/create"
            }

        return {
            pageTransitionOpts: a,
            main: d,
            color: e,
            inventoryUri: inventoryUri
        }
    }
    angular.module("app").factory("AppConfig", [AppConfig])
})();
