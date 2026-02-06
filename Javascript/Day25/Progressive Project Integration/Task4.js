async function safeApiCall() {
  try {
    const data = await apiRequest("/login");
    return data;
  } catch (error) {
    console.error("API Error:", error);
    throw error; 
  }
}
