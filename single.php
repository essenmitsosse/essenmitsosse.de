<?php post;
 if (in_category('portfolio')) {
 include(TEMPLATEPATH .'/portfolio.php');
 } else {
 include(TEMPLATEPATH . '/article.php');
} ?>