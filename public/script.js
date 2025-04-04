document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("dataForm");
  
    form.addEventListener("/submit", async (event) => {
      event.preventDefault();
  
      // Create form data object
      const formData = new FormData(form);
      const formObject = {};
      formData.forEach((value, key) => {
        formObject[key] = value;
      });
  
      // Send data to the server
      try {
        const response = await fetch("/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formObject),
        });
        // Check if the response is ok
        const result = await response.json();
        document.getElementById("message").innerText = result.message;
        form.reset();
      } catch (error) {
        console.error("Error:", error);
      }
    });
  });
  