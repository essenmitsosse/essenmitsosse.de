<?php get_header(); while (have_posts()) : the_post();
$headerimage = get_post_custom_values("headerimage");
$title = get_post_custom_values("title");
?>

<div class="intro color" id="postintro" style="background-image:url(<?php echo $headerimage[0];?>);">
	<p class="logo">
		<a href="http://essenmitsosse.de/" title="Homepage" id="essenmitsosse">
			<span class="club">&clubs;</span>essenmitsosse <em>presents</em>
		</a>
	</p>
	<h1><?php if($title){echo $title[0];}else{ the_title(); }?></h1>
</div>

<div class="content">
	<?php the_content(); ?>
<?php endwhile; ?>
	
	<hr/>
	
	<p class="fourwide center important"><?php next_post_link('%link', 'Read the newer article: <br/>&lt; <strong>%title</strong>', true) ?></p>
	<p class="fourwide center important"><a href="http://essenmitsosse.de/category/articles">Get an overview over<br/><strong>all my articles</strong></a></p>
	<p class="fourwide center important"><?php previous_post_link('%link', 'Read the older article: <br/><strong>%title</strong> &gt;', true) ?></p>
	
	<hr/>
	<div class="sixwide">
		<h2><em>If you didn&#8217;t liked this article</em>You will hate these</h2>
		<?php st_related_posts();?>
	</div>
	<div class="sixwide">
		<h2><em>No need to read these</em> infos</h2>
		
		<div class="infos">
			<h3>Categorys</h3>
			<p><?php the_category(', ') ?></p>
		</div>

		<div class="infos">
			<h3>Posted on</h3>
			<p><?php the_time('F jS, Y') ?></p>
		</div>

		<div class="infos">	
			<h3>Written by</h3>
			<p><a href="http://essenmitsosse.de/about" title="Find out more about Marcus Blättermann">Marcus Bl&auml;ttermann</a></p>
		</div>
	</div>	
</div>

<?php comments_template(); ?>

<?php get_footer(); ?>



