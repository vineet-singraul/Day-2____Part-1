// There  we understude the concept  of [let , var ,const]

//redeclearation
// function vari() {
//     var a = 10;
//     var a = 20;   // redeclearation of variable {dubara vsame ver ko decle karna}
//     console.log(a)   //redeclearation allowed



//     // let b = 10;
//     // let b = 20; 
//     console.log(a)   //not allowed   redeclearation


//     // const c = 10;
//     // const c = 20; 

//     // console.log(c)   //not allowed   redeclearation




// }

// reassignment
// function variaclr() {
//     // reassignment allowed
//     var a = 10;
//     a = 20;  
//     console.log(a)   


//     // reassignment allowed
//     let b = 10;
//     b = 20; 
//     console.log(a)  

//     // reassignment is not allowed
//     const c = 10;
//     c = 20; 
//     console.log(c) 




// }


// var is All Scope
// function scopeCheckOf_Var()
// {
//     var a = 5;

//     console.log(a)
//     if(a == 5)
//     {
//         console.log(a)
//     }
    
// }

scopeCheckOf_Var()


// Block Scope
function scopeCheckOf_Let()
{
    var a = 5;

    console.log(a)
    {
        let a = 10;
        console.log(a)
    }

    console.log(a)
    
}

scopeCheckOf_Let()
