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

<div id="meta" class="threecolumn">
	<h2><span>Navigation</span></h2>
	<div>
		<?php next_post_link('<p class="newer button">%link</p>', '<span> Previous </span>%title', true) ?>
	</div>
	<div class="middle"><a href="http://essenmitsosse.de/category/blog" title="The articles I've written, about design, illustration, typography and all that stuff" class="button more">All Articles</a></div>
	<div>
		<?php previous_post_link('<p class="older button">%link</p>', '<span> Next </span>%title', true) ?>
	</div>

</div>

<div id="postnavigation">  
<?php st_related_posts();?>
</div>

<div class="wideadd">
	<script type="text/javascript"><!--
		google_ad_client = "pub-2807761841757067";
		/* In Post � Under Post 728x90 */
		google_ad_slot = "2096079118";
		google_ad_width = 728;
		google_ad_height = 90;
		//-->
	</script>
	<script type="text/javascript" src="http://pagead2.googlesyndication.com/pagead/show_ads.js"></script>
</div>

<?php comments_template(); ?>

<?php get_footer(); ?>