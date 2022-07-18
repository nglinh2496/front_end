// myObject = {
//     name: 'adadada',
//     age: 18
// }

import { join } from "core-js/core/array"

// for ( var value of Object.values(myObject) ) {
//     console.log(value);
// }

// var i = 0;
// var iSuccess = false;
// do{
//     i++;
//     console.log('Nap the lan ' + i);
//     //thanh cong
//     if(true) {
//         iSuccess = true;
//     }
// }

// while ( !iSuccess && i < 3 )

// var myArray = [
//     [1, 3],
//     [5, 6],
//     [8, 19]
// ];

// for(var i = 0; i < myArray.length; i++){
//     for(var j = 0; j < myArray[i].length; j++){
//         console.log(myArray[i][j])
//     }
// }

// for(var i = 100; i >0; i -=5){
//     console.log(i)
// }

// function countDown(num){
//     if(num>0){
//         console.log(num);
//         return countDown(num-1);
//     }
//     return num;
// }

// countDown(3);


// function giaiThua(num){
//     if(num>0){
//         return num*giaiThua(num-1);
//     }
//     return 1;
// }

// console.log(giaiThua(6))

// function giaiThua(num){
//     var output = 1;
//     for(var i=num; i > 0; i--){
//         output *= i;
//     }
//     return output;
// }

// console.log(giaiThua(6))

// courses.forEach(function(index,course){
//     console.log(index,course);
// })

// var isFree = courses.every(function(index,course){
//     return course.coin === 0;
// })
// console.log(isFree)


// Map2

// Array.prototype.map2 = function(callback){
//     var arrayLength = this.length;
//     var output = [];
//     for(var i = 0; i < arrayLength; ++i){
//         var result = callback(this[i], i);
//         output.push(result);
//     }
//     return output;
// }


// var courses = [
//     'Java',
//     'php',
//     'ruby'
// ]

// var htmls = courses.map2(function(course){
//     return `<h2>${course}</h2>`
// });
// console.log(htmls.join(''));


//forEach


// Array.prototype.forEach2 = function(callback){
//     for(var index in this){
//         if(this.hasOwnProperty(index)){
//             callback(this[index],index,this);
//         }
//     }
// }

// var courses = [
//     'java', 'php', 'ruby'
// ]


// courses.push('dadad', 'adadadadas');

// courses.forEach2(function(course, index, array){
//     console.log(course, index, array);
// })

//fillter2


// Array.prototype.fillter2 = function(callback) {
//     var output = [];
//     for(var index in this) {
//         if(this.hasOwnProperty(index)){
//             var result = callback(this[index],index, this)
//             if(result){
//                 output.push(this[index]);
//             }
//         }
//     }
//     return output
// }

// var courses = [
//     {
//         adad: 'adadada',
//         ade: 7346
//     },

//     {
//         adad: 'aarwqr',
//         ade: 7313124
//     },

//     {
//         adad: 'aaiiyqr',
//         ade: 7124
//     }
// ]

// courses.fillter2(function(course, index, array) {
//     console.group(course, index, array);
// });

//some2

// Array.prototype.some2 = function(callback) {
//     var output = false;
//     for(var index in this){
//         if(this.hasOwnProperty(index)){
//             var result = callback(this[index], index, this)
//             if(result){
//                 output= true;
//                 break;
//             }
//         }
//     }
//     return output;
// }


// var courses = [
//     {
//         name: 'erqeqw',
//         age: true
//     },

//     {
//         name: 'qeqwewq',
//         age: false

//     }
    
// ]

// var result = courses.some2(function(course, index, array) {
//     return course.age;
// });

// console.log(result);


//every2()

// Array.prototype.every2 = function(cb){
//     var output = true;
//     for(var index in this){
//         if(this.hasOwnProperty(index)){
//             var result = cb(this[index], index, this);
//             if(!result){
//                 output = false;
//                 break;
//             }
//         }
//     }
//     return output;
// }


// var courses = [
//     {
//         name: 'dadas',
//         age: true
//     },

//     {
//         name: 'adadeqeqwe',
//         age: true
//     },

//     {
//         name: 'dadas',
//         age: false
//     }
// ]

// var everyOutput = courses.every2(function(course, index, array) {
//     return course.age;
// })

// console.log(everyOutput);


//DOM

//DOM attribute

// var courses = [

//     {
//         name: 'Javascript',
//         coin: 30
//     },

//     {
//         name: 'PHP',
//         coin: 305
//     },

//     {
//         name: 'Ruby',
//         coin: 24
//     },

//     {
//         name: 'Dark',
//         coin: 0
//     }

// ];

// //forEach

// // courses.forEach(function(course){
// //     console.log(course.name);
// // })

// //every

// // var isFree = courses.every(function(course){
// //     return course.coin === 30;
// // });
// // console.log(isFree)

// //some 

// // var isFree = courses.some(function(course){
// //     return course.coin === 30;
// // });

// // console.log(isFree)

// //find

// // var isFree = courses.find(function(course){
// //     return course.name === 'Javascript'
// // });
// // console.log(isFree)

// //filter

// // var isFree = courses.filter(function(course){
// //     return course.name === 'PHP'
// // });
// // console.log(isFree)

