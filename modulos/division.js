function dividir(a,b){
    if (b=== 0){
        throw new Error('NO SE PUEDE DIVIDIR POR CERO');
    }
    return a / b;
}

module.exports = dividir