document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll('a[href="index.html"],a[href="about.html"],a[href="inbound.html"],a[href="outbound.html"],a[href="contact.html"]');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetUrl = link.getAttribute('href');
            document.body.classList.add('fade-out');

            setTimeout(() => {
                window.location.href = targetUrl;
            }, 500); // Match the duration of the CSS transition
        });
    });

    window.addEventListener('pageshow', (event) => {
        if (event.persisted) {
            document.body.classList.remove('fade-out');
        }
    });

    window.addEventListener('load', () => {
        document.body.classList.remove('fade-out');
    });
});

const burger = document.querySelector(".burger");
const middle = document.querySelector(".middle1");
const btn1 = document.querySelector(".btn1");

burger.addEventListener(("click"),()=>{
btn1.classList.toggle("active");
middle.classList.toggle("active")})