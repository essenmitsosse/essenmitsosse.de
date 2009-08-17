<?php get_header(); while (have_posts()) : the_post();
?>
<div class="intro white">
	<p class="logo">
		<a href="http://essenmitsosse.de/" title="Homepage" id="essenmitsosse">
			<span class="club">&clubs;</span>essenmitsosse <em>presents</em>
		</a>
	</p>
	<h1><?php if($title){echo $title[0];}else{ the_title(); }?></h1>

	<div class="content">

		<?php the_content(); ?>
		
		<? endwhile; ?>
		
		<hr/>
	
		<p class="fourwide center important"><?php next_post_link('%link', 'Newer Work: <br/>&lt; <strong>%title</strong>', true) ?></p>
		<p class="fourwide center important"><a href="http://essenmitsosse.de/category/portfolio">My whole Portfolio</a></p>
		<p class="fourwide center important"><?php previous_post_link('%link', 'Older Work: <br/><strong>%title</strong> &gt;', true) ?></p>
		
		<hr/>
		<div class="sixwide">
			<h2><em>If you didn&#8217;t liked this work</em>You will hate these</h2>
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
				<h3>Created by</h3>
				<p><a href="http://essenmitsosse.de/about" title="Find out more about Marcus Blättermann">Marcus Bl&auml;ttermann</a></p>
			</div>
		</div>
	</div>
</div>
	
<?php comments_template(); ?>

<?php get_footer(); ?>



