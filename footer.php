
<div id="footer" class="nocolor">
<!--
	<?php
		$feed = "http://search.twitter.com/search.atom?q=from:essenmitsosse&rpp=2";
		
				
		function parse_feed($feed) {
		    $stepOne = explode("<content type=\"html\">", $feed);
		    $stepTwo = explode("</content>", $stepOne[2]);
		    $tweet = $stepTwo[0];
		    $tweet = str_replace("&lt;", "<", $tweet);
		    $tweet = str_replace("&gt;", ">", $tweet);
		    return $tweet;
		}
		
		$twitterFeed = file_get_contents($feed);
		echo '<blockquote class="twitter">', parse_feed($twitterFeed), "</blockquote>";
	?> 
-->
	<p class="important"><a href="http://twitter.com/essenmitsosse" >You shouldn’t follow me on <strong>Twitter<strong></a></p>
</div>

<?php wp_footer(); ?>
</body>
</html>