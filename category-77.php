<?php get_header(); ?>
<div id="content" class="homepage portfolio">
	<div id="portfolio">
		<h2><a href="http://essenmitsosse.de/category/portfolio" title="Have a look at the Portfolio of Marcus Bl&auml;ttermann"><span>My</span> Portfolio</a></h2>

<?php $count = '0'; $count2 = '0'; $my_query = new WP_Query('category_name=portfolio&showposts=20'); while ($my_query->have_posts()) : $my_query->the_post(); $do_not_duplicate = $post->ID;?>
		<div class="<?php if (($count == 2)): echo "end"; $count = "-1"; endif; ?>">
			<a href="<?php the_permalink() ?>" rel="bookmark" title="Read the article &#8220;<?php the_title_attribute(); ?>&#8221;" class="headerlink">
				<?php the_excerpt(); ?>
				<h1><?php the_title(); ?></h1>
			</a>
		</div>
<?php if (($count2 == 2)): ?>
		<div>
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
<?php $count++; endif; ?>
<?php $count++; $count2++; endwhile;?>
	</div>

</div>
<div id="footer">
	<div id="theend" class="logo">
		<a href="http://essenmitsosse.de?preview=1&amp;template=essenmitsosse2009&amp;stylesheet=essenmitsosse2009" title="essenmitsosse.de &clubs; blog & portfolio of me"><span class="clubs">&clubs;</span> essenmitsosse <span class="clubs">&clubs;</span>
		<span class="subtitle">Blog & Portfolio of me</span></a>
	</div>
	<hr/>
</div>
</body>
</html>
