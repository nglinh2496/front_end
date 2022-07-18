/* 
Giới thiệu 1 sô hàm built-in
    1.Alert: thông báo
    2.Console: in ra kết quả 
    3.Confirm: Xác nhận
    4.Prompt: xác nhận + ô input
    5.Set timeout: setTimeout((function(){}, khoảng thời gian(ms)) chạy sau 1 lần/1 khoảng thời gian
    6.Set interval: setInterval((function(){}),khoảng thời gian(ms)) chạy liên tục/1 giây
*/

/*
Giới thiệu tóan tử trong JavaScript
    1.Toán tử số học: Lũy thừa: ** ;
    2.Toán tử gán: 
    3.Toán tử so sánh
    4.Toán tử logic: && || !=
*/

/* 
Tính chất của Function: Hàm là 1 khối mã nằm & làm 1 việc cụ thể
    1.Không thực thi khi định nghĩa
    2.Sẽ thực thi khi được gọi
    3.Có thể nhận tham số
    4.Có thể trả vê 1 giá trị

Lưu ý:
    1: Nếu có function trùng nhau thì function trước bị thay thế
    2: Định nghĩa biến trong function thì biến chỉ thực hiện trong function
    3: Định nghĩa được hàm trong hàm


Các loại Function:
    1.Declaration function: 

        function sum(){

        };

    2.Expression function

        var show = function(){

        }

        or 

        setTimeout(function(){

        });

    3.Arrow function
*/


/*
CHUỖI JAVASCRIPT:
    1.Tạo chuỗi: 2 cách
    2.Template String
    3.Làm việc với chuỗi:
        -Length: đo độ dài 1 chuỗi(tính cả khoảng trắng)

            console.log(myString.length)

        -Find index: Tìm vị trí ký tự nằm trong 1 chuỗi

            console.log(myString.indexOf('Js',6))
            or
            console.log(myString.search('Js'))

        -Cut string

            console.log(myString.slice(4, 6));

        -Replace: ghi de

            console.log(myString.replace('JS', 'JavaScript'))
            or
            console.log(myString.replace(/JS/g,'JavaScript')) //thay the toan bo chu Js

        -Convert to uppercase
            console.log(myString.toUpperCase(''))

        -Convert to lowercase
            console.log(myString.toLowerCase(''))
            
        -Trim: Loai bo khoang trang 2 dau
            console.log(myString.trim().length)

        -Split: Dựa vào điểm chung cắt chuỗi thành các dãy
            console.log(myString.split(')) //cat tat ca cac phan tu 

        -Get a character by Index

            console.log(myString.charAt(10)); //lay ra ky tu thu 10
            or 
            console.log(myString[10]);
*/

/*
    ARRAY
    1.To String: đổi kiểu dữ liệu sang String
        console.log(languages.toString());

    2.Join: thay đổi dấu ngăn cách chuỗi bằng 1 dấu khác
        console.log(languages.join(', '));

    3.Pop: Xóa đi phần tử cuối mảng và trả lại phần tử đã xóa
        console.log(languages.pop());

    4.Push: Thêm 1 hay nhiều phần tử vào cuối mảng và trả về độ dài mới của mảng
        console.log(languages.push('darth', 'linh'));

    5.Shift: Xóa phần tử đầu mảng và trả về phần tử đầu mảng đã xóa
        console.log(languages.shift());

    6.Unshift: Thêm 1 hoặc nhiều phần từ vào đầu mảng và trả về độ dài mới của mảng
        console.log(languages.shift('linh'));

    7.Splicing: 
    -Xóa: languages.splice(1(vị trí muốn xóa),2(số lượng phần tử xóa của mảng));
        
    -Chèn:languages.splice(1,1,'dart');
        console.log(languages);

    8.Concat: Nối các array
        console.log(languages.concat(languages2));

        9.Slicing: cắt vị trí phần tử và in ra phần tử đã cắt
         console.log(languges.slice(1,2); // 1 vị trí bắt đầu cắt, //2 vị trí phần tử kết thúc việc cắt
        */     

/* 
    Function ---> Phương thức/Method:
        name: 'Linh nguyen'
    Others ---> Thuộc tính/Property:
        getName: function(){
        return this.name;
    }
*/

