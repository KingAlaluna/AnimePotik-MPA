window.onerror = function(message, source, lineno, colno, error) {
  console.error("Помилка:", message, "в файлі:", source);
  return false;
};

window.onunhandledrejection = function(event) {
  console.error("Помилка в Промісі:", event.reason);
};
