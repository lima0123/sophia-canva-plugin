export function register(name, callback) {
  console.log("Fake register called", name);
  callback().render();
}

export async function applyText({ element_id, text }) {
  console.log(`Fake applyText to ${element_id}: ${text}`);
}
