<?php get_header(); ?>

<?php while (have_posts()) : the_post();

$introimage = get_post_custom_values("introimage");
$subheading = get_post_custom_values("subheading");

foreach((get_the_category()) as $category) {
if ($category->category_parent == 0) {
} else {  
$childcategory .= ' <a href="' . get_category_link($category->cat_ID) . '" title="' . $category->name . '">' . $category->name . '</a>, ';  
}}
?>
<div id="post" style="background-image: url(<?php echo $introimage[0] ?>);">
	<div class="intro">
		<div class="heading">
			<?php next_post_link('<p class="left">%link</p>', '&laquo;', true) ?>
			
			<?php previous_post_link('<p class="right">%link</p>', '&raquo;', true) ?>

			<h1><a href="<?php the_permalink() ?>" title="Read the article &#8220;<?php the_title(); ?>&#8221;"><?php the_title(); ?></a></h1>
			<p class="subheading"><a href=""><?php echo $subheading[0] ?></a></p>
		</div>
	</div>
	<div id="text">
		<?php the_content(); ?>
	</div>
</div>
<?php endwhile; ?>

<?php get_footer(); ?>