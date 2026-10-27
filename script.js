// Esperamos a que todo el contenido HTML se cargue antes de ejecutar el JS
document.addEventListener('DOMContentLoaded', () => {

    // Seleccionamos todos los botones de las preguntas
    const accordionHeaders = document.querySelectorAll('.accordion-boton');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            // Obtenemos el elemento padre (.accordion-item) del botón clickeado
            const currentItem = header.parentElement;
            
            // Verificamos si la sección actual ya se encuentra abierta
            const isOpen = currentItem.classList.contains('active');

            // 1. Cerramos TODAS las secciones activas
            const allItems = document.querySelectorAll('.accordion-item');
            allItems.forEach(item => {
                item.classList.remove('active');
            });

            // 2. Si la sección que tocamos NO estaba abierta, la abrimos
            if (!isOpen) {
                currentItem.classList.add('active');
            }
        });
    });

});