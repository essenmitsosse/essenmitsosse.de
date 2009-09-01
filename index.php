<!DOCTYPE html>
<html lang="en">
<head>
	<link rel="stylesheet" href="http://essenmitsosse.de/blog/wp-content/themes/essenmitsosse-behemoth/style.css" type="text/css" media="screen" />
	<link rel="alternate" type="application/rss+xml" title="essenmitsosse RSS-Feed" href="http://feeds.feedburner.com/essenmitsosse" />	
	<link rel="pingback" href="http://essenmitsosse.de/blog/xmlrpc.php" />
	<link rel="shortcut icon" type="image/png" href="http://essenmitsosse.de/favicon.png" />
	<link rel="icon" type="image/png" href="http://essenmitsosse.de/favicon.png" />
	<link rel="index" title="essenmitsosse" href="http://essenmitsosse.de" />

	<title>&clubs; essenmitsosse</title>

	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<meta name="robots" content="index, follow" />
	<meta name="description" content="The work and thoughts of an illustrator, print- & webdesigner."/>
	<meta name="keywords" content="freelancer, illustrator, designer, design, layout, typography, wacom, photoshop">
	<meta name="date" content="<?php the_time('Y-m-d') ?>">
	<meta name="author" content="Marcus Bl&auml;ttermann">
	<meta name="designer" content="Marcus Bl&auml;ttermann">
	
	<script type="text/javascript">var gaJsHost = (("https:" == document.location.protocol) ? "https://ssl." : "http://www."); document.write(unescape("%3Cscript src='" + gaJsHost + "google-analytics.com/ga.js' type='text/javascript'%3E%3C/script%3E"));</script><script type="text/javascript">try { var pageTracker = _gat._getTracker("UA-7448093-1"); pageTracker._trackPageview(); } catch(err) {}function mail(){var name = "marcus";var domain = "essenmitsosse.de";document.write('<a href=\"mailto:' + name + '@' + domain + '\">' + name + '@' + domain + '</a>');} function mail2(){	var name = "marcus";var domain = "essenmitsosse.de";document.write('<a class="important" href=\"mailto:' + name + '@' + domain + '\">hire me</a>');}</script>
	
	
	<?php wp_head(); ?>
</head>

<body class="homepage">
<ul id="navigation" class="black"></ul>

<p class="logo">
	<a href="http://essenmitsosse.de/?preview=1&amp;template=essenmitsosse-dreadnought&amp;stylesheet=essenmitsosse-dreadnought" title="Homepage" id="essenmitsosse">
		<span class="club">&clubs;</span>essenmitsosse <em>presents</em>
	</a>
</p>

<div class="allwrapper">
<div id="introduction"  class="homepresentation">
	<div class="wrapper">
			<h1>About</h1>
			<p>My name ist Marcus Blättermann. I’m majoring in Communication Design at <a href="http://burg-halle.de">Burg Giebichenstein University of Art & Design</a>. I work as a freelancer for illustration, print- & webdesign. If you like my work you can <script type="text/javascript">mail2();</script><noscript>hire me</noscript>.</p>
			<p>You should get my <a href="http://feeds.feedburner.com/essenmitsosse">RSS-Feed</a> and follow me on <a href="http://twitter.com/essenmitsosse">Twitter</a>.</p>
			
			<h1>Contact</h1>
			<table>
				<tr>
					<th>Mail</th>
					<td><script type="text/javascript">mail();</script><noscript>marcus -at- essenmitsosse -dot- de</noscript></td>
				</tr>
				<tr>
					<th>Twitter</th>
					<td><a href="http://twitter.com/essenmitsosse">@essenmitsosse</a></td>
				</tr>
				<tr>
					<th>ICQ</th>
					<td><a href="http://people.icq.com/people/about_me.php?uin=147783039">147783039</a></td>
				</tr>
				<tr>
					<th>Skype</th>
					<td>essenmitsosse</td>
				</tr>
				<tr>
					<th>Facebook</th>
					<td><a href="http://www.facebook.com/essenmitsosse">/essenmitsosse</a></td>
				</tr>
			</table>
	</div>
</div>

<div id="articles" class="homepresentation">
	<div class="wrapper color">
		<h1>Articles</h1>
		<ul>
<?php $my_query = new WP_Query('category_name=articles'); while ($my_query->have_posts()) : $my_query->the_post(); ?>
			<li>
				<h3>
					<a href="<?php the_permalink() ?>">
						<span class="date"><?php the_time('Y-m-d') ?></span>
						<?php the_title(); ?>
					</a>
				</h3>
			</li>
<?php endwhile; ?>
		</ul>
	</div>
</div>

<div id="portfolio" class="homepresentation black">
	<div class="wrapper">
		<h1>Portfolio</h1>
		<ul>
			<li class="commentPortfolio">
				I am sorry that this portfolio is quite out of date. New stuff will be coming soon.
			</li>
<?php $my_query = new WP_Query('category_name=portfolio'); while ($my_query->have_posts()) : $my_query->the_post(); $preview = get_post_custom_values("preview"); ?>
			<li>
				<a href="<?php the_permalink() ?>" style="background-image:url(<?php echo $preview[0]; ?>);">
					<span><?php the_title(); ?></span>
				</a>
			</li>
<?php endwhile; ?>
		</ul>
	</div>
</div>
</div>

<?php wp_footer(); ?>
</body>
</html>