/*
    MATH OBJECT
    1.Math.PI
    2.Math.round(): làm tròn số
    3.Math.abs(): nhận về giá trị tuyệt đối
    4.Math.ceil(): chỉ làm tròn trên
    5.Math.floor(): chỉ làm tròn dưới
    6.Math.random(): trả về sô ngãu nhiên < 1
    7.Math.min(): lấy ra số nhỏ nhất
    8.Math.max(): lẩy ra số lớn nhất
*/

/*
    LOOP
    1.for - Lặp với điều kiện đúng
    2.for/in - Lặp qua key của đối tượng
    3.for/ò - Lặp qua value của đối tượng
    4.while - Lặp khi điều kiện đúng
    5.do/while - Lặp ít nhăt một lần, sau đó lặp khi điều kiện đúng
*/

// function giaiThua(num){
//     if(num<=1){
//         return 1
//     }
//     return num*giaiThua(num-1);
// }
// console.log(giaiThua(6));

/*
    ARRAY
    1.forEach(): duyệt qua từng phần tử của mảng
    2.every(): kiểm tra từng phần tử của mảng thỏa mãn điều kiện nào đó, giá trị trả về kiểu boolean
    3.some(): trả về kết quả từng phần tử mỗi khi duyệt qua, trả về giá trị index ngay khi duyệt đúng
    4.find(): tìm kiếm phần tử, trả về gíá trị đầu tiên tìm được
    5.filter(): tìm kiếm phần tử, trả về tất cả giá trị tìm được
    6.map(): chỉnh sửa hoặc thay đôi thành phần của array
    7.reduce(): 
*/

//forEach

// courses.forEach(function(course,index){
//     console.log(index, course);
// });


//every

// var isFree = courses.every(function(course, index){
//     return courses.coin ===0
// });
// console.log(isFree);

//some

// var isFree = courses.some(function(course, index){
//     return course.coin === 0;
// })

// console.log(isFree);

//find

// var course = courses.find(function(course, index){
//     return course.name === 'Python';
// });
// console.log(course);

//filter

// var course = courses.filter(function(course, index){
//     return course.id === 1;
// });
// console.log(course);

//map

// function courseHandler(course){
//     return {
//         id: course.id,
//         name: `Khoa hoc: ${course.name}`,
//         coin: `So coin; ${course.coin}`,
//         originArray: course
//     }
// }

// var course = courses.map(courseHandler);
// console.log(course);



//reduce (giá trị đầy đủ function(accummulator, currentValue, currentIndex, originArray))


// var totalCoin = courses.reduce(function(accummulator, currentValue){
//     return accummulator + currentValue.coin;
// },0);
// console.log(totalCoin);


// var totalCoin = courses.reduce(function(total, course){
//     return total + course.coin;
// }, 0 );
// console.log(totalCoin);

// const numbers = [1, 2, 3, 4, 5]

// var total = numbers.reduce(function(total,number){
//     return total + number
// }, 0);

// console.log(total);

/*
    INCLUDES

// var courses = ['JavaScript', 'Dart'];
// console.log(courses.includes('JavaScript', 2));

*/

/*
    CALLBACK: 
    1.là hàm
    2.truyền qua đối sô
    3.Được gọi lại(trong hàm nhận đối số)

    //map

    Array.prototype.map2 = function(callback){
        var output = [], arrayLength = this.length;
        for(var i = 0; i < arrayLength; i++){
            var result = callback(this[i], i);
            output.push(result);
        }
    
        return output;
    }
    
    
    var courses = [
        'JavaScript',
        'PHP',
        'Ruby'
    ]
    
    
    var htmls = courses.map2(function(course){
        return `<h2>${course}</h2>`;
    });
    
    console.log(htmls.join(''));
    
    //forEch
    // var courses = [
    //     'JavaScript',
    //     'PHP',
    //     'Ruby'
    // ];
    
    // Array.prototype.map2 = function(callback){
    //     for (var index in this){
    //         console.log('index: ' + index);
    //     }
    // }
    
    
    // courses.forEch2(function(course, index, array){
    //     console.log(course,index,array);
    // });

*/

