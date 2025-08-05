console.log("calculated sym")

//by default modules block their variables and functions from leaking
// but can be accessed by exporting and importing
function calculatesum(a,b){
    const sum=a+b;
    console.log(sum);
}

modules.exports=calculatesum;

//common js                             es modules
//module.exports                        import and export are used
//require()                             by default in react and angulars
//by default used by nodejs              newwer way of writing code
//older way                              asyncrhonius way
//syncronus way

//jiss code pe hai wo run nhi karega tab tak aage nhi jaayega