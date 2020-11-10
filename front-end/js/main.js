let index = 0;
let indexRole = 1;
let indexCert = 0;
let indexStud = 0;
let indexLang = 0;
let roleContor = 1;

pdfMake.fonts = {
       Roboto: {
     normal: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Regular.ttf',
     bold: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Medium.ttf',
     italics: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Italic.ttf',
     bolditalics: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-MediumItalic.ttf'
   },
}

let userData = {
    info: "",
    applyingJob: "",
    companies: [],
    certifications: [],
    studies: [{
        university: "",
        faculty: "",
        startYear: "",
        endYear: "",
        degree: ""
    }],
    languages: [{
        language: "",
        writing: "",
        reading: "",
        speaking: ""
    }]
};
    
    
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
        let dd = {
        content: [
                {
                image: 'data:image/png;base64,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',
                width: 150
                }
            ],
            styles: {
                subheader: {
                    fontSize: 18,
                    bold: true
                },
                normalBold: {
                    fontSize: 12,
                    bold:true
                },

                normal: {
                    fontSize: 12,
                    bold:false
                },

		        header: {
			        fontSize: 21,
			        bold: true
		        },
		bigger: {
			fontSize: 14,
			italics: true
                },
                bold: {
                    fontSize: 14,
                    bold:true
        }
	}

    }
    userData.companies = [];
    //populate the json
    userData.applyingJob = document.getElementById('job').value;
    dd.content.push({text: '\n'+userData.applyingJob +'\n\n', style: 'subheader'});
    userData.info = document.getElementById('message').value;
    dd.content.push({ text: userData.info + '\n', style: 'bold' });
    console.log(index);
    for (let i = 1; i <= index; i++){
        let companyDiv = document.querySelector(`.container-all${i}`);
        dd.content.push({
            text: [
                { text: '\n' + document.getElementById(`company${i}`).value, style: 'bold' },
                { text: ', ' + document.getElementById(`city${i}`).value, style: 'bold' },
                { text: '\n' + document.getElementById(`start-date${i}`).value + ' - ', style: 'bold' },
                { text: document.getElementById(`end-date${i}`).value, style: 'bold' },
                { text: ', ' + document.getElementById(`job${i}`).value + '.', style: 'bold' },
                { text: '\n\nCompany description: ', style: 'normalBold' },
                { text: document.getElementById(`message${i}`).value, style: 'normal' },
                { text: '\n\nRoles and Responsabilities: \n', style: 'normalBold'}
            ]
        })
        console.log(roleContor, indexRole, i);
        const roles = companyDiv.querySelectorAll('.role-class');
        roles.forEach(role => {
            dd.content.push({text: `- ${role.value}`, style: 'normal' })
        })
    }
    pdfMake.createPdf(dd).open();
    console.log(userData);

})

document.getElementById('btn-comp').addEventListener('click', (e) => {
    e.preventDefault();
    var compDiv = document.querySelector('.company-container');
    index++;
    var template = `<div class="container-all${index}">
                    <h6><strong>Company ${index}</strong></h6>
                    <div class="wrap-input100">
					<input id="company${index}" class="input100" type="text" name="email" placeholder="Company">
					<span class="focus-input100"></span>
					<label class="label-input100" for="company">
						<span class="lnr lnr-apartment m-b-5"></span>
					</label>
                </div>
                <div class="wrap-input100">
					<input id="city${index}" class="input100" type="text" name="email" placeholder="City">
					<span class="focus-input100"></span>
					<label class="label-input100" for="company">
						<span class="lnr lnr-earth m-b-5"></span>
					</label>
                </div>
                  <div class="wrap-input100">
					<input id="job${index}" class="input100" type="text" name="job" placeholder="Job title">
					<span class="focus-input100"></span>
					<label class="label-input100" for="company">
						<span class="lnr lnr-briefcase m-b-5"></span>
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
					<input id="role${index}${indexRole}" class="input100 role-class" type="text" name="role" placeholder="Role">
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
        var compDiv = e.target.closest(`.container-all${index}`);
        console.log(compDiv);
    indexRole++;
    var template = `<div class="wrap-input100">
					<input id="role${index}${indexRole}" class="input100 role-class" type="text" name="role" placeholder="Role">
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