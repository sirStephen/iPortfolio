(function(){
    emailjs.init('user_E3YPdTZlyU0HxmDIs86rp');
})();

const navSlide = () => {
    let menu = document.querySelector('.menu');
    let nav = document.querySelector('.nav-links');
    let navLinks = document.querySelectorAll('.nav-links li');
    let close = document.querySelector('.close');
    
    menu.addEventListener('click', (event) => {
        event.preventDefault();
        nav.classList.add('nav-active');
        close.classList.remove('gone');
        close.classList.add('display');
    
        navLinks.forEach((link, index) => {
            // if (link.style.animation) {
            //     link.style.animation = '';
            // } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
                console.log(index/7)
            // }
        })
    })

    close.addEventListener('click', (event) => {
        event.preventDefault();
        nav.classList.remove('nav-active');
        close.classList.remove('display');
        close.classList.add('gone');
    })
}

navSlide();

var TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };
  
  TxtRotate.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
  
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
  
    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
  
    var that = this;
    setTimeout(function() {
      that.tick();
    }, 50);
  };
  
//   window.onload = () => {
    let form = document.querySelector('#form');
    let name = document.querySelector('#name');
    let email = document.querySelector('#email');
    let message = document.querySelector('#message');
    let nameError = document.querySelector('#name-error-message');
    let emailError = document.querySelector('#email-error-message');
    let messageError = document.querySelector('#message-error-message');
    let hide = document.querySelector('.hide');
    
    const validation = () => {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            hide.classList.remove('hide');
            console.log(hide);
            if (name.value === '' || name.value === null) {
                event.preventDefault();
                nameError.textContent = 'Please fill name field';
                nameError.style.color = 'red';
                nameError.style.fontSize = '1.2rem';
            }
            
            if (email.value === '' || email.value === null) {
                event.preventDefault();
                emailError.textContent = 'Invalid email';
                emailError.style.color = 'red';
                emailError.style.fontSize = '1.2rem';
            }
            
            if (message.value === '' || message.value === null) {
                event.preventDefault();
                messageError.textContent = 'Please fill in a message';
                messageError.style.color = 'red';
                messageError.style.fontSize = '1.2rem';
            }

            let template_params = {
                name: name.value,
                email: email.value,
                message: message.value
            }

            if (name.value.length > 0 && email.value.length > 0 && message.value.length > 0) {
                let service_id = "default_service";
                let template_id = "personal_contact_form";
                
                emailjs.send(service_id, template_id, template_params).then((response) => {
                    swal({
                        title: "Thank You!",
                        text: "Your message was sent to me.",
                        icon: "success",
                        button: "close",
                        dangerMode: true,
                    });
                    messageError.textContent = '';
                    name.value = '';
                    email.value = '';
                    message.value = '';
                    hide.classList.add('hide');

                }, (error) => {
                    console.log('FAILED...', error);
                });
            }
        })
        
    }

    var elements = document.getElementsByClassName('txt-rotate');
    for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-rotate');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate >";
  //   css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #ffffff }";
    document.body.appendChild(css);

    validation();
// }