/* 
    DOM HTML: Document Object Model
    3 thành phần: 
        1.Elements: ID, class, tag, CSS selector, HTML collection, document.write
        2.Attribute
        3.Text 

    //Node là điểm giao nhau 

    //Js không có DOM, khi chạy trên Browser có Web APT  cung cấp DOM 

   
   1. Element
    // var headingNode = document.getElementById('heading');
    // console.log(headingNode);
    
    // var headingNodes = document.getElementsByClassName('heading');
    
    // var headingNodes = document.getElementsByTagName('h1');
    
    // var headingNodes = document.querySelector('.heading');
    
    //HMML Collection
    // console.log(document.from['form-1']);

    2. Attribute
    
    var headingElement = document.querySelector('h1');
    headingElement.c;assName = 'heading';
    
    headingElement.setAttribute('id', 'heading'); //tạo mới 1 attribute
    
    headingElement.getAttribute('class', 'heading'); //lấy ra giá trị 1 attribute
    
    3. Text
    
        //innerText: trả lại đầy đủ giá trị nhìn thấy
        //textContent: giống những gì nằm trong textNode
    
        var headingElement = document.querySelector('.heading');
    
        console.log(headingElement.innerText); //lấy ra
        console.log(headingElement.textText); //lấy ra
    
    
        headingElement.innerText = 'New heading'; //thay đổi nội dung mới
        headingElement.textContent = 'New heading';
    
        //innerHTML, outnerHTML
        var boxElement = document.querySelector('.box');
        
        boxElement.innerHTML = '<h1 title = "heading">New Heading</h1>';
        console.log(boxElement.innerHTML);
*/


//add: thêm class vào Element
//contains: kiểm tra class có nằm trong Element không
//remove: gỡ bỏ
//toggle

/* 
    DOM EVENTS: sử dụng khi muốn lắng nghe một sự kiện nào đó
    EventListener: khi 1 sự kiện diễn ra nhưng muốn dừng sự kiện lúc nào đó, Cung cấp phương pháp để loại bỏ 1 listener
    1. Atribute events
    2.Assign event using the element node

    var btn = document.getElementById('btn');
    
    function viec1(){
        console.log('viec 1');
    }
    
    function viec2(){
        console.log('viec 2');
    }
    
    btn.addEventListener('click', viec1);
    btn.addEventListener('click', viec2);
    
    setTimeout(function(){
        btn.removeEventListener('click', viec1);
    },3000);

*/

/*EventListener

addEventListener('click', function(e))
// Event Name: VD('click',...) lắng nghe sự kiện sắp diễn ra
//Hàm callback 

 */


/*
    JSON: JAVASCRIPT OBJECT NOTATION
    1. Là một định dạng dữ liệu(chuỗi)
    2. Thể hiện dạng number, String, boolean, null, Array
    3. 2 thao tác : Encode/Decode (Stringify/Parse)

    var json = 'True'; //chuỗi json dạng boolean
    
    var json = '["javascript", "PHP"]';
    
    var json = '{"name":"Nguyen Linh", "age":"28"}';
    
    var a = '"abc"'; //String
    //chuyển đổi chuỗi sang Javascript
    console.log(JSON.parse(a));
    //truyền kiểu dữ liệu vào sang dạng String
    console.log(JSON.stringify({
        name: 'Linh nguyen',
        age: 16,
    }));

*/

