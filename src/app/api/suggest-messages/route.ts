import { createOpenAI } from "@ai-sdk/openai";

const openai = createOpenAI({
  // custom settings, e.g.
  compatibility: "strict", // strict mode, enable when using the OpenAI API
});
export const runtime = "edge";

export async function POST(req: Request) {
  try {
    throw new Error("Open AI integration pending");

    // const prompt =
    //   "Create a list of three open-ended and engaging questions formatted as a single string. Each question should be separated by '||'. These questions are for an anonymous social messaging platform, like Qooh.me, and should be suitable for a diverse audience. Avoid personal or sensitive topics, focusing instead on universal themes that encourage friendly interaction. For example, your output should be structured like this: 'What’s a hobby you’ve recently started?||If you could have dinner with any historical figure, who would it be?||What’s a simple thing that makes you happy?'. Ensure the questions are intriguing, foster curiosity, and contribute to a positive and welcoming conversational environment.";

    // const response = openai.completion("gpt-3.5-turbo-instruct", {
    //   echo: true, // optional, echo the prompt in addition to the completion
    //   logitBias: {
    //     // optional likelihood for specific tokens
    //     "50256": -100,
    //   },
    //   suffix: "some text", // optional suffix that comes after a completion of inserted text
    //   user: "test-user", // optional unique user identifier
    // });

    // const stream = OpenAIStream(response);

    // return new StreamingTextResponse(stream);
  } catch (error) {
    // if (error instanceof OpenAI.APIError) {
    //   // OpenAI API error handling
    //   const { name, status, headers, message } = error;
    //   return NextResponse.json({ name, status, headers, message }, { status });
    // } else {
    //   // General error handling
    //   console.error("An unexpected error occurred:", error);
    //   throw error;
    // }
    throw error;
  }
}
