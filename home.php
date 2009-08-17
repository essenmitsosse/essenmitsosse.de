<?php get_header(); ?>

<div class="intro color">
	<p class="logo">
		<a href="http://essenmitsosse.de/" title="Homepage" id="essenmitsosse">
			<span class="club">&clubs;</span>essenmitsosse <em>presents</em>
		</a>
	</p>
	<h1 class=""><em>What the fuck is</em> essenmitsosse?</h1>
</div>

<div class="content color">
	<p>Here I showcase <a href="http://essenmitsosse.de/category/portfolio">my work</a>, which is mostly fancy design stuff like illustrations, typography, layout, webdesign and other things nobody cares about. I’m also writing <a href="http://essenmitsosse.de/category/articles">articles</a> when I think I’ve something figured out like design theory or techniques.</p>
	<p class="important"><a href="http://essenmitsosse.de/about#contact">Some more pointless information <strong>about me</strong></a></p>
</div>
<div class="content">	
	<h2 class="first">my portfolio</h2>
<?php $my_query = new WP_Query('category_name=portfolio&showposts=6'); while ($my_query->have_posts()) : $my_query->the_post(); ?>
	<div class="fourwide many portfoliopiece">
		<a href="<?php the_permalink() ?>" title="Have a look at &#8220;<?php the_title(); ?>&#8221;">
			<?php the_excerpt(); ?>
		</a>
		<p class="title">
			<a href="<?php the_permalink() ?>" title="Have a look at &#8220;<?php the_title(); ?>&#8221;"><?php the_title(); ?></a>
		</p>				
	</div>
<?php endwhile; ?>
	<p class="important"><a href="http://essenmitsosse.de/category/portfolio">My whole <strong>portfolio</strong></a></p>

</div>
<div class="content color">	

	<h2 class="first">my articles</h2>
	<ul class="articlelist">
<?php $my_query = new WP_Query('category_name=articles&showposts=4'); while ($my_query->have_posts()) : $my_query->the_post(); $title = get_post_custom_values("title");?>
		<li>
			<h3><a href="<?php the_permalink() ?>" class="button" title="Read &#8220;<?php the_title_attribute(); ?>&#8221;"><?php if($title){echo $title[0];}else{ the_title(); }?></a></h3>
			<?php the_excerpt(); ?>
			<div class="commentscount"><?php comments_popup_link((''), ('1 Comment'), ('% Comments')); ?></div>
		</li>
<?php endwhile; ?>
	</ul>
	<p class="important"><a href="http://essenmitsosse.de/category/articles">all <strong>articles</strong> I’ve written</a></p>
</div>


<?php get_footer(); ?>

