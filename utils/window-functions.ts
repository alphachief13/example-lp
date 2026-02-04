type Where = "top" | "bottom";

export function scrollWindow(
  where: Where,
  behavior: ScrollBehavior,
  elementId?: string
) {
  if (elementId) {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior });
    }
    return;
  }

  window.scrollTo({
    top: where === "top" ? 0 : document.body.scrollHeight,
    behavior,
  });
}
