document.addEventListener("DOMContentLoaded", () => {
    let popUp = document.getElementById("cookiePopup");
    let acceptButton = document.getElementById("acceptCookie");
  
    // Voeg een eventlistener toe aan de knop wanneer deze wordt geklikt
    acceptButton.addEventListener("click", () => {
      // Maak een datumobject aan
      let d = new Date();
      // Verhoog de huidige tijd met 1 minuut (cookie verloopt na 1 minuut)
      d.setMinutes(2 + d.getMinutes());
      // Maak een cookie met de naam = myCookieName, waarde = thisIsMyCookie en verloopdatum = 1 minuut
      document.cookie = "myCookieName=thisIsMyCookie; expires=" + d.toUTCString() + ";";
      // Verberg het popupvenster
      popUp.style.visibility = "hidden";
    });
  
    // Controleer of de cookie al aanwezig is
    const checkCookie = () => {
      // Lees de cookie en splits op "="
      let input = document.cookie.split("=");
      // Controleer of onze cookie bestaat
      if (input[0] == "myCookieName") {
        // Verberg het popupvenster
        popUp.style.visibility = "hidden";
      } else {
        // Toon het popupvenster
        popUp.style.visibility = "visible";
      }
    };
  
    // Controleer of de cookie bestaat bij het laden van de pagina
    checkCookie();
  });
  