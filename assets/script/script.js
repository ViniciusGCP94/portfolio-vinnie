    let buttonSaibaMais = document.getElementById("saibaMais");
    let modal = document.getElementById("modal");
    let buttonclose = document.getElementById("close");

    function openModal (){
        modal.classList.remove("hidden");
        document.body.classList.add('overflow-hidden')
    }

    buttonSaibaMais.addEventListener('click', openModal)
    
    function closeModal () {
        modal.classList.add("hidden");
        document.body.classList.remove('overflow-hidden')
    }

    buttonclose.addEventListener('click', closeModal)
