<?php get_header(); ?>
<div id="content" class="homepage">
	<div id="postlist">
		<h2><a href="http://essenmitsosse.de/category/blog" title="Read older Articles I've written">These are my latest <span>Articles</span></a></h2>

<?php $my_query = new WP_Query('category_name=blog&showposts=3'); while ($my_query->have_posts()) : $my_query->the_post(); $do_not_duplicate = $post->ID;
$introimage = get_post_custom_values("introimage");
$subheading = get_post_custom_values("subheading");
?>
		<div class="intro postsmall">
			<a href="<?php the_permalink() ?>" rel="bookmark" title="Read the article &#8220;<?php the_title_attribute(); ?>&#8221;" class="headerlink">
				<h1><?php the_title(); ?></h1>
<?php if (!empty ($subheading)) { ?>
				<p class="subheading"><?php echo $subheading[0] ?></p>
<?php } else {?>
				<hr/>
<?php } ?>
			</a>
<?php if (!empty ($introimage)) { ?>
			<a href="<?php the_permalink() ?>" rel="bookmark" title="Read the article &#8220;<?php the_title_attribute(); ?>&#8221;">
				<img src="<?php echo $introimage[0] ?>" height="250" width="300" />
			</a>
<?php } ?>
			<div class="twowide introtext">
<?php the_excerpt(); ?>
				<p><a class="articlelink" href="<?php the_permalink() ?>" rel="bookmark" title="Read the article &#8220;<?php the_title_attribute(); ?>&#8221;">Read the article &#8230;</a></p>
			</div>
		</div>
<?php endwhile; ?>

	</div>
	
		<a href="http://essenmitsosse.de/category/blog/page/2" class="alt" title="Read older Articles I've written"><span>Older Articles</span></a>

	<div id="portfolio">
		<h2><a href="http://essenmitsosse.de/category/portfolio" title="Have a look at the Portfolio of Marcus Bl&auml;ttermann">My <span>Portfolio</span></a></h2>

<?php $count = '0'; $my_query = new WP_Query('category_name=portfolio&showposts=5'); while ($my_query->have_posts()) : $my_query->the_post(); $do_not_duplicate = $post->ID;
?>
		<div>
			<a href="<?php the_permalink() ?>" rel="bookmark" title="Read the article &#8220;<?php the_title_attribute(); ?>&#8221;" class="headerlink">
				<?php the_excerpt(); ?>
				<?php the_title(); ?>
			</a>
		</div>
<?php if (($count == 2)): ?>
		<div class="addportfolio">
			<script type="text/javascript"><!--
				google_ad_client = "pub-2807761841757067";
				/* Home - Portfolio 300x250 */
				google_ad_slot = "8994312188";
				google_ad_width = 300;
				google_ad_height = 250;
				//-->
			</script>
			<script type="text/javascript" src="http://pagead2.googlesyndication.com/pagead/show_ads.js"></script>
		</div>
<?php endif; ?>
<?php $count++; endwhile;?>
		<a href="http://essenmitsosse.de/category/portfolio" class="alt" title="Have a look at the Portfolio of Marcus Bl&auml;ttermann"><span>See the whole Portfolio</span></a>
	</div>
	
	<div id="links">
		<h2><a href="http://essenmitsosse.de/links" title="Links I recommend"><span>Links</span> I can recommend</a></h2>
		<?php delicious_bookmarks("essenmitsosse", 7, true, false, false, '', true, '', false, false);; ?>
		<a href="http://essen mitsosse.de/links" title="Links I recommend" class="alt"><span>More Links</span></a>
	</div>
	
	<div id="twitter">
		<h2><a href="http://twitter.com/essenmitsosse" title="Follow me on Twitter">I'm on <span>Twitter</span> too</a></h2>
		<div id="tweets">
			<ul id="twitter_update_list"></ul>
			<a href="http://twitter.com/essenmitsosse" id="twitter-link" title="Follow me on Twitter"><span>follow me on Twitter</span></a>
		</div>
		<script type="text/javascript" src="http://twitter.com/javascripts/blogger.js"></script><script type="text/javascript" src="http://twitter.com/statuses/user_timeline/essenmitsosse.json?callback=twitterCallback2&amp;count=3"></script>
	</div>

</div>
<div id="footer">
	<div id="theend" class="logo">
		<a href="http://essenmitsosse.de" title="essenmitsosse.de &clubs; blog & portfolio of me">
		<span class="clubs">&clubs;</span>
		<span class="logotitle">
		<span class="essenmitsosse">essenmitsosse</span>
		<span class="subtitle">Blog & Portfolio of me</span></span></a>
		</div>
	<hr/>
</div>
</body>
</html>
