<div id="footer">
	<div id="footercontent">
		<div id="articles">
			<h3>Latest Blog Articles</h3>
			<ul>
<?php
global $post;
$myposts = get_posts('numberposts=3&category=-77');
foreach($myposts as $post) : ?>
<li><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
<?php the_excerpt(); ?></li>
<?php endforeach; ?>
			</ul>
			<a href="http://essenmitsosse.de/category/blog" class="alt" title="Read older Articles I've written"><span>See all Articles</span></a>
		</div>
		<div id="portfolio">
			<h3>Last Entrys in my Portfolio</h3>
<?php $my_query = new WP_Query('category_name=portfolio&showposts=2'); while ($my_query->have_posts()) : $my_query->the_post(); $do_not_duplicate = $post->ID;
?>
			<div>
				<a href="<?php the_permalink() ?>" rel="bookmark" title="Read the article &#8220;<?php the_title_attribute(); ?>&#8221;" class="headerlink">
					<?php the_excerpt(); ?>
					<p class="title"><?php the_title(); ?></p>
				</a>
			</div>
<?php endwhile;?>
			<a href="http://essenmitsosse.de/category/portfolio" class="alt" title="Have a look at the Portfolio of Marcus Bl&auml;ttermann"><span>See the whole Portfolio</span></a>
		</div>
		<div id="twitter">
			<h3>Twitter</h3>
			<div id="tweets">
				<ul id="twitter_update_list"></ul>
				<a href="http://twitter.com/essenmitsosse" id="twitter-link" title="Follow me on Twitter"><span>follow me on Twitter</span></a>
			</div>
			<script type="text/javascript" src="http://twitter.com/javascripts/blogger.js"></script><script type="text/javascript" src="http://twitter.com/statuses/user_timeline/essenmitsosse.json?callback=twitterCallback2&amp;count=3"></script>
		</div>
	</div>
	<div id="theend" class="logo">
		<a href="http://essenmitsosse.de" title="essenmitsosse.de &clubs; blog & portfolio of me">
		<span class="clubs">&clubs;</span>
		<span class="essenmitsosse">essenmitsosse</span>
		<span class="subtitle">Blog & Portfolio of me</span></a>
	</div>
	<hr />
</div>
<?php wp_footer(); ?>
</body>
</html>
