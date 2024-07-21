import { useState } from "react";

export const useOnSubmit = () => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (selectedOptions) => {
    try {
      // Simulating a POST request to a mock API endpoint
      setLoading(true);
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(selectedOptions),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit data");
      }

      const data = await response.json();
      setResult(data); // Setting the result to the response data
    } 
    catch (error) {
      console.error("Error submitting data:", error);
      setResult(null); // Clearing result on error
    }
    finally {
      setLoading(false);
    }
  };

  return { result, handleSubmit, loading };
};
