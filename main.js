(function(){
    const submit = document.getElementById( "submit" );
    submit.addEventListener( 'click', function(e){
        calcul();
    });

    const price = document.getElementById("price");
    price.addEventListener("keypress", function(event){
        const keyName = event.key;
        if( keyName == 'Enter' ){
            calcul();
        }
    });
    const coef = document.getElementById("coef");
    coef.addEventListener("keypress", function(event){
        const keyName = event.key;
        if( keyName == 'Enter' ){
            calcul();
        }
    });
    
})();

function calcul(){

    const price = document.getElementById( 'price' );
    const coef = document.getElementById( 'coef' );
    const result = document.getElementById( 'div-result' );
    const calcul = document.getElementById( 'div-calcul' );

    const localCalcul = parseFloat( price.value ) * parseFloat( coef.value );
    price.focus();

    result.innerHTML = "";
    calcul.innerHTML = "";
    result.append( 'Result: ' + localCalcul + 'EURO');
    calcul.append( price.value + ' * ' + coef.value );
    price.value = "";

}