document.addEventListener("DOMContentLoaded", function () {
    const dropdowns = document.querySelectorAll(".drop-down");

    dropdowns.forEach(dropdown => {
        const btn = dropdown.querySelector(".drop-btn");
        const content = dropdown.querySelector(".dropdown-content");
        const arrow = btn.querySelector("#arrow-icon");

        btn.addEventListener("click", function (event) {
            event.stopPropagation();
            const isOpen = dropdown.classList.contains("show");

            closeAllDropdowns(); 

            if (!isOpen) {
                dropdown.classList.add("show");
                arrow.style.transform = "rotate(180deg)";
            }
        });

        document.addEventListener("click", function () {
            closeAllDropdowns();
        });
    });

    function closeAllDropdowns() {
        document.querySelectorAll(".drop-down").forEach(drop => drop.classList.remove("show"));
        document.querySelectorAll("#arrow-icon").forEach(arrow => arrow.style.transform = "rotate(0deg)");
    }
});