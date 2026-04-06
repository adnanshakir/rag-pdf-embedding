import { PDFParse } from "pdf-parse";
import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";
import { MistralAIEmbeddings } from "@langchain/mistralai";
import { Pinecone } from "@pinecone-database/pinecone";
import dotenv from "dotenv";
import fs from "fs";

dotenv.config();

const pc = new Pinecone({
  apiKey: process.env.PINECONE_API_KEY,
});
const index = pc.Index("cohort-2-rag");

// let dataBuffer = fs.readFileSync("./story.pdf");

// const parser = new PDFParse({
//   data: dataBuffer,
// });

// const data = await parser.getText();

const embeddings = new MistralAIEmbeddings({
  apiKey: process.env.MISTRAL_API_KEY,
  model: "mistral-embed",
});

// const splitter = new RecursiveCharacterTextSplitter({
//   chunkSize: 500,
//   chunkOverlap: 0,
// });

// const chunks = await splitter.splitText(data.text);

// const docs = await Promise.all(
//   chunks.map(async (chunk) => {
//     const embedding = await embeddings.embedQuery(chunk);
//     return {
//       text: chunk,
//       embedding: embedding,
//     };
//   }),
// );

// const result = await index.upsert({
//   records: docs.map((doc, i) => ({
//     id: `doc-${i}`,
//     values: doc.embedding,
//     metadata: {
//       text: doc.text,
//     },
//   })),
// });

const QueryEmbedding = await embeddings.embedQuery("how was the arav internship experience?")

console.log(QueryEmbedding)

const queryResult = await index.query({
  topK: 2,
  vector: QueryEmbedding,
  includeMetadata: true,
});

console.log(JSON.stringify(queryResult))