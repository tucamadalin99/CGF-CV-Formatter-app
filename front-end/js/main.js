let index = 0;
let indexRole = 0;
(function ($) {
    "use strict";

    /*==================================================================
    [ Validate after type ]*/
    $('.validate-input .input100').each(function(){
        $(this).on('blur', function(){
            if(validate(this) == false){
                showValidate(this);
            }
            else {
                $(this).parent().addClass('true-validate');
            }
        })    
    })
  
  
    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(){
        var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }

        return check;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
           $(this).parent().removeClass('true-validate');
        });
    });

     function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');

        $(thisAlert).append('<span class="btn-hide-validate">&#xf136;</span>')
        $('.btn-hide-validate').each(function(){
            $(this).on('click',function(){
               hideValidate(this);
            });
        });
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();
        $(thisAlert).removeClass('alert-validate');
        $(thisAlert).find('.btn-hide-validate').remove();
    }
    

    /*==================================================================
    [ Show / hide contact ]*/
    $('.btn-hide-contact100').on('click', function(){
        $('.container-contact100').fadeOut(300);
    });

    $('.btn-show-contact100').on('click', function(){
        $('.container-contact100').fadeIn(300);
    });

})(jQuery);

document.getElementById('btn-cv').addEventListener('click', () => {
    if (index === 0) {
        console.log(document.getElementById(`company`).value);
    } else {
        console.log(document.getElementById(`company`).value);
        console.log(document.getElementById(`company${index}`).value);
    }
})

document.getElementById('btn-comp').addEventListener('click', () => {
    var compDiv = document.querySelector('.company-container');
    index++;
    var template = `<div class="container-all">
                    <p>Company ${index}</p>
                    <div class="wrap-input100">
					<input id="company${index}" class="input100" type="text" name="email" placeholder="Company">
					<span class="focus-input100"></span>
					<label class="label-input100" for="company">
						<span class="lnr lnr-apartment m-b-5"></span>
					</label>
                </div>
                <div class="wrap-input100">
					<input id="start-date${index}" class="input100" type="text" name="start-date" placeholder="Start date">
					<span class="focus-input100"></span>
					<label class="label-input100" for="phone">
						<span class="lnr lnr-calendar-full m-b-2"></span>
					</label>
                </div>
                <div class="wrap-input100">
					<input id="end-date${index}" class="input100" type="text" name="end-date" placeholder="End date">
					<span class="focus-input100"></span>
					<label class="label-input100" for="end-date">
						<span class="lnr lnr-calendar-full m-b-2"></span>
					</label>
                </div>
                <div class="wrap-input100">
					<textarea id="message${index}" class="input100" name="message" placeholder="Company description..."></textarea>
					<span class="focus-input100"></span>
					<label class="label-input100 rs1" for="message">
						<span class="lnr lnr-bubble"></span>
					</label>
                </div>
                <p>Role and Responsabilities</p>
                <div class="wrap-contact100 btn-add btn-role">
					<button id="btn-role" class="contact100-form-btn2">
						Add Role
					</button>
				</div>
                <div class="wrap-input100">
					<input id="role" class="input100" type="text" name="role" placeholder="Role">
					<span class="focus-input100"></span>
					<label class="label-input100" for="company">
						<span class="lnr lnr-pushpin m-b-5"></span>
					</label>
                </div>
            </div>
            `;
    compDiv.insertAdjacentHTML('afterbegin', template)

})

window.addEventListener('click', (e) => {
    if (e.target.matches('#btn-role')) {
        var compDiv = e.target.closest('.container-all');
        console.log(compDiv);
    indexRole++;
    var template = `<div class="wrap-input100">
					<input id="role" class="input100" type="text" name="role" placeholder="Role">
					<span class="focus-input100"></span>
					<label class="label-input100" for="company">
						<span class="lnr lnr-pushpin m-b-5"></span>
					</label>
                </div>`
    
    compDiv.insertAdjacentHTML('beforeEnd', template);
    }
})
// document.getElementById('btn-role').addEventListener('click', (e) => {
//            var compDiv = document.querySelector('.company-container');
//     indexRole++;
//     var template = `	<div class="wrap-input100">
// 					<input id="role" class="input100" type="text" name="role" placeholder="Role">
// 					<span class="focus-input100"></span>
// 					<label class="label-input100" for="company">
// 						<span class="lnr lnr-pushpin m-b-5"></span>
// 					</label>
//                 </div>`
    
//     compDiv.insertAdjacentHTML('afterend', template);
// })