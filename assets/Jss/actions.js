let buttonState = "mostrar todos";

const button = document.querySelector(".btn-primary");

function showAll() {
    // Altera a classe d-none para d-block em todos os elementos item com a classe d-none
    document.querySelectorAll(".item.extra").forEach(item => item.classList.remove("d-none"));
  
    // Altera o estado do botão para ocultar
    buttonState = "ocultar";
  
    // Altera o texto do botão para "Ocultar"
    button.textContent = "Ocultar";
}

function hideAll() {
    // Remove a classe d-none de todos os elementos item com a classe d-none
    document.querySelectorAll(".item.extra").forEach(item => item.classList.add("d-none"));
  
    // Altera o estado do botão para mostrar todos
    buttonState = "mostrar todos";
  
    // Altera o texto do botão para "Mostrar todos"
    button.textContent = "Exibir todos";
}

  function toggleVisibility() {
    if (buttonState === "mostrar todos") {
        showAll();
    } else if (buttonState === "ocultar") {
        hideAll();
    }
}
  
/////////////////////////////////////////////

let xpstate = "visible";

const xp = document.querySelector(".more");

function showAll2() {
    // Altera a classe d-none para d-block em todos os elementos item com a classe d-none
    document.querySelectorAll(".more").forEach(item => item.classList.remove("d-none"));
  
    // Altera o estado do botão para ocultar
    xpstate = "ocultar";
  
    // Altera o texto do botão para "Ocultar"
    
}

function hideAll2() {
    // Remove a classe d-none de todos os elementos item com a classe d-none
    document.querySelectorAll(".more").forEach(item => item.classList.add("d-none"));
  
    // Altera o estado do botão para mostrar todos
    xpstate = "visible";
  
    // Altera o texto do botão para "Mostrar todos"
    
}

function toggleVisibilityXp() {
    const button = document.querySelector(".show_more");

    if (xpstate === "visible") {
        showAll2();
        button.textContent = "Ocultar";
    } else if (xpstate === "ocultar") {
        hideAll2();
        button.textContent = "Exibir todas";
    }
}

