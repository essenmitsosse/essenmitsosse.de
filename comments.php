	<div id="meta" <?php if (in_category('articles')) {?>class="color"<?php } ?>>
		<?php comments_number('', '<h2><em>There is only </em>one comment</h2>', '<h2><em>There are </em>% comments</h2>' );?>

		<ol id="comments">
<?php foreach ($comments as $comment) : ?>
			<li id="comment-<?php comment_ID() ?>">
				<?php echo get_avatar( $comment, 140); ?>
				
				<div class="commentinfo">
					<p class="author"><?php comment_author_link() ?></p>
					<p class="commenttime"><?php comment_date() ?><br/><?php comment_time() ?></p>
				</div>
				<div class="commentcontent">
					<?php if ($comment->comment_approved == '0') : ?><strong>Your comment is awaiting moderation.<strong><?php endif; ?>		
					<?php comment_text() ?>
				</div>			
			</li>
<?php endforeach; ?>
		</ol>

		<h2><em>Leave a</em> comment</h2>
		<form action="http://essenmitsosse.de/blog/wp-comments-post.php" method="post" id="commentform">
			<p>
				<label for="author">Name<br/><em>(required)</em></label>
				<input type="text" class="textinput" name="author" id="author" value="" tabindex="1" aria-required='true' />
			</p>
		
			<p>
	
				<label for="email">Mail<br/><em>(required, not published)</em></label>
				<input name="email" class="textinput" id="email" value="" tabindex="2" aria-required='true' type="email" />
			</p>
			
			<p>
				<label for="url">Website</label>
				<input name="url" class="textinput" id="url" value="" tabindex="3" type="url"/>
			</p>
	
			
			<p>
				<label for="url">Your Comment</label>
				<textarea name="comment" class="textinput" id="comment" cols="100" rows="10" tabindex="4"></textarea>
			</p>
			
			<p>
				<input name="submit" type="submit" class="submit" tabindex="5" value="Submit Comment" />
				<?php comment_id_fields(); ?>
			</p>
			<?php do_action('comment_form', $post->ID); ?>

		</form>
	</div>
