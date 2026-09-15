const links = [
  { name: "Twitter / X", url: "https://x.com/sarahofflife" },
];

const linksContainer = document.getElementById("links");

for (const link of links) {
  const a = document.createElement("a");
  a.className = "link";
  a.href = link.url;
  a.textContent = link.name;

  if (!link.url.startsWith("mailto:")) {
    a.target = "_blank";
    a.rel = "noopener noreferrer";
  }

  linksContainer.appendChild(a);
}
