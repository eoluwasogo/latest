let stock = {
    liquid: ["ice","water" ],
    topping: ["chocolate", "almond", "vanilla"],
    fruit: ["banana", "coconout", "pineapple", "pawpaw"],
    holder: ["cup", "mug","jug" ] 

}





let fruit_select = (fruit_index)=>{
    setTimeout(()=>{
        console.log(`${stock.fruit[fruit_index]} selected`)


    },2000)



}

fruit_select(3)


let order = (time, work) =>{
    setTimeout(()=> {
        work() 
    }, time)
}

order(2000, ()=>{console.log(`DID I PASS`)})





// let orders = (time, work)=>{
//     if(is_shop_open){
//         setTimeout(()=>{
//             work()
//         },time)
        
//     }
//     else{
//         return console.log("Shop is closed")
//     }



// }

// orders(1000, ()=>{console.log("order available")})





//Refactor your orders function so that:
//It returns a Promise
//If is_shop_open = true → it resolves after the delay
//If is_shop_open = false → it rejects immediately

let stock = {
    liquid: ["ice","water" ],
    topping: ["chocolate", "almond", "vanilla"],
    fruit: ["banana", "coconout", "pineapple", "pawpaw"],
    holder: ["cup", "mug","jug" ] 

}

let is_shop_open = window.prompt("Is the shop open: y/n") === "yes";

let orders = (time,work)=>{
    return new Promise((resolve, reject)=>{
        if(is_shop_open){
            setTimeout(()=>{
                resolve(work())
            },time)
        }
        else{
            reject("We are not opened yet")
        }
    })
}

orders(2000,()=>{console.log("The shop is open let get the coffee started")})

.then(()=>{

    return orders(0, ()=>{ console.log("The production has started")
        
    })
})

.then(()=>{
    return orders(0,()=>{console.log(`${stock.fruit[2]} has been chopped`)})
})

.catch(()=>{
    console.log("Sorry customer just left")
})