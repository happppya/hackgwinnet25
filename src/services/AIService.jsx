export async function queryGemini(promptText) {
  return; // to stop people from using it for now

  const url =
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-lite:generateContent";
  const apiKey = "AIzaSyDaCzjjkldIae-DlH7yzbQjSEiWUWAXQT0";

  const payload = {
    contents: [
      {
        parts: [{ text: promptText }],
      },
    ],
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "x-goog-api-key": apiKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();
    const result = data.candidates[0].content.parts[0].text;

    console.log("Generated text:", result);
    return result;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}
