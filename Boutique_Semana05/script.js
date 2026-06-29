document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formProducto");
  const lista = document.getElementById("listaProductos");
  const total = document.getElementById("totalRegistros");

  let contador = 0;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre");
    const descripcion = document.getElementById("descripcion");
    const categoria = document.getElementById("categoria");

    let valido = true;

    [nombre, descripcion, categoria].forEach(campo => {
      if (!campo.value.trim()) {
        campo.classList.add("is-invalid");
        valido = false;
      } else {
        campo.classList.remove("is-invalid");
      }
    });

    if (!valido) return;

    // Crear elemento dinámico
    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";
    li.innerHTML = `
      <div>
        <strong>${nombre.value}</strong> - ${descripcion.value} 
        <span class="badge bg-success ms-2">${categoria.value}</span>
      </div>
      <button class="btn btn-outline-danger btn-sm">Eliminar</button>
    `;

    // Botón eliminar
    li.querySelector("button").addEventListener("click", () => {
      lista.removeChild(li);
      contador--;
      total.textContent = contador;
    });

    lista.appendChild(li);
    contador++;
    total.textContent = contador;

    form.reset();
  });
});