/*
    PROMiSE: Xử lý các thao tác bất đồng bộ, trước khi có promise thường xử dụng callback và gặp vấn đề callback hell nên promise sinh ra để xử lý callback hell
    1. Sync - Đồng bộ
    2. Async - Bất đồng bộ: setTimeout, setInterval, fetch, XMLHttpRequest, filee Reading
    
    setTimeout(function(){
        console.log(1);
    },1000);
    console.log(2);

    3. Pain: Callback hell, Pyramid of doom

    //callback hell

    setTimeout(function(){
        console.log(1); //viec1
        setTimeout(function(){
            console.log(2);//viec2
            setTimeout(function(){
                console.log(3);//viec3
                setTimeout(function(){
                    console.log(4);//viec4
                },1000);
            },1000);
        },1000);
    },1000);

    // 1.New Promise
    // 2. Executor
    
    var promise = new Promise(
        //Executor
        function(resolve, reject) {
            //logic
            //thanh cong: resolve()
            resolve();
            //that bai: reject()
            reject();
    
            //Fake call API
            resolve([
                {
                    id:1,
                    name: 'Nguyen Linh',
                }
            ]);
        }
    );
    
            reject('Có lỗi');
    
    Promise 
    //Có 3 trạng thái:
    1.Pendding: Chờ khi chưa gọi resolve hoặc reject
    2.Fullfill: khi gọi resolve
    3.Reject: Khi gọi reject

    //Trả về 3 phương thức
    
    //trong promise khi resolve được gọi
    .then(function(name){
        console.log(name);
    })

    //trong promise khi reject được gọi
    .catch(function(error();){
        console.log(error);
    })
    
    //trong promise khi 1 trong 2 resolve hoặc reject được gọi
    .finally(function(){
        console.log('Done');
    })


    Promise Chain

    //resolve
    
    function sleep(ms) {
        return new Promise(function(resolve, reject){
            //thành công
            setTimeout(resolve, ms);
            //xuất hiện lỗi
            reject('Có Lỗi');
        });
    }
    
    sleep(1000)
    .then(function(){
        console.log(1); //kết quả trả về 1
        return sleep(1000);
    })
    .then(function(){
        console.log(2); //lấy value trước để chạy
        return sleep(1000);
    })
    .then(function(){
        console.log(3);
        return sleep(1000);
    })
    .then(function(){
        console.log(4);
        return sleep(1000);
    })
    
    //reject: trường hợp xuất hiện lỗi
    .catch(function(err){
        console.log(err);
    });

    1. Promise.resolve
    2. Promise.reject
    3. Promise.all

    //Cách thông thường
    var promise = new Promise(
        function(resolve, reject){
            //Logic
            //resolve('Success');
            //reject
            reject('Error!');
        });
    promise
        .then(function(result){
            console.log('result: ' + result);
        })
        .catch(function(err){
            console.log('err: ' + err);
        });
    
    //Promise.resolve
    var promise = Promise.resolve('Success!');
    promise
        .then(function(result){
            console.log('result: ' + result);
        })
        .catch(function(err){
            console.log('err: ' + err);
        });
    
    //Promise.reject
    var promise = Promise.reject('Success!');
    promise
        .then(function(result){
            console.log('result: ' + result);
        })
        .catch(function(err){
            console.log('err: ' + err);
        });

    //Promise.all
    var promise1 = new Promise(
        function(resolve){
            setTimeout(function(){
                resolve([1]);
            },1000);
        });
    var promise2 = new Promise(
        function(resolve){
            setTimeout(function(){
            resolve([2, 3]);
        },2000);
    });

    promise.all ([promise1, promise2])
        .then(function(result){
            var result1 = result[0];
            var result2 = result[1];
            console.log(result1.concat(result2));
        });


    //Example Promise
    var users = [
        {
            id:1,
            name: 'Nguyen Linh',
            
        },
    
        {
            id:2,
            name: 'Nguyen nam',
            
        },
    
        {
            id:3,
            name: 'Nguyen Hai',
            
        }
    ];
    
    var comments = [
        {
            id: 1,
            user_id:1,
            content: 'Anh Son chua ra video'
        },
    
        {
            id: 2,
            user_id:2,
            content: 'Vua ra'
        }
    
    ];
    
    //1. Lay cmt
    //2. Tu cmt lat ra user_id
    //3. Tu user_id lay ra user tuong ung
    
    //fake API
    function getComments(){
        return new Promise(function(resolve){
            setTimeout(function(){
                resolve(comments);
            },1000);
        });
    }
    
    function getUserByIds(userIds){
        return new Promise(function(resolve){
            var result = users.filter(function(user){
                return userIds.includes(user.id);
            });
            setTimeout(function(){
                resolve(result);
            },1000);
        });
    }
    
    
    getComments()
        .then(function(comments){
            var userIds = comments.map(function(comment){
                return comment.user_id;
            });
            return getUserByIds(userIds)
                .then(function(users){
                    return {
                        users: users,
                        comments: comments,
                    };
                });
        })
        .then(function(data){
            var commentBlock = document.getElementById('comment-block');
            var html = '';
            data.comments.forEach(function(comment){
                var user = data.users.find(function(user){
                    return user.id === comment.user_id;
                });
                html += `<li>${user.name}: ${comment.content}</li>`
            });
            commentBlock.innerHTML = html;
        });
*/


