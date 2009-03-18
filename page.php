<?php get_header(); ?>
<div id="content" class="centerall single">
	<div class="intro">
<?php if (have_posts()) : while (have_posts()) : the_post();
$subheading = get_post_custom_values("subheading");
$introtext = get_post_custom_values("introtext");
$introimage = get_post_custom_values("introimage"); 
 
foreach((get_the_category()) as $category) {  
if ($category->category_parent == 0)
{
$parentscategory .= ' <a href="' . get_category_link($category->cat_ID) . '" title="' . $category->name . '">' . $category->name . '</a>, ';  
} else {  
$childcategory .= ' <a href="' . get_category_link($category->cat_ID) . '" title="' . $category->name . '">' . $category->name . '</a>, ';  
}}
?>


		<p id="bread">
			<a href="http://essenmitsosse.de" class="essenmitsosse" title="essenmitsosse.de &clubs; blog & portfolio of me"> &clubs;</a> &raquo; <?php echo substr($parentscategory,0,-2); ?> &raquo; <?php echo substr($childcategory,0,-2); ?>
		</p>
		<h1 class="<?php echo $headingformat[0] ?>"><?php the_title(); ?></h1>
<?php if (!empty ($subheading)) { ?>
		<p class="subheading <?php echo $subheadingformat[0] ?>"><?php echo $subheading[0] ?></p>
<?php } else {?>
<hr/>
<?php } ?>
		<div class="introtext">
<?php the_excerpt(); ?>
		</div>
		<img class="<?php echo $introimage[0] ?>" width="475" height="317" style="background:#15f;"/>
	</div>
	<div id="text" >
<?php the_content(); ?>
	</div>
	<hr/>
	<div class="threecolumn">
		<div>
			<h3>Navigation</h3>
			<ul>
				<?php previous_post_link('<li class="prev">%link</li>', '<span><strong>Previous Post</strong> %title</span>', true) ?>
				<?php next_post_link('<li class="next">%link</li>', '<span><strong>Next Post</strong> %title</span>', true) ?>
			</ul>
<?php st_related_posts();?>
		</div>
		<div>
			<h3>Stay informed about updates?</h3>
			<ul>
				<li class="rss"><a href="feed://feeds.feedburner.com/essenmitsosse" class="rsslink"><span>Get the RSS-Feed</span></a></li>
				<li><a href="http://feedburner.google.com/fb/a/mailverify?uri=essenmitsosse&amp;loc=en_US" class="rsslink"><span>E-Mail Subscription</span></a></li>
			</ul>
		</div>
		<div class="end">
			<a href=""><img src="https://www.google.com/adsense/static/de/images/300x250_img.jpg"></a>
		</div>
	</div>
</div>
<?php comments_template(); ?>

<?php endwhile; ?>
<?php endif; ?>
</div>
<?php get_footer(); ?>