import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function (req, res) {

  const prompt = req.body.question;

  if (prompt.trim().length === 0) {
    res.status(400).json({
      error: {
        message: "Please enter a valid query",
      }
    });
    return;
  }
  
  try {
 
const response = await openai.chat.completions.create({
  model: "gpt-4",
  messages: [
    {
      "role": "system",
      "content": "You are the agent to provide, Please build response in html format, no link attached. "
    },
    {
      "role": "user",
      "content": req.body.question
    }
      ],
  temperature: 0.5,
  max_tokens: 3500,
  top_p: 1,
  frequency_penalty: 0,
  presence_penalty: 0,
});
    res.status(200).json({ result: response});
  } catch(error) {
    // Consider adjusting the error handling logic for your use case
    if (error.response) {
      console.error(error.response.status, error.response.data);
      res.status(error.response.status).json(error.response.data);
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
      res.status(500).json({
        error: {
          message: 'An error occurred during your request.',
        }
      });
    }
   }
}