/*
        FETCH: Gọi lên 1 API để lấy ra những nội dung lưu trữ ở BackEnd
        //BackEnd --> APT --> Fetch --> JSON/XML

    var postAPI = 'https://jsonplaceholder.typicode.com/posts';
    
    fetch(postAPI)
            .then(function (response) {
                return response.json();
                //JSON.parse: JSON --> JavaScript types
            })
    
            .then(function(posts){
                var htmls = posts.map(function(post){
                    return `<li>
                                <h2>${post.title}</h2>
                                <p>${post.body}</p>
                            </li>`;
                });
    
                var html = htmls.join('');
                document.getElementById('post-block').innerHTML = html;
            })
    
            .catch(function (err){
                console.log(err);
            })
        
        */

/*
    Thêm, sửa, xóa với Fetch

    var courseAPI = 'http://localhost:3000/courses'
    var btnSave = document.querySelector('#save')
    var inputName = document.getElementById("name1")
    var inputDes = document.getElementById("des1")
    function start(){
        getCourse(function(courses)
        {
            renderCode(courses);
        });
        handlerFormCreate();
    }
    start();
    
    function getCourse(callback)
    {
        fetch(courseAPI)
            .then(function(response){
                return response.json(); 
            })
            .then(callback);
    }
    function createCourse(data,callback)
    {
        var option = {
            method : 'POST',
            headers: {
                'Content-Type': 'application/json',
              },
            body : JSON.stringify(data)
        }
        fetch(courseAPI,option)
            .then(function(response)
            {
                return response.json();
            })
            .then(callback)
    }
    function handleDeleteCourse(idCourse)
    {
        var option = {
            method : 'DELETE',
            headers: {
                'Content-Type': 'application/json',
              },
              
        }
        fetch(courseAPI + '/'+idCourse,option)
            .then(function(response)
            {
                return response.json();
            })
            .then(function()
            {
                var elementDeleted = document.querySelector('.data-id-'+idCourse);
                elementDeleted.remove();
            });
    }
    function handleUpdateCourse(id)
    {
        inputName.value = '';
        inputDes.value = '';
        btnSave.onclick = function()
        {
            var Name = inputName.value;
            var Des = inputDes.value;
            var data = {
                Name : Name,
                Des : Des
            };
            var option = {
                method : 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                  },
                  body : JSON.stringify(data)
            }
            fetch(courseAPI + '/'+id,option)
                .then(function(response)
                {
                    return response.json();
                })
                .then(function(course)
                {
                    
                    getCourse(function(course)
                {
                renderCode(course);
                });
                });
        }
    }
    function renderCode(courses)
    {
        var listCourseBlock = document.querySelector('#list-courses');
        var htmls = courses.map(function(course)
        {
            return `<li class="data-id-${course.id}">
            <h4>${course.id}</h4>
            <p class="namevalue">${course.Name}</p>
            <p class="desvalue">${course.Des}</p>
            <button onclick="handleDeleteCourse(${course.id})">xoa</button>
            <button onclick="handleUpdateCourse(${course.id})">update</button>
            </li>`;
        });
        listCourseBlock.innerHTML = htmls.join('');
    }
    
    function handlerFormCreate()
    {
        var Createbtn = document.querySelector('#create');
        Createbtn.onclick = function()
        {
            var name = document.querySelector('input[name="name"]').value;
            var des = document.querySelector('input[name="description"]').value;
            var formData = {
                Name : name,
                Des : des
            };
            createCourse(formData,function(data)
            {
                getCourse(function(data)
                {
                renderCode(data);
                });
            })
    
        }
    }
    
    */ 



/* ES6 */

//1. Var/Let, Const: Scope, Hosting

//Code thuần: Var
//Babel: Const, Let
//- Khi định nghĩa biến và không gán lại biến đó: Const
//- Khi cần gán lại giá trị cho biến: Let


