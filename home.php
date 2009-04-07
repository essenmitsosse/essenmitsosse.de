<?php get_header(); ?>

<div id="slider">    
	<div class="scroll">
		<div class="scrollContainer">
		
<?php
$count = '0';
$my_query = new WP_Query('category_name=blog&showposts=5');
while ($my_query->have_posts()) : $my_query->the_post();

$introimage = get_post_custom_values("introimage");
$subheading = get_post_custom_values("subheading");

$childcategory = "";
foreach((get_the_category()) as $category) {
if ($category->category_parent == 0) {
} else {  
$childcategory .= ' <a href="' . get_category_link($category->cat_ID) . '" title="' . $category->name . '">' . $category->name . '</a>, ';  
}}

$count ++;
?>

			<div class="intro" id="post<?php echo $count; ?>" style="background-image: url(<?php echo $introimage[0] ?>);">
				<div class="heading">
					<h1><a href="<?php the_permalink() ?>" title="Read the article &#8220;<?php the_title(); ?>&#8221;"><?php the_title(); ?></a></h1>
					<p class="subheading"><a href=""><?php echo $subheading[0] ?></a></p>
				</div>
				<div class="introtext">
					<p><?php echo substr($childcategory,0,-2); ?> &#8211; </p>
					<?php the_excerpt(); ?>
					<p class="singleline"><a class="button" href="<?php the_permalink() ?>" title="Read the article &#8220;<?php the_title_attribute(); ?>&#8221;">Read on &#8230;</a></p>
				</div>
			</div>
<?php endwhile; ?>
		</div>
	</div>
</div>

<div id="postnavigation" class="fullwidth">  
	<ul>
<?php
$count = '0';
$my_query = new WP_Query('category_name=blog&showposts=5');
while ($my_query->have_posts()) : $my_query->the_post();
$count ++;
?>
		<li><a href="<?php the_permalink() ?>" title="Read the article &#8220;<?php the_title(); ?>&#8221;" id="link<?php echo $count; ?>" class="first"><?php the_title(); ?></a></li>
<?php endwhile; ?>
	</ul>
	<a href="http://essenmitsosse.de/category/blog" title="The articles I've written, about design, illustration, typography and all that stuff" class="button more">More Articles</a>
</div>

<div id="portfolio" class="threecolumn">
	<h2>Latest Works</h2>
<?php
$my_query = new WP_Query('category_name=work&showposts=5');
while ($my_query->have_posts()) : $my_query->the_post();
?>	
	<div>
		<a href="<?php the_permalink() ?>" title="Have a look at &#8220;<?php the_title(); ?>&#8221;">
			<?php the_excerpt(); ?>
			<p class="title"><?php the_title(); ?></p>
		</a>
	</div>
<?php endwhile; ?>
	<a href="http://essenmitsosse.de/category/work" class="button more">See my whole Portfolio</a>
</div>

<?php get_footer(); ?>