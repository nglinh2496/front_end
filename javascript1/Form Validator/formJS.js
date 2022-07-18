// //Doi tuong

// function Validator(options) {

//     //Kiem tra parentElement toi selector
//     function getParent(element, selector){
//         while(element.parentElement){
//             if(element.parentElement.matches(selector)){
//                return element.parentElement;
//             }

//             element = element.parentElement;
//         }
//     }

//     //Tao ham luu tat ca selector khi chay xong
//     var selectorRules = {};

//     function Validate(inputElement, rule){
//         var errorMessage = rule.test(inputElement.value);
//         var errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector);

//         //Lay ra cac rule cua selector
//         var rules = selectorRules[rule.selector];

//         //Lap qua tung rule & kiem tra
//         //Neu co loi thi dung viec kiem tra
//         for(var i = 0; i < rules.length; ++i){
//             switch(inputElement.type){
//                 case 'radio':
//                 case 'checkbox':
//                     errorMessage = rules[i](
//                         formElement.querySelector(rule.selector + ':checked')
//                     );
//                     break;
//                 default:
//                     errorMessage = rules[i](inputElement.value);

//             }
//             errorMessage = rules[i](inputElement.value);
//             if(errorMessage) break;
//         }

//         if(errorMessage){
//             errorElement.innerText = errorMessage;
//             getParent(inputElement, options.formGroupSelector).classList.add('invalid')
//         } else{
//             errorElement.innerText = '';
//             getParent(inputElement, options.formGroupSelector).classList.remove('invalid')

//         }

//         return !errorMessage // !! : convert kieu du lieu boolean dang true or false
//     }

//     var formElement = document.querySelector(options.form);
//     if(formElement){

//         formElement.onsubmit = function(e){
//             e.preventDefault();

//             var isFormValid = true;


//             //Lap qua tung rule va validate
//             options.rules.forEach(function(rule){
//                 var inputElement = formElement.querySelector(rule.selector);
//                 var isValid = Validate(inputElement, rule);
//                 if(!isValid){
//                     isFormValid = false;
//                 }
//             });
            
            
//             if(isFormValid){
//               if (typeof options.onSubmit === 'function'){
                
//                 var enabledInputs = formElement.querySelectorAll('[name]');
                
//                 var formValues = Array.from(enabledInputs).reduce(function(values, input){
                    
//                     switch(input.type){
//                         case 'checkbox':
//                             //Tao rieng cho case checkbox
//                             if(!input.matches(':checked')) return values;
//                             if(!Array.isArray(values[input.name])){
//                                 values[input.name] = [];
//                             }
//                             values[input.name].push(input.value);
//                             break;
//                         case 'radio':
//                             values[input.name] = formElement.querySelector('input[name="' + input.name + '"]:checked').value;
//                             break;
//                         case 'file':
//                             values[input.name] = input.files;
//                         default:
//                             values[input.name] = input.value;

//                     }

//                     return values;
//                 }, {});

//                 options.onSubmit(formValues);
//               }
//             }
//         }

//         //Duyet qua tung phan tu cua array
//         options.rules.forEach(function(rule){

//             //Luu lai cac rule cho moi input
//             if(Array.isArray(selectorRules[rule.selector])){
//                 selectorRules[rule.selector].push(rule.test);
//             } else {
//                 selectorRules[rule.selector] = [rule.test];
//             }
//             //Tim input trong Element
//             var inputElements = formElement.querySelectorAll(rule.selector);
            
//             Array.from(inputElements).forEach(function(inputElement) {
//                 //Xu ly truong hop blur khoi input
//                 inputElement.onblur = function(){

//                     var errorMessage = rule.test(inputElement.value);
//                     var errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector);


//                     if(errorMessage){
//                         //Xu ly truong hop blur khoi input
//                         inputElement.onblur = function(){
//                             Validate(inputElement, rule);
//                         }

//                         //Xu ly moi khi nguoi dung nhap
//                         inputElement.oninput = function(){
//                             errorElement.innerText = '',
//                             getParent(inputElement, options.formGroupSelector).classList.remove('invalid');
//                         }
//                     }
                    
//                 }
//             });
//         });
//     }
// }
// //Dinh nghia rules
// //Nguyen tac cac Rules

// Validator.isRequired = function(selector, message){
//     return {
//         selector : selector, // key: value
//         //kiem tra
//         test: function(value){
//             return value ? undefined : message || 'Vui lòng nhập trường này'
//         }
//     };
// }

// Validator.isEmail = function(selector, message){
//     return {
//         selector : selector, // key: value
//         //kiem tra
//         test: function(value){
//             var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//             return regex.test(value) ? undefined : message || 'Trường này phải là email'; 
//         }
//     };
// }

// Validator.minLength = function(selector, min, message){
//     return {
//         selector : selector, // key: value
//         //kiem tra
//         test: function(value){
//             return value.length >= min ? undefined :`Vui lòng nhập tối thiểu ${min} ký tự`;
//         }
//     };
// }

// Validator.isComfirmed = function(selector, getConfirmValue, message){
//     return {
//         selector : selector, // key: value
//         //kiem tra
//         test: function(value){
//             return value === getConfirmValue() ? undefined : message || 'Giá trị nhập vào không chính xác';
//         }
//     };
// }
