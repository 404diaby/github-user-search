/**
 * Theme toggle functionality for the application.
 *
 * This module provides functions to initialize and toggle the theme of the application.
 * The theme is stored in local storage and updated in the DOM accordingly.
 *
 * @module themeToggle
 */

const htmlElem = document.querySelector("html");
const themeToggle = document.querySelector(".header-theme-switch-btn");

themeToggle.addEventListener("click", () => {
  setTheme();
});

/**
 * Initializes the theme of the application.
 *
 * Retrieves the current theme from local storage, or sets it to 'dark' if none is found.
 * Adds the current theme class to the HTML element and updates the theme toggle button.
 *
 * @example
 * initTheme();
 */
const initTheme = () => {
  const currentTheme = localStorage.getItem("theme") ?? "dark";

  htmlElem.classList.add(currentTheme);
  updateThemeDOM(currentTheme);
};

/**
 * Initializes the theme of the application.
 *
 * Retrieves the current theme from local storage, or sets it to 'dark' if none is found.
 * Adds the current theme class to the HTML element and updates the theme toggle button.
 *
 * @example
 * initTheme();
 */
const setTheme = () => {
  const currentTheme = localStorage.getItem("theme") ?? "dark";
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  htmlElem.classList.replace(currentTheme, newTheme);
  localStorage.setItem("theme", newTheme);
  updateThemeDOM(newTheme);
};

/**
 * Updates the theme toggle button in the DOM.
 *
 * Removes the old theme class and adds the new theme class to the theme toggle button.
 * Updates the text content of the theme toggle button.
 *
 * @param {string} currentTheme - The current theme of the application.
 * @example
 * updateThemeDOM('dark');
 */
const updateThemeDOM = (currentTheme) => {
  const buttonText = themeToggle.querySelector("#theme-switch-text");
  if (currentTheme === "dark") {
    themeToggle.classList.remove("light");
    themeToggle.classList.add("dark");
    buttonText.textContent = "Light";
  }
  if (currentTheme === "light") {
    themeToggle.classList.remove("dark");
    themeToggle.classList.add("light");
    buttonText.textContent = "Dark";
  }
};
export { initTheme, setTheme };
