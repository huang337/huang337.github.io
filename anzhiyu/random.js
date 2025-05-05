var posts=["2025/05/04/hello-world/","2025/05/04/新博文2/","2025/05/04/这是一个博文/","2025/05/04/新博文3/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };