
function receivesAFunction(foo){
    foo()
}

receivesAFunction(callback)


function callback(){
    return "Hello"
}



function returnsANamedFunction(arg){
    return function name(){
        
    }
}


function returnsAnAnonymousFunction()
{
    return ()=>{
        
    }
}