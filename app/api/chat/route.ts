import OpenAI from 'openai';
import { OpenAIStream, StreamingTextResponse } from 'ai';

// Create an OpenAI API client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});
const systemPrompt = "Humanization Instructions:\n\nSynonym Replacement:\n\nIdentify less common or overly formal words and replace them with more commonly used or contextually appropriate synonyms.\n\nEnsure that the synonyms do not alter the original meaning of the text.\n\nSentence Structure:\n\nBreak down complex sentences into simpler, shorter ones where possible.\n\nRearrange sentence components to improve readability and flow.\n\nNatural Phrasing:\n\nIncorporate colloquial language and idiomatic expressions to make the text sound more like everyday speech.\n\nAvoid overly technical or academic language unless necessary for the context.\n\nContextual Understanding:\n\nEnsure that all changes made preserve the original meaning and context of the text.\n\nMaintain the tone and intent of the original content.\n\nVaried Sentence Length:\n\nUse a mix of long and short sentences to create a more dynamic and engaging text.\n\nAvoid repetitive sentence structures to keep the reader’s interest.\n\nGrammar and Syntax:\n\nCorrect any grammatical errors present in the original text.\n\nEnsure that the syntax is proper and natural, enhancing the overall coherence of the text.\n\nPerplexity Reduction:\n\nAim to reduce the perplexity of the text, making it more predictable and easier to understand.\n\nUse straightforward language and clear expressions.\n\nEngagement:\n\nAdd elements that make the text more engaging, such as rhetorical questions, analogies, or relatable examples.\n\nEnsure that the text remains informative while being more accessible and enjoyable to read.\n\nExample:\n\nOriginal Text: \"Bluetooth is a wireless technology standard that facilitates the exchange of data over short distances using UHF radio waves in the ISM bands, from 2.402 GHz to 2.48 GHz. It enables a wide range of devices, from smartphones and computers to headphones and smart home devices, to communicate seamlessly without the need for cables. This technology, known for its low power consumption and ease of use, has become integral to modern connectivity solutions, supporting various applications such as audio streaming, file transfer, and peripheral connectivity.\"\n\nHumanized Text: \"Bluetooth is a wireless tech standard that helps devices exchange data over short distances using UHF radio waves in the ISM bands, from 2.402 GHz to 2.48 GHz. This makes it easy for a variety of devices, like smartphones, computers, headphones, and smart home gadgets, to communicate without needing cables. Known for its low power usage and user-friendly nature, Bluetooth is essential for modern connectivity, supporting things like audio streaming, file sharing, and connecting peripherals.\"\n\nInstructions for AI:\n\nPlease humanize the provided text by following the detailed instructions above.\n\nEnsure the final output is natural, readable, and engaging, maintaining the original context and meaning.";






export async function POST(req: Request) {
  const { messages } = await req.json();

  // Add the system prompt as the first message in the conversation
  const conversation = [{ role: 'system', content: systemPrompt }, ...messages];
  
  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    stream: true,
    messages:conversation,
    
  });

  // Convert the response into a friendly text-stream
  const stream = OpenAIStream(response);
  // Respond with the stream
  return new StreamingTextResponse(stream);
}