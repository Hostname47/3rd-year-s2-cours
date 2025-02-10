document.addEventListener("DOMContentLoaded", async function () {
  const imageContainer = document.getElementById("seance-images");

  try {
    // Fetch the list of files from the server
    const response = await fetch("."); // Fetch current directory listing
    const text = await response.text();

    console.log(text);

    // Parse the response to extract image file names (Assumes an Apache/Nginx directory listing format)
    const imageExtensions = ["jpg", "jpeg", "png", "gif", "webp"];
    const parser = new DOMParser();
    const doc = parser.parseFromString(text, "text/html");

    // Extract file names from links in the directory listing
    const links = Array.from(doc.querySelectorAll("a"));
    const imageFiles = links
      .map((a) => a.getAttribute("href"))
      .filter((href) =>
        imageExtensions.some((ext) => href.toLowerCase().endsWith(ext))
      );

    // Create and append image elements
    imageFiles.forEach((file) => {
      const img = document.createElement("img");
      img.src = file; // Adjusted path to match the same level as index.html
      img.alt = "Image";
      img.style.width = "100px"; // Adjust as needed
      img.style.margin = "5px";
      imageContainer.appendChild(img);
    });
  } catch (error) {
    console.error("Error fetching images:", error);
  }
});
