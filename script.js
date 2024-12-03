document.addEventListener("DOMContentLoaded", () => {
  const gimimoData = document.getElementById("gimimo-data");
  const asmensKodas = document.getElementById("asmens-kodas");
  const padetis = document.getElementById("padetis");
  const sutuoktinisLaukai = document.getElementById("sutuoktinis-laukai");

  gimimoData.addEventListener("change", () => {
      const gimData = new Date(gimimoData.value);
      const year = gimData.getFullYear();
      const month = ("0" + (gimData.getMonth() + 1)).slice(-2);
      const day = ("0" + gimData.getDate()).slice(-2);
      asmensKodas.value = `${year}${month}${day}****`;
  });

  padetis.addEventListener("change", () => {
      sutuoktinisLaukai.style.display = padetis.value === "vedes" ? "block" : "none";
  });

  document.getElementById("anketa").addEventListener("submit", (e) => {
      e.preventDefault();

      const formData = new FormData(e.target);
      const data = Object.fromEntries(formData);

      console.log("Anketos duomenys:", data);
      alert(`Surinkti duomenys:\n${JSON.stringify(data, null, 2)}`);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const telefonas = document.getElementById("telefonas");

  telefonas.addEventListener("input", () => {
      const value = telefonas.value;
      if (!/^\+?\d*$/.test(value)) {
          telefonas.setCustomValidity("Telefono numeris turi prasidėti su + ir turėti tik skaičius.");
      } else {
          telefonas.setCustomValidity("");
      }
  });
});
