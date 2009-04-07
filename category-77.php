<?php get_header(); ?>

<div id="portfolio" class="threecolumn top">
	<h2>This is my Portfolio</h2>

<?php $count = '0'; $count2 = '0'; $my_query = new WP_Query('category_name=work&showposts=20'); while ($my_query->have_posts()) : $my_query->the_post(); $do_not_duplicate = $post->ID;?>
	<div class="<?php if (($count == 2)): echo "end"; $count = "-1"; endif; ?>">
		<a href="<?php the_permalink() ?>" title="Have a look at &#8220;<?php the_title(); ?>&#8221;">
			<?php the_excerpt(); ?>
			<p class="title"><?php the_title(); ?></p>
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

<?php get_footer(); ?>