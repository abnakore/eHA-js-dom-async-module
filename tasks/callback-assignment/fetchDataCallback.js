function fetchDataWithCallback(callback) {
  setTimeout(() => {
    const error = true;
    try {
      if (error) throw new Error("Fetch Failed");
      // Call the callback with 'Data fetched'
      callback("Data fetched");
    } catch (error) {
      console.error("Error:", error.message);
    }
  }, 2000);
}

fetchDataWithCallback((message) => console.log(message));