//2.Template Literals
//3.Arrow Functions
// const sum = (a, b) => a + b;
// console.log(sum(2, 2));

//4.Clases

// class Course{
//     constructor(name, price){
//         this.name = name;
//         this.price = price;
//     }
// }

// const phpCourse = new course('PHP', 1000);
// const jsCourse = new course('JavaScript',400);

// console.log(phpCourse);

//5.Default paremeter values

//6. Enhanced object literals

// Enhanced Object Literals:
// 	- định nghĩa key dưới dạng biến cho object.
// 	- định nghĩa value dưới dạng biến cho object.
// 	- định nghĩa key-value cho object thông qua biến.
// 	- định nghĩa Method cho object không cần key.

//7. Destructuring, Rest


//Destructuring: lay tat ca phan tu
// var array = [
//     'javascript',
//     'PHP Code',
//     'Ruby'
// ];
// var [a, b, c] = array;

// console.log(a, b, c);

// //Rest: lay phan tu con lai
// var [a, b, ...rest] = array;
// console.log(rest);

//8.Spread: Su dung noi mang

// var  array1 = ['javascript', 'Ruby', 'PHP Code'];
// var array2 = ['javascript', 'PHP Code'];
// var array3 = [...array1, ...array2];
// console.log(array3);

//9.Tagged template literals

// function highlight ([first,...strings],...rest) {
//     console.log('first: ' + first);
//     console.log('strings: ' + strings);
//     console.log('value: ' + value);
// }

// var brand = 'F8';
// var course = 'JavaScript';

// const html = highlight`Hoc lap trinh ${course} tren ${brand}`;
// console.log(html);

//10.Modules

// //import từng biến
// import logger, {
//     TYPE_LOG,
//     TYPE_WARN,
//     TYPE_ERROR
// }
//  from './logger/logger.js';

//  //import tất cả thành phần trong file import thành 1 object
// import * as logger from './logger/logger.js'

// //import 1 file khác sử dụng file index.js làm trung gian
// import logger, {
//     TYPE_LOG,
//     TYPE_WARN,
//     TYPE_ERROR,
//     logger2
// }
//  from './logger/index.js';
//  logger ('Test message...', TYPE_LOG);
 
// //import default sang file logger2
// import logger, {
//     TYPE_LOG,
//     TYPE_WARN,
//     TYPE_ERROR
// }
//  from './logger/index.js';

//  logger2 ('Test message...', TYPE_LOG);


/*11.Optional chaining
    - Nghi ngờ 1 key nào đó không tồn tại
    - Dùng được với obj, arr, function
*/


// const obj = {
//     name: 'Linh',
//     age: 18,
//     cat: {
//         name: 'Nguyen',
//         cat2: {
//             name: 'Nguyen',
//             cat3: {
//                 name: 'Nguyen'
//             }
//         }
//     }
// };

//Optional chaining. VD: test cat
// if(obj.cat?.cat2.cat3.name){
//     console.log (obj.cat.cat2.cat3.name);
// }




// IIFe: Là biểu thức tạo ra một hàm và hàm đó đươc thực hiện ngay lập tức
    // 1. Dùng dấu ; trước IIFE
        // let fullNam = 'Linh Nguyen'

        // ;(function(){
        //     console.log('NOW')
        // }) () // () gọi hàm

    // 2. Sử dụng IIFE là một hàm private\
    // 3. Cách sử dụng



//Scope


    // 1. Các loại phạm vi: 
        // -Global: Toàn cầu
        // -Code block: Khối mã: let, const
        // -Local scope: -Hàm: var, function
    // 2. Khi gọi mỗi hàm luôn có 1 loại phạm vi mới được tạo ra
    // 3. Các hàm có thể truy cập các biến được khai báo trong phạm vi của nó và bên ngoài nó
    // 4. Cách thức một biến bị xóa khỏi bộ nhớ
        // - Biến toàn cầu
        // - Biến trong code block và trong hàm
        // - Biến trong hàm đươc tham chiếu bởi 1 hàm


//Closure

    //1. Là một hàm có thể ghi nhớ nơi nó được tạo ra và truy cập được biến ở bên ngoài phạm vi của nó


