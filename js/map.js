document.addEventListener("DOMContentLoaded",(event) => { 

    setTimeout(() => {
        document.querySelector("#load-iframe-map").innerHTML = `
        <iframe class="contact__iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25060.462372440063!2d-0.7102817693646494!3d38.26656079423944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd63b42c4ece57a3%3A0xd9a5de7c6be724dd!2sElche%2C%20Alicante%2C%20Espa%C3%B1a!5e0!3m2!1ses!2sfr!4v1722265782589!5m2!1ses!2sfr"></iframe>
           ` ;
    }, 500);

});