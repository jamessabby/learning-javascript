 // Simulate a delay (like waiting for a server)
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("✅ Data loaded from server");
    }, 2000);
  });
}

// Using async/await
async function getData() {
  console.log("1. Start fetching data...");
  
  const result = await fetchData(); // waits here 2 seconds
  
  console.log("2. Finished waiting!");
  console.log("3. Result:", result);
}

console.log("0. Program started");
getData();
console.log("4. Program continues while waiting...");
