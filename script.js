// Obtener la imagen del chat de WhatsApp
var whatsappChat = document.getElementById('whatsapp-chat');

// Función para mover la imagen conforme se baja la página
function moveImage() {
    var scrollY = window.scrollY || window.pageYOffset;
    whatsappChat.style.transform = 'translateY(' + scrollY + 'px)';
}

// Llamar a la función una vez al cargar la página para posicionar la imagen correctamente
moveImage();

// Obtener la imagen del chat de WhatsApp
var TelegramChat = document.getElementById('telegram-chat');

// Función para mover la imagen conforme se baja la página
function moveImage() {
    var scrollY = window.scrollY || window.pageYOffset;
    TelegramChat.style.transform = 'translateY(' + scrollY + 'px)';
}

// Llamar a la función una vez al cargar la página para posicionar la imagen correctamente
moveImage();