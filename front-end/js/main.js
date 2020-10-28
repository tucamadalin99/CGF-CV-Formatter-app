let index = 0;
let indexRole = 0;
let indexCert = 0;
let indexStud = 0;
let indexLang = 0;
let alineat = 20;
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

    //    $(thisAlert).append('<span class="btn-hide-validate">&#xf136;</span>')
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

document.getElementById('btn-cv').addEventListener('click', (e) => {
    e.preventDefault();
    var doc = new jsPDF('p', 'mm', 'a4');
    var img = new Image();
    var width = doc.internal.pageSize.width;
    var height = doc.internal.pageSize.height;
    img.src = "../images/logo.png";
    img.onload = function () {
        doc.addImage(img, 'png', alineat, 0, 60, 55);
        doc.setFontSize(14);
        doc.setFont('sans-serif');
        doc.setFontStyle('bold');
        var strArr = doc.splitTextToSize(document.getElementById('message').value, width - alineat - 10);
        doc.text(strArr, alineat, 50);
        doc.save('output.pdf')
        
    }
   

})

document.getElementById('btn-comp').addEventListener('click', (e) => {
    e.preventDefault();
    var compDiv = document.querySelector('.company-container');
    index++;
    var template = `<div class="container-all">
                    <h6><strong>Company ${index}</strong></h6>
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
    e.preventDefault();
    if (e.target.matches('#btn-role')) {
        var compDiv = e.target.closest('.container-all');
        console.log(compDiv);
    indexRole++;
    var template = `<div class="wrap-input100">
					<input id="role${indexRole}" class="input100" type="text" name="role" placeholder="Role">
					<span class="focus-input100"></span>
					<label class="label-input100" for="company">
						<span class="lnr lnr-pushpin m-b-5"></span>
					</label>
                </div>`
    
    compDiv.insertAdjacentHTML('beforeEnd', template);
    }
})

document.getElementById('btn-cert').addEventListener('click', (e) => {
    e.preventDefault();
    var certDiv = document.querySelector('.other-container');
    indexCert++;
    var template = `<div class="wrap-input100">
					<input id="cert${indexCert}" class="input100" type="text" name="cert${indexCert}" placeholder="Certification#${indexCert}">
					<span class="focus-input100"></span>
					<label class="label-input100" for="company">
						<span class="lnr lnr-license m-b-5"></span>
					</label>
                </div>`
    certDiv.insertAdjacentHTML('beforeEnd', template);

})

document.getElementById('btn-stud').addEventListener('click', (e) => {
    e.preventDefault();
    var certDiv = document.querySelector('.studies-container');
    indexStud++;
    var template = `<div class="container-stud">
                    <div class="wrap-input100">
					<input id="stud${indexStud}" class="input100" type="text" name="stud${indexStud}" placeholder="University#${indexStud}">
					<span class="focus-input100"></span>
					<label class="label-input100" for="stud${indexStud}">
						<span class="lnr lnr-graduation-hat m-b-5"></span>
					</label>
                </div>
                 <div class="wrap-input100">
					<input id="faculty" class="input100" type="text" name="faculty" placeholder="Faculty">
					<span class="focus-input100"></span>
					<label class="label-input100" for="faculty">
						<span class="lnr lnr-graduation-hat m-b-5"></span>
					</label>
                </div>
                <div class="wrap-input100">
					<input id="start-year" class="input100" type="text" name="start-year" placeholder="Start Year">
					<span class="focus-input100"></span>
					<label class="label-input100" for="start-year">
						<span class="lnr lnr-calendar-full m-b-5"></span>
					</label>
                </div>
                <div class="wrap-input100">
					<input id="end-year" class="input100" type="text" name="end-year" placeholder="End Year">
					<span class="focus-input100"></span>
					<label class="label-input100" for="end-year">
						<span class="lnr lnr-calendar-full m-b-5"></span>
					</label>
                </div>
                 <div class="wrap-input100">
					<input id="degree" class="input100" type="text" name="degree" placeholder="Degree">
					<span class="focus-input100"></span>
					<label class="label-input100" for="degree">
						<span class="lnr lnr-license m-b-5"></span>
					</label>
                </div>
            </div>
            `
    
    certDiv.insertAdjacentHTML('beforeEnd', template);
    
})

document.getElementById('btn-lang').addEventListener('click', (e) => {
    e.preventDefault();
    var langDiv = document.querySelector('.lang-container');
    indexLang++;
    var template = `
        <div class="lang-container">
                    <div class="wrap-input100">
					<input id="lang${indexLang}" class="input100" type="text" name="lang${indexLang}" placeholder="Language#${indexLang}">
					<span class="focus-input100"></span>
					<label class="label-input100" for="stud${indexStud}">
						<span class="lnr lnr-graduation-hat m-b-5"></span>
					</label>
                </div>
                 <div class="wrap-input100">
					<input id="wirting" class="input100" type="text" name="writing" placeholder="Writing">
					<span class="focus-input100"></span>
					<label class="label-input100" for="faculty">
						<span class="lnr lnr-graduation-hat m-b-5"></span>
					</label>
                </div>
                <div class="wrap-input100">
					<input id="speaking" class="input100" type="text" name="speaking" placeholder="Speaking">
					<span class="focus-input100"></span>
					<label class="label-input100" for="start-year">
						<span class="lnr lnr-calendar-full m-b-5"></span>
					</label>
                </div>
                <div class="wrap-input100">
					<input id="proficiency" class="input100" type="text" name="proficiency" placeholder="Proficiency">
					<span class="focus-input100"></span>
					<label class="label-input100" for="end-year">
						<span class="lnr lnr-calendar-full m-b-5"></span>
					</label>
                </div>`
            langDiv.insertAdjacentHTML('beforeEnd', template);

})

 function createPDF(){
           var doc = new jsPDF();
           doc.text(document.getElementById('message').value, 10, 10);

           //
           doc.save('output.pdf')
        }