document.addEventListener("DOMContentLoaded", function () {
  const downloadBtn = document.getElementById("downloadBtn");

  if (downloadBtn) {
    downloadBtn.addEventListener("click", function () {
      const element = document.body;

      const opt = {
        margin: 0.5,
        filename: "mi_cv.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
      };

      html2pdf().set(opt).from(element).save();
    });
  }
});

// Nuevo: manejar el envío del formulario de contacto
const form = document.querySelector("form");
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevenir que se recargue la página inmediatamente

    const formData = new FormData(form);

    fetch(form.action, {
      method: "POST",
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        alert("✅ Tu mensaje fue enviado exitosamente.");
        form.reset(); // Limpiar el formulario
      } else {
        alert("❌ Hubo un error al enviar tu mensaje. Intenta nuevamente.");
      }
    })
    .catch(error => {
      console.error(error);
      alert("⚠️ Error de conexión. Por favor, intenta más tarde.");
    });
  });
};