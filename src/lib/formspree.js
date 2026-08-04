// Shared Formspree endpoint + helpers for every site form.
export const FORMSPREE_ENDPOINT = "https://formspree.io/f/xaqrvvgj";

// Submit a FormData object (multipart) — use when form inputs carry `name` attributes.
export async function submitFormspreeFormData(formData) {
  const res = await fetch(FORMSPREE_ENDPOINT, {
    method: "POST",
    body: formData,
    headers: { Accept: "application/json" },
  });
  if (!res.ok) throw new Error("Form submission failed");
  return res.json();
}

// Submit a plain JSON object — use when fields are held in React state.
export async function submitFormspreeJson(data) {
  const res = await fetch(FORMSPREE_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Form submission failed");
  return res.json();
}