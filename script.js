document.addEventListener('DOMContentLoaded', function () {
    const title = "Homelab Services";
    const typingSpeed = 150; // Adjust typing speed in milliseconds
    let index = 0;

    function type() {
        if (index < title.length) {
            document.getElementById('title').innerHTML += title.charAt(index);
            index++;
            setTimeout(type, typingSpeed);
        } else {
            setTimeout(() => {
                document.getElementById('title').classList.remove('blinking-cursor');
            }, typingSpeed * 2);
        }
    }

    type();
});
