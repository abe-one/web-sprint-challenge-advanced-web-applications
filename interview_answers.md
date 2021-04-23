# Interview Answers

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. Explain what a token is used for.
   -Tokens are unique pieces of data used to authenticate a server call.
   -Imagine an ID card to access a secure building, the ID is the token and the building is the server.

2. What steps can you take in your web apps to keep your data secure?
   -Secure your tokens and the means by which they're produced. Prevent access to secure pages by using a private route. Set expirations for your tokens. Never allow tokens to be git tracked. Ensure that logout deletes the local copy of the token.

3. Describe how web servers work.
   -A physical server is simply a computer accessible via the internet.
   -The digital server is the code running on the computer.
   -The web server listens for calls to it's domain and responds according to the instructions built into it.

4. Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.
   -Create: POST
   -Read: GET
   -Update: PUT(/PATCH rarely used, makes a partial update)
   -Delete: DELETE
