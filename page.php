<?php get_header(); while (have_posts()) : the_post();
$headerimage = get_post_custom_values("headerimage");
$title = get_post_custom_values("title");
?>

<div class="intro color">
	<p class="logo"><a href="http://essenmitsosse.de/" title="Homepage" id="essenmitsosse"><span class="club">&clubs;</span>essenmitsosse <em>presents</em></a></p>
	<h1><?php if($title){echo $title[0];}else{ the_title(); }?></h1>
</div>
<div class="content color">
	<?php the_content(); ?>
	
<?php endwhile; ?>


</div>

<?php get_footer(); ?>



