# 🧠 RAG Exploration (LangChain + Pinecone + Mistral)

This is a small exploration to understand how Retrieval-Augmented Generation (RAG) works under the hood.

Instead of building a full project, this focuses on learning the core pipeline:

* Converting PDF → text
* Splitting text into chunks
* Generating embeddings
* Storing & querying vectors

---

## ⚙️ What I Tried

* Parsing PDFs using `pdf-parse`
* Chunking text with LangChain
* Generating embeddings via Mistral
* Storing vectors in Pinecone
* Running similarity search queries

---

## 🚀 Setup

```bash
npm install
```

Create `.env`:

```env
PINECONE_API_KEY=your_key
MISTRAL_API_KEY=your_key
```

---

## 🧪 How It Works

1. Read PDF
2. Split into smaller chunks
3. Convert each chunk → embedding
4. Store in Pinecone
5. Query using embedding similarity

---

## 🔍 Example Query

```js
const QueryEmbedding = await embeddings.embedQuery("your question");

const result = await index.query({
  topK: 2,
  vector: QueryEmbedding,
  includeMetadata: true,
});
```

---

## 📌 Notes

* Not a production-ready project
* Just experimenting to understand RAG flow
* Code has commented sections for step-by-step testing

---

## 📈 Next Steps

* Add LLM response generation
* Try different embedding models
* Optimize chunking strategies

---

