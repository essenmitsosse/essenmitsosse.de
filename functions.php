<?php

function introin() {

foreach((get_the_category()) as $category) {
if ($category->category_parent == 0) {
} else {  
$childcategory .= ' <a href="' . get_category_link($category->cat_ID) . '" title="' . $category->name . '">' . $category->name . '</a>, ';  
}}

    $tweet = '<div class="introtext">' . substr($childcategory,0,-2) . " &#8211; ";
    return $tweet;
}


function addContent($content = '') {
	$content = preg_replace('/<div class="introtext">/i', introin() ,$content);
	return $content;
}
	add_filter('the_content', 'addContent');

?>
