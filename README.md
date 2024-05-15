#  Building a Customized RAG Model

## AI Research Assistance For Computing And Engineering Field

For professionals, scholars, and students in the computing and engineering disciplines, an AI research support tool  designed to optimize and improve several parts of the research process. By compiling and summarizing pertinent papers, articles, patents, and other scholarly sources according to their search queries, this tool assists scholars in conducting literature reviews in an effective manner.

## Training

In order for this model to be effective in assisting researchers, it must be trained on a large dataset of scholarly articles, papers, and patents. This training data will be used to teach the model how to identify and summarize relevant information, as well as how to answer questions based on the information it has been given.

We use data from [Science Direct](https://www.sciencedirect.com/browse/journals-and-books?subject=computer-science) to train the model which contains over
thousands of articles, papers, and patents in the computing and engineering fields.

## MongoDB Atlas Vector Search & OpenAi Embedding

We use MongoDB Atlas Vector Search to store and index the training data, and OpenAI's GPT-3 to generate the answers to the questions that the model is asked. By combining these two powerful tools, we are able to create a model that is capable of providing accurate and relevant information to researchers in the computing and engineering fields.


## Stack

* Frontend: [FEMongoRAG-Bounty](https://fe-mongo-rag-bounty.vercel.app)
    - React
    - Mantine

* Backend: [BEMongoRAG-Bounty](https://github.com/mrlectus/BEMongoRAG-Bounty)
    - Nodejs
    - MongoDB Atlas Vector search
    - Fastify

## Usage
Go here [FEMongoRAG-Bounty](https://fe-mongo-rag-bounty.vercel.app) and just input your prompt.
