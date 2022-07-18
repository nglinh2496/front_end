// 1. Mong muon/ Ky vong/ Thanh qua dat duoc ==> Output la gi ?
function Validator(formSelector) {
    var _this = this;
    var formRules = {};

    function getParent(element, selector){
        
        while(element.parentElement){
            if(element.parentElement.matches(selector)){
                return element.parentElement;
            }
            element = element.parentElement;
        }
    }

    /**
     * Quy uoc tao rules: 
     * - Neu co loi thi return `error message`
     * - Neu khong co loi thi return `undefined`
     */
    var validatorRules = {
        required: function(value){
            return value ? undefined : 'Vui long nhap truong nay'
        },

        email: function(value){
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined :'Trường này phải là email'; 
        },

        min: function(min){
            return function(value){
                value.length >= min ? undefined :`Vui lòng nhập tối thiểu ${min} ký tự`;
            };
        }

    };

    var ruleName = 'required';

    //Lay ra formElement trong DOM theo formSelector
    var formElement= document.querySelector(formSelector);
    //Chi xu ly khi co element trong DOM
    if(formElement){

        var inputs = formElement.querySelectorAll('[name][rules]');
        
        //Tra ve tung input trong inputs
        for(var input of inputs){

            var rules = input.getAttribute('rules').split('|');

            for(var rule of rules){
                var ruleInfo;
                var isRuleHasValue = rule.includes(':');

                if(isRuleHasValue){
                    ruleInfo = rule.split(':');
                    rule = ruleInfo[0];
                } 

                var ruleFunc = validatorRules[rule];

                if(isRuleHasValue){
                    ruleFunc = ruleFunc(ruleInfo[1]);
                }

                if(Array.isArray(formRules[input.name])){
                    formRules[input.name].push(ruleFunc);
                } else {
                    formRules[input.name] = [ruleFunc];
                }
            }
            //Lang nghe su kien de validate (blur, change,...) 
            input.onblur = handleValidate;
            input.oninput = handleClearError;

        }
        //Ham thuc hien Validate
        function handleValidate(event){
            var rules = formRules[event.target.name];
            var errorMessage;

            for(var rule of rules){
                errorMessage = rule(event.target.value);
                if(errorMessage) break;

            }

            //Neu co loi hien thi message loi ra UI
            if(errorMessage){
                var formGroup = getParent(event.target, '.form-group');
                if(formGroup){
                    formGroup.classList.add('invalid');
                    var formMessage = formGroup.querySelector('.form-message');
                    if(formMessage){
                        formMessage.innerText = errorMessage;
                    }
                }
            }
        }

        function handleClearError(){
            var formGroup = getParent(event.target, '.form-group');
            if(formGroup.classList.contains('invalid')){
                formGroup.classList.remove('invalid');
                var formMessage = formGroup.querySelector('.form-message');
                if(formMessage){
                    formMessage.innerText = '';
                }
            }
        }
    }

    //Xu ly hanh vi submit form
    formElement.onsubmit = function(event){
        event.preventDefault();

        var inputs = formElement.querySelectorAll('[name][rules]');
        var isValid = true;
        //Tra ve tung input trong inputs
        for(var input of inputs){
            if(handleValidate({target: input})){
                isValid = false;
            }
        }

        //Khi khong co loi thi submit form
        if(isValid){
            //Loai bo submit mac dinh
            if(typeof _this.onSubmit === 'function'){
                var enabledInputs = formElement.querySelectorAll('[name]');
                
                var formValues = Array.from(enabledInputs).reduce(function(values, input){
                    
                    switch(input.type){
                        case 'checkbox':
                            //Tao rieng cho case checkbox
                            if(!input.matches(':checked')) return values;
                            if(!Array.isArray(values[input.name])){
                                values[input.name] = [];
                            }
                            values[input.name].push(input.value);
                            break;
                        case 'radio':
                            values[input.name] = formElement.querySelector('input[name="' + input.name + '"]:checked').value;
                            break;
                        case 'file':
                            values[input.name] = input.files;
                        default:
                            values[input.name] = input.value;
                    }

                    return values;
                }, {});

                //Goi lai ham onsubmit va tra ve gia tri form
                _this.onSubmit(formValues);
            } else{
                formElement.submit();
            }
        }
    }
}