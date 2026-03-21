//Refactor your orders function so that:
//It returns a Promise
//If is_shop_open = true → it resolves after the delay
//If is_shop_open = false → it rejects immediately



let is_shop = true;

let order = ((time, work)=>{
    return new Promise((resolve, fail)=>{
        if(is_shop){
            setTimeout(()=>{
                console.log("We are open")
                resolve(work());

            }, time)
        }
        else{
            return fail("Shop is not opened yet")
        }

    })

})

order(2000, ()=>{
    console.log("Yes we can now serve coffee")
})

.then(()=>{
    setTimeout(()=>{console.log("Thanks for the patronage")}, 2000)
    
})
.catch (()=>{console.log("Sorry for the inconvinience")})

.finally(()=>{
    console.log("The shop is closed")
})




async function orders (){

    try {
        await abc(()=>{
            setTimeout(()=>{
                console.log("first trial")
            },2000)
        });
    }
    catch (error) {
        console.log("abc function does not exist")
    }
    finally{
        console.log("Run any ways ")
    }
    
    
}
orders()