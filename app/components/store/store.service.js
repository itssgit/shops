/**
 * Created by vietdd on 16/06/2017.
 */
(function () {
    'use strict'
    angular.module("app").service("StoreService", StoreService);
    StoreService.$inject = ["$filter", "HttpService","AppConfig"];
    function StoreService($filter, HttpService, AppConfig){
        //do something here
        this.getListMaterial = function(onSuccess, onError){
            var url = AppConfig.inventoryUri.list;
            HttpService.callGetService(url, onSuccess, onError);
        }

        this.createMaterial = function(data, onSuccess, onError){
            var url = AppConfig.inventoryUri.create;
            HttpService.callPostService(url, data, onSuccess, onError);
        }
    }
})();