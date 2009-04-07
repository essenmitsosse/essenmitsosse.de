<div id="footer" class="mainmenu">
		<div class="logo">
			<p><a href="http://essenmitsosse.de?preview=1&amp;template=essenmitsossefinal&amp;stylesheet=essenmitsossefinal" title="Homepage of essenmitsosse">&clubs; essenmitsosse</a></p>
		</div>
		<ul>
			<li><a href="http://essenmitsosse.de/category/blog?preview=1&amp;template=essenmitsossefinal&amp;stylesheet=essenmitsossefinal" title="The articles I've written, about design, illustration, typography and all that stuff">Blog</a></li>
			<li><a href="http://essenmitsosse.de/category/work?preview=1&amp;template=essenmitsossefinal&amp;stylesheet=essenmitsossefinal" title="A collection of my work">Work</a></li>
			<li><a href="http://essenmitsosse.de/about?preview=1&amp;template=essenmitsossefinal&amp;stylesheet=essenmitsossefinal" title="What is this all about?">About</a></li>
			<li><a href="http://essenmitsosse.de/about?preview=1&amp;template=essenmitsossefinal&amp;stylesheet=essenmitsossefinal#contact" title="Get in contact with Marcus Bl&auml;ttermann">Contact</a></li>
			<li><a href="http://essenmitsosse.de/about?preview=1&amp;template=essenmitsossefinal&amp;stylesheet=essenmitsossefinal" title="essenmitsosse RSS Feed" rel="alternate">RSS-Feed</a></li>
		</ul>
		
<?php

// Prefix - some text you want displayed before your latest tweet.
// (HTML is OK, but be sure to escape quotes with backslashes: for example href=\"link.html\")
$prefix = "<h2>My last Tweet</h2>";

// Suffix - some text you want display after your latest tweet. (Same rules as the prefix.)
$suffix = "";

$feed = "http://search.twitter.com/search.atom?q=from:" . "essenmitsosse" . "&rpp=1";

function parse_feed($feed) {
    $stepOne = explode("<content type=\"html\">", $feed);
    $stepTwo = explode("</content>", $stepOne[1]);
    $tweet = $stepTwo[0];
    $tweet = str_replace("&lt;", "<", $tweet);
    $tweet = str_replace("&gt;", ">", $tweet);
    return $tweet;
}

$twitterFeed = file_get_contents($feed);
echo '<p class="twitter">', parse_feed($twitterFeed), "</p>";
?> 

<p class="twitterlink"><a href="http://twitter.com/essenmitsosse">Follow me on Twitter</a></p>
		
</div>

<hr/>
</div>
<?php wp_footer(); ?>
</body>
</html>
