// <?php while (have_posts()) : the_post();

// $the_tags ='';

// if (get_the_tags()) {
// 	foreach(get_the_tags() as $tag) {
// 		$the_tags = $the_tags.$tag->name.', ';
// 	}
// }

// $headerimage = get_post_custom_values("headerimage");
// $description = get_post_custom_values("description");

// ?>
// <!DOCTYPE html>
// <html lang="en">
// <head>
// 	<link rel="stylesheet" href="http://essenmitsosse.de/blog/wp-content/themes/essenmitsosse-behemoth/style.css" type="text/css" media="screen" />
// 	<link rel="alternate" type="application/rss+xml" title="essenmitsosse RSS-Feed" href="http://feeds.feedburner.com/essenmitsosse" />
// 	<link rel="pingback" href="http://essenmitsosse.de/blog/xmlrpc.php" />
// 	<link rel="shortcut icon" type="image/png" href="http://essenmitsosse.de/favicon.png" />
// 	<link rel="icon" type="image/png" href="http://essenmitsosse.de/favicon.png" />
// 	<link rel="index" title="essenmitsosse" href="http://essenmitsosse.de" />

// 	<title><?php wp_title(''); ?> &clubs; essenmitsosse </title>

// 	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
// 	<meta name="robots" content="index, follow" />
// 	<meta name="description" content="<?php echo $description[0]; ?>"/>
// 	<meta name="keywords" content="<?php echo substr_replace($the_tags ,"",-2); ?>">
// 	<meta name="date" content="<?php the_time('Y-m-d') ?>">
// 	<meta name="author" content="Marcus Bl&auml;ttermann">
// 	<meta name="designer" content="Marcus Bl&auml;ttermann">

// 	<script type="text/javascript">var gaJsHost = (("https:" == document.location.protocol) ? "https://ssl." : "http://www."); document.write(unescape("%3Cscript src='" + gaJsHost + "google-analytics.com/ga.js' type='text/javascript'%3E%3C/script%3E"));</script><script type="text/javascript">try { var pageTracker = _gat._getTracker("UA-7448093-1"); pageTracker._trackPageview(); } catch(err) {}function mail(){var name = "marcus";var domain = "essenmitsosse.de";document.write('<a href=\"mailto:' + name + '@' + domain + '\">' + name + '@' + domain + '</a>');} function mail2(){	var name = "marcus";var domain = "essenmitsosse.de";document.write('<a class="important" href=\"mailto:' + name + '@' + domain + '\">hire me</a>');}</script>

// 	<?php wp_head(); ?>
// </head>

// <?php if (in_category('portfolio')) {?>
<body class="single black portfolio">
  {/* <?php } else {?> */}
  {/* <body class="single article"> */}
  {/* <?php } ?> */}

  <ul id="navigation" class="black">
    <li class="home">
      <a href="http://essenmitsosse.de" rel="index">
        Home
      </a>
    </li>
    <li class="articlenavigation">
      <ul>
        {/* <?php next_post_link('<li class="newer">%link</li>', '<span class="arrow">&#9668;</span> <span class="title">%title</span>', true); ?> */}

        {/* <?php previous_post_link('<li class="older">%link</li>', '<span class="arrow">&#9658;</span> <span class="title">%title</span>', true); ?> */}
      </ul>
    </li>
  </ul>

  <div
    class="intro<?php if (in_category('articles')) {?> color<?php } ?>"
    style="background-image:url(<?php echo $headerimage[0]; ?>);"
  >
    <p class="logo">
      <a href="http://essenmitsosse.de/" id="essenmitsosse">
        <span class="club">&clubs;</span>essenmitsosse <em>presents</em>
      </a>
    </p>
    <h1>{/* <?php the_title(); ?> */}</h1>
  </div>

  <div class="content white">
    {/* <?php if (in_category('articles')) {?><div class="date"><p><?php the_time('Y-m-d') ?></p></div><?php } ?> */}
    {/* <?php the_content(); ?> */}
    <hr />
    <div class="fourwide">
      <h3>
        <em>A little bit</em> about me
      </h3>
      <p>
        My name ist Marcus Blättermann. <br />
        I’m majoring in communication design and work as a freelancer for
        illustration, print- & webdesign. If you like my work you can{" "}
        <script type="text/javascript">mail2();</script>
        <noscript>hire me. marcus -at- essenmitsosse -dot- de</noscript>.
      </p>
    </div>

    <div class="fourwide">
      <h3>
        <em>What you should </em>do next
      </h3>
      <p>
        Don’t forget to subscribe to my{" "}
        <a href="http://feeds.feedburner.com/essenmitsosse" rel="alternate">
          RSS-Feed
        </a>{" "}
        and follow me on <a href="http://twitter.com/essenmitsosse">Twitter</a>.
        You should also check out my{" "}
        <a href="http://essenmitsosse.de">Portfolio</a>.
      </p>
    </div>

    <div class="fourwide">
      <h3>
        <em>If you didn&#8217;t like this one</em>You will hate these
      </h3>
      {/* <?php st_related_posts();?> */}
    </div>
  </div>
  {/* <?php comments_template(); ?> */}

  {/* <?php wp_footer(); ?> */}
</body>;
// </html>
// <?php endwhile ?>
