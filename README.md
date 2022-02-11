<h1>Marvel API GraphQL Server</h1>
<p>
  This application is a graphql server built with Apollo that is 
  deployed to AWS Lambda for serverless hosting. The server consumes
  the public Marvel API for use with a client side web app.

<h2>Technologies Used</h2>
<ul>
  <li><a href="https://www.apollographql.com/docs/">
    Apollo GraphQL
  </a></li>
  <li><a href="https://aws.amazon.com/lambda/">
    AWS Lambda
  </a></li>
  <li><a href="https://developer.marvel.com/">
    Marvel API
  </a></li>
  <li><a href="https://www.serverless.com/">
    Serverless Framework
  </a></li>
</ul>

<h2>Quick Start</h2>
<h3>Clone the Repo</h3>
`git clone https://github.com/andydandy21/marvel-api-graphql-server`
<h3>Move Into Folder</h3>
`cd marvel-api-graphql-server`
<h3>Install Dependencies</h3>
`npm install`
<h3>Prepare Your AWS Account</h3>
<p>
  visit 
  <a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-started.html">
    this link
  </a>
  for instructions
</p>
<h3>Acquire Marvel API Keys</h3>
<p>
  visit 
  <a href="https://developer.marvel.com/documentation/getting_started">
    this link
  </a>
  for instructions
</p>
<h3>Create Environment Variables</h3>
<p>
  Make a .env file at the root directory. In this file, add the following...
</p>
```
MARVEL_PUBLIC_KEY=< the public api key provided by Marvel >
MARVEL_TS=< a timestamp or any long string >
MARVEL_HASH=< an md5 hash of your publicKey + ts + privateKey >
```
<h3>Deploy to Lambda</h3>
`serverless deploy`

<h2>Local Development</h2>
<p>
  You can run any changes in your code locally by running the following command...
</p>
`serverless offline start`
