import { register, applyText } from "https://cdn.skypack.dev/@canva/app-sdk";

register("sophia-auto-fill", () => {
  return {
    render: () => {
      const container = document.getElementById("root");

      container.innerHTML = `
        <h2>Inserir Ferramenta SOPHIA</h2>
        <textarea id="input" rows="15" cols="40" placeholder="Cole aqui o JSON..."></textarea>
        <br />
        <button id="btn">Preencher Campos</button>
      `;

      document.getElementById("btn").addEventListener("click", async () => {
        try {
          const json = JSON.parse(document.getElementById("input").value);

          await applyText({ element_id: "titulo", text: json.titulo });
          await applyText({ element_id: "instrucao", text: json.instrucao });
          await applyText({ element_id: "metafora", text: json.metafora });
          await applyText({ element_id: "tarefa", text: json.tarefa });

          alert("Texto aplicado com sucesso!");
        } catch (e) {
          alert("Erro no JSON.");
        }
      });
    }
  };
});
