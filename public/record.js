// Progressive enhancements; all facts, citations, and family links remain usable without JS.
for (const button of document.querySelectorAll("[data-copy]")) {
  button.hidden = false;
  button.addEventListener("click", async () => {
    const content = document.getElementById(button.dataset.copy);
    const status = document.getElementById("citation-status");
    try {
      await navigator.clipboard.writeText(content.textContent);
      status.textContent = "Citation copied.";
    } catch {
      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(content);
      selection.removeAllRanges();
      selection.addRange(range);
      status.textContent =
        "Copy is unavailable here. Citation selected; press Ctrl+C or Command+C to copy.";
    }
  });
}
document.addEventListener("keydown", (event) => {
  if (
    event.defaultPrevented ||
    event.altKey ||
    event.ctrlKey ||
    event.metaKey ||
    event.shiftKey
  )
    return;
  const target = event.target;
  if (
    target.isContentEditable ||
    target.closest(
      'input, textarea, select, button, a, summary, [role="tab"], [role="slider"]',
    )
  )
    return;
  const relation =
    event.key === "ArrowLeft"
      ? "prev"
      : event.key === "ArrowRight"
        ? "next"
        : null;
  if (!relation) return;
  const link = document.querySelector(
    `.family-navigation a[rel="${relation}"]`,
  );
  if (link) {
    event.preventDefault();
    window.location.assign(link.href);
  }
});
