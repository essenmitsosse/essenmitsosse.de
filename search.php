<?php get_header(); ?>
<div class="intro color">
	<p class="logo"><a href="http://essenmitsosse.de/" title="Homepage" id="essenmitsosse">
		<span class="club">&clubs;</span>essenmitsosse <em>presents</em>
	</a></p>
	<h1 class="nomargin"><em>Your search results for</em><?php the_search_query(); ?></h1>
	<div class="content color">
		<ul class="articlelist">
<?php while (have_posts()) : the_post(); $title = get_post_custom_values("title"); 
?>
			<li>
				<h3><a href="<?php the_permalink() ?>" class="button" title="Read &#8220;<?php the_title_attribute(); ?>&#8221;"><?php if($title){echo $title[0];}else{ the_title(); }?></a></h3>
				<?php the_excerpt(); ?>
				<div class="commentscount"><?php comments_popup_link((''), ('1 Comment'), ('% Comments')); ?></div>
			</li>	
<?php endwhile; ?>
		</ul>
	</div>
</div>
<?php get_footer(); ?>



