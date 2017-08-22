/**
 * Created by vietdd on 22/07/2017.
 */
(function(){
    function formatPrice() {
        return function(input, symbol){
            if(isNaN(input)){
                return input;
            } else {
                var value = input.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
                var symbol = symbol || ' VND';
                return value + " " + symbol;
            }
        }
    }

    angular.module('app').filter('customCurrency', [formatPrice]);
})(),
(function(){
    function formatPrice() {
        return function(input){
            if(isNaN(input)){
                return input;
            } else {
                var value = input.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
                return value;
            }
        }
    }

    angular.module('app').filter('customPriceNoCurrency', [formatPrice]);
})();