// //map
// // var isFree = courses.map(function(course,index){
// //     return {
// //         name: 'Khoa hoc: ' + `${course.name}`,
// //         coin: 'Gia tien: ' + `${course.coin}`,
// //         originalArray: course
// //     }
// // });

// // console.log(isFree)

// //reduce

// // var isFree = courses.reduce(function(accummulator, currentValue, originalArray){
// //     return accummulator + currentValue.coin;
// // },0);

// // console.log(isFree)


// //map2 

// // Array.prototype.map2 = function(cb){
// //     output = [];
// //     for( var index in this){
// //         var result = cb(this[index], index, this);
// //         if(result){
// //             output.push(result);
// //         }
// //     }
// //     return output
// // }

// // var htmls = courses.map2(function(course, index){
// //     return `<h2>${course.name}</h2>`
// // });

// // console.log(htmls.join(''))

// //forEach2 

// // Array.prototype.forEach2 = function(cb){
// //     for(var index in this) {
// //         if(this.hasOwnProperty(index)){
// //             var result = cb(this[index], index, array);
// //             if(result){
// //                 output.push(this[index]);
// //             }
// //         }
// //     }
// //     return output
// // }


//Promise


// var users = [
//     {
//         id:1,
//         name:'quang thanh'
//     },

//     {
//         id: 2,
//         name: 'son dang'
//     },

//     {
//         id:3,
//         name:'Hung Dam'
//     }
// ]


// var comments = [
//     {
//         id: 1,
//         user_id:1,
//         content:'anh son chua ra video :('
//     },
//     {
//         id:2,
//         user_id: 2,
//         content:'vua ra xong em oi'
//     }
// ]


// // fake ipa
// // lấy ra danh sách comment
// function getComments(){
//     return new Promise(function(resolve){
//         setTimeout(function(){
//             resolve(comments)
//         },1000)
//     })
// }
// // duyệt qua danh sách người dùng xem: 
// // người nào có id trùng với user_id của danh sách comment ko
// // sau 1s trả về kết quả trùng(result) cho promise, promise trả về cho getUserById
// function getUserByIds(user_id){
//     return new Promise(function(resolve){
//         var result = users.filter(function(user){
//             return user_id.includes(user.id)
//         })
//         setTimeout(function(){
//             resolve(result)
//         },1000)
//     })
// }
// // gọi đến hàm comment
// getComments()
//     .then(function(comments){
//         // lấy ra danh sách userIds = các user_id con
//         var userIds = comments.map(function(comment){
//             return  comment.user_id
//         })
//         return getUserByIds(userIds)
//             // thực hiện lấy ra các người dùng có id = user_id dựa trên hàm getUserByIds
//             .then(function(users){
//                 return {
//                     users:users,
//                     comments: comments
//                 }
//             })
//     })
//     // bây giờ ta đã có được thông tin những người dùng đã comment đặt tên là data
//     .then(function(data){
//         var commentBlock = document.getElementById('comment-block')
//         var html = ''
//         // object data có 2 đối tượng là users và comments
//         // sau đó duyệt qua từng phần tử của comments
//         // lần lặp đầu tiên sẽ dựa trên user_id của comment1 để tìm ra user1
//         // tương tự với lần lặp thứ 2 và ...
//         data.comments.forEach(function(comment) {
//             // kiểm tra xem trong users, phần tử nào có id bằng id trong user_id của comment
//             // sau đó trả phần tử đó về user
//             var user = data.users.find(function(user){
//                 return user.id === comment.user_id;
//             })
//             html += `<li>${user.name}: ${comment.content}</li>`;
//         });

//         commentBlock.innerHTML = html;
        
//     })


//Fetch

// API : Application programming interface


// var postApi = 
//     'https://jsonplaceholder.typicode.com/posts';

// fetch(postApi)

//     //stream
//     .then(function(response){
//         return response.json();
//         //JSON>parse: JSON --> Js type
//     })
//     .then(function(posts){
//          v
//     })
//     .catch(function(err){
//         console.log(err);
//     })



// toString() : arr sang chuoi
//join(''): arr sang chuoi
//pop(): xoa element cuoi mang va tra ve phan tu da xoa
//push('Dark', 'Ruby'): day them phan tu vao cuoi mang va tra ve mang moi
//Shift(): Xoa phan tu dau mang va tra ve phan tu da xoa
//Unshift(): them 1 hoac nhieu phan tu va dau mang va tra ve mang moi
//splice(vi tri bat dau xoa, so phan tu bi xoa, chen them 1 phan tu): language.splice(1, 1, 'Dark')
//concat(): noi cac arr voi nhau
//slice(1, ): cat element cua mang va in ra phan tu da cat
//**slice(0): copy mang



//Function phuong thuc 
//Others thuoc tinh


// Array.prototype.forEach2 = function(cb){
//     for(var i in this) {
//         if(this.hasOwnProperty(i)){
//             cb(this[i], i, this);
//         }
//     }
// }


// var courses = [
//     'Javascript',
//     'PHP Code',
//     'Ruby'
// ]

// courses.forEach2(function(course, index, array) {
//     console.log(course, index, array)
// })



var h1Element = document.querySelector('h1');

h1Element.onclick = function(e){
    console.log(e.target)
}