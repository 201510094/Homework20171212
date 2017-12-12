﻿<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="utf-8" />
  <title>유투브 검색 만들기</title>
  <link rel='stylesheet prefetch' href='style.css'>
</head>
<body>

  <div id="container">
    <header>
      <h1>Search <span>Videos</span></h1>
      <p>Search all YouTube Videos</p>
    </header>
    <section>
      <form id="search-form" method="get" action="">
        <div class="fieldcontainer">
          <input type="search" id="query" name="query" class="search-field" placeholder="Search YouTube">
          <input type="submit" name="search-btn" class="search-btn" value="검색">
        </div>
      </form>

      <ul id="results" class="item-list">
        <li class="item">
          <a href="http://www.youtube.com/watch?v=e3Nl_TCQXuw" target="_blank">
          <h3>Beauty and the Beast – US Official Final Trailer</h3>
          <div class="image-wrapper">
            <img src="https://i.ytimg.com/vi/e3Nl_TCQXuw/hqdefault.jpg">
          </div>
          <div class="description">
            <small>By <span class="channel-title">Disney Movie Trailers</span> on <time>2017-01-31T02:44:39.000Z</time></small>
            <p>The final trailer for Beauty and the Beast is here On March 17, rediscover a tale as old as time. Get your tickets now at BeOurGuest.com -- Disney's “Beauty ...</p>
          </div>
        </a></li>
      </ul>
    </section>
  </div>
  
  <script
  src="https://code.jquery.com/jquery-1.12.4.min.js"
  integrity="sha256-ZosEbRLbNQzLpnKIkEdrPv7lOy9C27hHQ+Xp8a4MxAQ="
  crossorigin="anonymous"></script>
  <script src="youtube-search.js"></script>
</body>
</html>
