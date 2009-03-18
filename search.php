<?php get_header(); ?>
<div id="content" class="homepage search">
	<div class="alignright">
		<div class="marginbottom">
			<script type="text/javascript"><!--
				google_ad_client = "pub-2807761841757067";
				/* Linkpage 300x250 */
				google_ad_slot = "7650108430";
				google_ad_width = 300;
				google_ad_height = 250;
				//-->
			</script>
			<script type="text/javascript" src="http://pagead2.googlesyndication.com/pagead/show_ads.js"></script>
		</div>
		<div class="marginbottom">
			<script type="text/javascript"><!--
				google_ad_client = "pub-2807761841757067";
				/* Linkpage 300x250 */
				google_ad_slot = "7650108430";
				google_ad_width = 300;
				google_ad_height = 250;
				//-->
			</script>
			<script type="text/javascript" src="http://pagead2.googlesyndication.com/pagead/show_ads.js"></script>
		</div>
				<div class="marginbottom">
			<script type="text/javascript"><!--
				google_ad_client = "pub-2807761841757067";
				/* Linkpage 300x250 */
				google_ad_slot = "7650108430";
				google_ad_width = 300;
				google_ad_height = 250;
				//-->
			</script>
			<script type="text/javascript" src="http://pagead2.googlesyndication.com/pagead/show_ads.js"></script>
		</div>
	</div>
	<div id="postlist">
		<h2><a href="http://essenmitsosse.de/category/blog" title="Read older Articles I've written"><span>These are my latest</span> Articles</a></h2>
		
<?php $count = '0'; if (have_posts()) : while (have_posts()) : the_post();
$introimage = get_post_custom_values("introimage");
$subheading = get_post_custom_values("subheading");
?>
<?php if (!in_category('77')) :  $count = '0'; ?>
		<div class="intro">
			<a href="<?php the_permalink() ?>" rel="bookmark" title="Read the article &#8220;<?php the_title_attribute(); ?>&#8221;" class="headerlink">
				<h1><?php the_title(); ?></h1>
<?php if (!empty ($subheading)) { ?>
				<p class="subheading"><?php echo $subheading[0] ?></p></a>
<?php } else {?>
				<hr/>
<?php } ?>
			</a>
<?php if (!empty ($introimage)) { ?>
			<a href="<?php the_permalink() ?>" rel="bookmark" title="Read the article &#8220;<?php the_title_attribute(); ?>&#8221;" class="headerlink alignleft">
				<img src="<?php echo $introimage[0] ?>"/>
			</a>
<?php } ?>
			<div class="introtext">
<?php the_excerpt(); ?>
				<p><a class="articlelink" href="<?php the_permalink() ?>" rel="bookmark" title="Read the article &#8220;<?php the_title_attribute(); ?>&#8221;">Read the article &#8230;</a></p>
			</div>
		</div>
<?php else : ?>
		<div class="portfolio <?php if (($count == 1)): echo "end"; $count = "-1"; endif; ?>">
			<a href="<?php the_permalink() ?>" rel="bookmark" title="Read the article &#8220;<?php the_title_attribute(); ?>&#8221;" class="headerlink">
				<?php the_excerpt(); ?>
				<h1><?php the_title(); ?></h1>
			</a>
		</div>
<?php $count++; endif; ?>
<?php endwhile; ?>
<?php endif; ?>
		<ul>
			<li class="next"><?php next_posts_link('<span>Older Articles</span>') ?></li>
			<li class="prev"><?php previous_posts_link('<span>Newer Articles</span>') ?></li>
		</ul>
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