$(document).ready(function() {
    let caja = $("#caja");
    let boton = $("button");

    // 1. Modificar texto y estilos
    caja.text("Nuevo contenido para mi caja");
    caja.css({
        "background-color": "red",
        "border": "2px solid black",
        "color": "white",
        "width": "250px",
        "height": "250px",
        "cursor": "pointer"
    });

    // 2. Evento Click y Append
    caja.click(function() {
        alert("Has dado click a la caja.");
        caja.append("<p>Has dado un click a la caja</p>");
    });

    // 3. Efectos visuales
    boton.click(function() {
        caja.fadeToggle();
    });

    // 4. Consumo de API mediante Ajax
// Petición AJAX por GET a Reqres
    $.ajax({
        type: "GET",
        url: "https://reqres.in/api/users?page=2",
        headers: {
            "x-api-key": "reqres-free-v1" // API Key mostrada en el video
        },
        success: function(users) {
            // Recorrer el array de usuarios devuelto (users.data)
            users.data.forEach(function(user) {
                // Notar que la propiedad es first_name
                caja.append("<p>" + user.first_name + "</p>");
            });
        },
        error: function(err) {
            console.error("Error al obtener los datos:", err);
        }
    });
});