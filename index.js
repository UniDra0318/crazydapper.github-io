var navLinks = document.getElementById("navLinks")

        function hideMenu(){
            navLinks.style.marginRight = "0"
            navLinks.style.width = "0"
        }
        function showMenu(){
            navLinks.style.marginRight = "200px"
            navLinks.style.width = "200px"
        }

        var hsla = 0;
        var bg = document.getElementById('gallerymodels');
        setInterval(()=>{
        hsla = hsla+1;
        bg.style.background = `hsla(${hsla},90%, 20%, 1)`;
        },25);
