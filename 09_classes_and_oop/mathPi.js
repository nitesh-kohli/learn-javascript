
//console.log(Math.PI);
Object.getOwnPropertyDescriptor(Math,"PI").writable = true
//console.log(descriptor);

const biryani = {
    name : 'veg biryani',
    price : 100,
    isAvailable : true,
    orderBiryani : function () {
        console.log(`biryani nhi bani`);
    }
}

// console.log(Object.getOwnPropertyDescriptor(biryani,'price'));

Object.defineProperty(biryani,'price',{
    writable:false
})

// console.log(Object.getOwnPropertyDescriptor(biryani,'price'));

biryani.price = 240
// console.log(biryani.price);

for(let [key,value] of Object.entries(biryani)){
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`);
    }
}