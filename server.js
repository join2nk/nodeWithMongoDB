require('dotenv/config')
const express = require("express");
const app =  express();


const mongoose  = require("mongoose");

mongoose.connect(process.env.MONGODB);

const fruitSchema = new mongoose.Schema({
  name:{
    type:String,
    required:[true,"its reqiured"]
  },
  rating:{
    type:Number,
    min:1,
    max:10
  },
  review:String
});

const Fruit = mongoose.model("Fruit", fruitSchema);





app.listen( process.env.PORT || 3000,()=>console.log('server has started'));



// Fruit.updateOne({name:"Banana"},{review:"improves mood and super healthy"},(err)=>{
//   if(err){
//     console.log(err);
//   }else{
//     console.log("success");
//     Fruit.find((err,fruits)=>{
//       console.log(fruits);
//       mongoose.connection.close();
//     })
    
//   }
// })



Fruit.find((err,fruits)=>{
  if (err){
    console.log(err);
  }else{
    console.log(fruits);
  }
})




//var mangoId;



// Fruit.find((err,fruits)=>{
//   if (err){
//     console.log(err);
//   }else{
//     fruits.forEach(
//       (fruit)=>{
//         if (fruit.name=="king Mango"){
//           mangoId = fruit._id;
//           console.log(mangoId);
//           Fruit.updateOne({id:mangoId},{name:"Mango"},(err)=>{
//             if(err){
//               console.log(err);
//             }else{
//               console.log("success in updating ");
//               mongoose.connection.close()
//             }
//           }
//         )
    
//       }
//     })
//   }
// })





// Fruit.find((err,fruits)=>{
//   if(err){
//     console.log(err);
//   }else{
//     fruits.forEach((fruit)=>{ console.log(fruit.name); })
//   }
// })

// Fruit.deleteOne({name:"Kiwi"},(err)=>{
//   if (err){
//     console.log(err);
//   }else{
//     console.log("deletion done");
//     Fruit.find((err,fruits)=>{
//       if(err){
//         console.log(err);
//       }else{
//         mongoose.connection.close();
//         fruits.forEach((fruit)=>{ console.log(fruit.name); })
//       }
//     });
//   };
// });



// const mango = new Fruit({
//   name:"Mango",
//   rating : 10,
//   review: "its is very sweet the king of fruits"
// }) ;


// Fruit.deleteOne({name:"banana"},(err)=>{
//   if(err){
//     console.log(err);
//   }else{
//     mongoose.connection.close();
//     console.log("deliting done");
//   };
// })

//------------------------------------update one
// Fruit.updateOne({_id:"615abfea8a8c56c8388af58e"},{name:"king Mango"},(err)=>{
//   if(err){ 
//     console.log(err)
//   }else{
//     mongoose.connection.close()
//     console.log("success updation king");
//   };
// });

// mango.save((err,doc)=>{
//   if (err){
//     console.log(err);
//   }else{
//     mongoose.connection.close();
//     console.log(doc);
//   };
// });


//-------------------------------------------------------------------mongoose satrter code for ref-----
// const fruitSchema = new mongoose.Schema({
//   name:String,
//   rating:Number,
//   review:String
// });

// const Fruit = mongoose.model("Fruit", fruitSchema);

// const fruit = new Fruit({
//   name:"Apple",
//   rating:7,
//   review:"its a Awosome Fruit"
// });
// const kiwi = new Fruit({
//   name:"Kiwi",
//   rating:10,
//   review:"its the best fruit"
// });
// const banana = new Fruit({
//   name:"Banana",
//   rating:8,
//   review:"improvers mood"
// })

// // fruit.save().then(()=>console.log("success")).catch(()=>console.log("faile"));


// // Fruit.insertMany([kiwi,banana],
// //   (err,doc)=>{
// //     if (err){
// //       console.log(err);
// //     }else{
// //       console.log("success inssertmany"+doc);
// //     };
// //   });



// Fruit.find((err,fruits)=>{
//   if (err){
//     console.log(err);
//   }else{
//     mongoose.connection.close();
//     fruits.forEach((fruit)=>{console.log(fruit.name)});
//   };
// });

// ---------------------------------------------------------------------------------------------------

//----------------------------------------------------------------Mongoose sample code---------------
// const Cat= mongoose.model('cat',{name:String});

// const kitty = new Cat({name:"zelda"});
// kitty.save().then(()=>console.log('meow'));
//---------------------------------------------------------------------------------------------------

