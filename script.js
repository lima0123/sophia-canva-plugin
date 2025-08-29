import { register, applyText } from "./mock-sdk.js";

register("sophia-auto-fill", () => {
  return {
    render: () => {
      const container = document.createElement("div");
      container.innerHTML = `
        <h2>Inserir Ferramenta SOPHIA</h2>
        <textarea id="input" rows="15" cols="40" placeholder="Cole aqui o JSON..."></textarea>
        <br />
        <button id="btn">Preencher Campos</button>
      `;

      container.querySelector("#btn").addEventListener("click", async () => {
        try {
          const json = JSON.parse(container.querySelector("#input").value);

          await applyText({ element_id: "titulo", text: json.titulo });
          await applyText({ element_id: "instrucao", text: json.instrucao });
          await applyText({ element_id: "metafora", text: json.metafora });
          await applyText({ element_id: "tarefa", text: json.tarefa });

          alert("Texto aplicado com sucesso!");
        } catch (e) {
          alert("Erro no JSON.");
        }
      });

      return container;
    },
  };
});

register();
