const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  // res.end('Hello World this is rohan das');
  res.end(`<!doctype html>
  <html lang="en">
    <head>
      <!-- Required meta tags -->
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="stylesheet" href="style.css">
  
  
      <title>Video Player Application</title>
      <style>
      *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-transform: capitalize;
    }
    body{
        background: #eee;
    }
    .heading{
        color: #444;
        font-size: 40px;
        text-align: center;
        padding: 10px;
    }
    .container{
        display: grid;
        grid-template-columns: 2fr 1fr;
        gap: 15px;
        align-items: flex-start;
        padding: 5px 5%;
    }
    .container .main-video{
        background-image: #fff;
        border-radius: 5px;
        padding: 10px;
    }
    .container .main-video video{
        width: 100%;
        border-radius: 5px;
    }
    .container .main-video .title{
        color: #333;
        font-size: 23px;
        padding: 23px 0;
    }
    .container .video-list{
        background: #fff;
        border-radius: 5px;
        height: 520px;
        overflow-y: scroll;
    }
    .container .video-list::-webkit-scrollbar{
        width: 7px;
    }
    .container .video-list::-webkit-scrollbar-track{
        background: #ccc;
        border-radius: 5px;
    }
    .container .video-list::-webkit-scrollbar-thumb{
        background: #666;
        border-radius: 50px;
    }
    .container .video-list .vid video{
        width: 100px;
        border-radius: 5px;
    }
    .container .video-list .vid{
        display: flex;
        align-items: center;
        gap: 15px;
        background: #f7f7f7;
        border-radius: 5px;
        margin: 10px;
        padding: 10px;
        border: 1px solid rgba(0, 0,0,.1);
    }
    .container .video-list .vid:hover{
        background: #eee;
    }
    .container .video-list .vid.active{
    background: #2980b9;
    }
    .container .video-list .vid.active .title{
        color: #fff;
    }
    .container .video-list .vid .title{
        color: #333;
        font-size: 17px;
    }
    
    @media(max-width:991px){
        .container{
            grid-template-columns: 1.5fr 1fr;
            padding: 10px;
        }
    }
    @media(max-width:768px){
        .container{
            grid-template-columns: 1fr;
        }
    }
      </style>
    </head>
    <body>
  <h3 class="heading">Video Gallery</h3>
  
  <div class="container">
  <div class="main-video">
      <video src="video/BUSINESS STATISTICS-MEASURE OF CENTRAL TENDENCY_HIGH.mp4" controls muted autoplay></video>
      <h3 class="title">Statistics-Measure of central tendency</h3>
  </div>
  <div class="video-list">
      <div class="vid active">
          <video src="video/Euclid GCD, Prime Numbers & Sieve of Eratosthenes _ Mathematics Part - 2 _ DSA-O_HD.mp4" muted></video>
          <h3 class="title">Mathematics part- 2 DSA</h3>
      </div>
      <div class="vid">
          <video src="video/Modulo Arithmetics _ Compute answer modulo 1000000007 _ Mathematics Part 3 _ DSA_HD.mp4" muted></video>
          <h3 class="title">Mathematics part- 3 DSA</h3>
      </div>
      <div class="vid">
          <video src="video/Statistics Numerical Measure of Central Tendency_HD.mp4" muted></video>
          <h3 class="title">statistics numerical measure</h3>
      </div>
      <div class="vid">
          <video src="video/Statistics-- Weighted Mean_HIGH.mp4" muted></video>
          <h3 class="title">statistics weighted mean</h3>
      </div>
      <div class="vid">
          <video src="video/Bootstrap 5 Responsive Landing Page Design _ Responsible website design_HIGH.mp4" muted></video>
          <h3 class="title">bootstrap 5 lending page</h3>
      </div>
      <div class="vid">
          <video src="video/Modulo Arithmetics _ Compute answer modulo 1000000007 _ Mathematics Part 3 _ DSA_HD.mp4" muted></video>
          <h3 class="title">Mathematics part- 3 DSA</h3>
      </div>
      <div class="vid">
          <video src="video/Modulo Arithmetics _ Compute answer modulo 1000000007 _ Mathematics Part 3 _ DSA_HD.mp4" muted></video>
          <h3 class="title">Mathematics part- 3 DSA</h3>
      </div>
      <div class="vid">
          <video src="video/Modulo Arithmetics _ Compute answer modulo 1000000007 _ Mathematics Part 3 _ DSA_HD.mp4" muted></video>
          <h3 class="title">Mathematics part- 3 DSA</h3>
      </div>
      <div class="vid">
          <video src="video/Modulo Arithmetics _ Compute answer modulo 1000000007 _ Mathematics Part 3 _ DSA_HD.mp4" muted></video>
          <h3 class="title">Mathematics part- 3 DSA</h3>
      </div>
      <div class="vid">
          <video src="video/Modulo Arithmetics _ Compute answer modulo 1000000007 _ Mathematics Part 3 _ DSA_HD.mp4" muted></video>
          <h3 class="title">Mathematics part- 3 DSA</h3>
      </div>
      <div class="vid">
          <video src="video/Modulo Arithmetics _ Compute answer modulo 1000000007 _ Mathematics Part 3 _ DSA_HD.mp4" muted></video>
          <h3 class="title">Mathematics part- 3 DSA</h3>
      </div>
  </div>
  </div>
  
  
  <script>
      let listVideo=document.querySelector('.video-list .vid');
      let mainVideo=document.querySelector('.main-video video');
      let title=document.querySelector('.main-video .title');
  
  </script>
    </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});