<?php get_header(); ?>

<div class="intro white">
	<p class="logo">
		<a href="http://essenmitsosse.de/" title="Homepage" id="essenmitsosse">
			<span class="club">&clubs;</span>essenmitsosse <em>presents</em>
		</a>
	</p>
	<h1>My portfolio</h1>
	
	<div class="content">
		<?php while (have_posts()) : the_post(); $title = get_post_custom_values("title");?>
		<div class="fourwide many portfoliopiece">
			<a href="<?php the_permalink() ?>" title="Have a look at &#8220;<?php the_title(); ?>&#8221;">
				<?php the_excerpt(); ?>
			</a>
			<p class="title">
				<a href="<?php the_permalink() ?>" title="Have a look at &#8220;<?php the_title(); ?>&#8221;"><?php the_title(); ?></a>
			</p>				
		</div>
		<?php endwhile; ?>
	</div>
</div>
<?php get_footer(); ?>



