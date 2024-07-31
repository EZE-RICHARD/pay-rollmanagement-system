const toggleSideBar = document.querySelector(".toggle_btn");
const sideBar = document.querySelector(".aside");

toggleSideBar.addEventListener("click", () => {
  sideBar.classList.toggle("toggle_side");
});

//  select_all
// select_employee
const select_checkbox = document.querySelector(".select_all");

if (select_checkbox) {
  document.querySelector(".select_all").addEventListener("change", function () {
    // Get all checkboxes with class 'row-checkbox'
    const checkboxes = document.querySelectorAll(".select_employee");

    // Set the checked state to match the header checkbox
    checkboxes.forEach((checkbox) => {
      checkbox.checked = this.checked;
    });
  });
}

const currentMonthIndex = new Date().getMonth();

// Array of month values matching the options
const monthValues = [
  "january",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december",
];

// Get the select element
const selectElement = document.getElementById("monthly_filter");

if (selectElement) {
  // Set the selected index based on the current month
  selectElement.value = monthValues[currentMonthIndex];
}
