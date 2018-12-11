var read = require('node-readability');
 
read('http://howtonode.org/really-simple-file-uploads', function(err, article) {
  // Main Article
  console.log(article.content);
  // Title
  console.log(article.title);
 
  // HTML Source Code
  // console.log(article.html);
  // DOM
  // console.log(article.document);
 
  // Response Object from Request Lib
  // console.log(meta);
 
  // Close article to clean up jsdom and prevent leaks
  article.close();
});