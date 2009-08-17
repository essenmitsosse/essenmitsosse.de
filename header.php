<!DOCTYPE html>
<html lang="en">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />

	<link rel="stylesheet" href="http://essenmitsosse.de/blog/wp-content/themes/essenmitsosse-dreadnought/style.css" type="text/css" media="screen" />
	<link rel="alternate" type="application/rss+xml" title="essenmitsosse RSS Feed" href="http://feeds.feedburner.com/essenmitsosse" />
	<link rel="pingback" href="http://essenmitsosse.de/blog/xmlrpc.php" />
	<link rel="shortcut icon" type="image/x-icon" href="http://essenmitsosse.de/favicon.png" />
	<link rel="icon" type="image/x-icon" href="http://essenmitsosse.de/favicon.png" />

	<meta name="robots" content="index, follow" />
	<meta name="description" content="<?php wp_title(''); ?>" />
	<title><?php wp_title(''); ?> &clubs; essenmitsosse</title>

	<?php wp_head(); ?>

	<script type="text/javascript">var gaJsHost = (("https:" == document.location.protocol) ? "https://ssl." : "http://www."); document.write(unescape("%3Cscript src='" + gaJsHost + "google-analytics.com/ga.js' type='text/javascript'%3E%3C/script%3E"));</script><script type="text/javascript">try { var pageTracker = _gat._getTracker("UA-7448093-1"); pageTracker._trackPageview(); } catch(err) {}</script>

</head>

<body>

<div id="navi" class="nocolor">
	<ul>
		<li <?php if ( is_home()) { ?>class="active"<?php } ?>>
			<a href="http://essenmitsosse.de/" class="navilink">
				Home <span>of essenmitsosse.de</span>
			</a>
		</li>
		<li id="portfolionavi" <?php if (!is_home() && in_category('portfolio')) : ?>class="active"<?php endif; ?>>
			<a href="http://essenmitsosse.de/category/portfolio" class="postnavi navilink">
				My Portfolio <span>sucks so much, you must see it.</span>
			</a>
			<div class="postnavi">
<?php if (in_category('portfolio')) : 
next_post_link('<span>%link</span>', '&lt; <span>Newer Work: <strong>%title</strong></span>', true);
previous_post_link('<span class="naviolder">%link</span>', '&gt; <span>Older Work: <br/><strong>%title</strong></span>', true);
endif; ?>
			</div>
		</li>
		<li id="articlenavi" <?php if (!is_home() && in_category('articles')) : ?>class="active"<?php endif; ?>>
			<a href="http://essenmitsosse.de/category/articles" class="postnavi navilink">
				My Articles <span>shouldn’t be read, you may find them interesting.</span>
			</a>
			<div class="postnavi">
<?php if (in_category('articles')) : 
next_post_link('<span>%link</span>', '&lt; <span>Newer Article: <strong>%title</strong></span>', true);
previous_post_link('<span class="naviolder">%link</span>', '&gt; <span>Older Article: <br/><strong>%title</strong></span>', true);
endif; ?>
			</div>
		</li>
		<li <?php if (is_page()) : ?>class="active"<?php endif; ?>>
			<a href="http://essenmitsosse.de/about" >
				About me <span>Never mind.</span>
			</a>
		</li>
		<li <?php if (is_page()) : ?>class="active"<?php endif; ?>>
			<a href="http://essenmitsosse.de/about#contact" class="navilink">
				Contact me<span>so I can feel important.</span>
			</a>
		</li>
		<li>
			<a href="http://feeds.feedburner.com/essenmitsosse" rel="alternate" class="navilink">
				Get the RSS-Feed <span>making it easier for me to annoy you.</span>
			</a>
		</li>
		<li class="search">
			<form id="searchform" method="get" action="http://essenmitsosse.de">
				<p>Search</p>
				<div>
					<input type="text" value="enter your search" name="s" id="s" onblur="if (this.value == '') {this.value = 'enter your search';}" onfocus="if (this.value == 'enter your search') {this.value = '';}"/>
					<input type="submit" value="Start Search" id="startsearch" class="submit"/>
				</div>
			</form>
		</li>	
	</ul>
</div>

