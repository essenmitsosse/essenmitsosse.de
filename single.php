<?php get_header(); ?>
<div id="content" class="single">
	<div class="intro">
<?php if (have_posts()) : while (have_posts()) : the_post();
$subheading = get_post_custom_values("subheading");
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
	</div>
	<div id="text" >
<?php if (!empty ($introimage)) { ?>
		<img src="<?php echo $introimage[0] ?>" class="alignleft introimage"/>
<?php } ?>
<?php the_content(); ?>
	</div>
	<hr/>
</div>
<div id="meta">
	<ul id="navigation">
		<?php next_post_link('<li class="next">%link</li>', '<span><strong>Next</strong> %title</span>', true) ?>
		<?php previous_post_link('<li class="prev">%link</li>', '<span><strong>Previous</strong> %title</span>', true) ?>
	</ul>
	<div class="twowide clear">	
<?php st_related_posts();?>
	</div>
	<div class="twowide">
		<h3>Stay informed about updates?</h3>
		<ul>
			<li class="rss"><a href="feed://feeds.feedburner.com/essenmitsosse" class="rsslink"><span>Get the RSS-Feed</span></a></li>
			<li><a href="http://feedburner.google.com/fb/a/mailverify?uri=essenmitsosse&amp;loc=en_US" class="rsslink"><span>E-Mail Subscription</span></a></li>
		</ul>
	</div>
	<div class="twowide">
		<script type="text/javascript"><!--
			google_ad_client = "pub-2807761841757067";
			/* Under Post, 300x250 */
			google_ad_slot = "7155928429";
			google_ad_width = 300;
			google_ad_height = 250;
			//-->
		</script>
		<script type="text/javascript" src="http://pagead2.googlesyndication.com/pagead/show_ads.js"></script>
	</div>
</div>
<?php comments_template(); ?>

<?php endwhile; ?>
<?php endif; ?>
<?php get_footer(); ?>