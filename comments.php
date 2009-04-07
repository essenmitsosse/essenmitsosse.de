<div id="comments">
	<h2>There <?php comments_number('is no comment', 'one response', 'are % comments' );?> <span>about <?php the_title(); ?></span></h2>

	<ol>

<?php foreach ($comments as $comment) : ?>
		
		<li id="comment-<?php comment_ID() ?>">
			<?php echo get_avatar( $comment, 140); ?>
			<div class="commentinfo">
				<p class="author"><?php comment_author_link() ?></p>
				<p class="commenttime"><?php comment_date() ?><br/><?php comment_time() ?></p>
			</div>
			<div class="commentcontent">
<?php if ($comment->comment_approved == '0') : ?>
			<strong>Your comment is awaiting moderation.<strong><?php endif; ?>		
<?php comment_text() ?>
			</div>			
		</li>
<?php endforeach; ?>
		
	</ol>
	
	<h2>What's your opinion?</h2>
	
	<form action="<?php echo get_option('siteurl'); ?>/wp-comments-post.php" method="post" id="commentform">
	
	<p>
		<label for="author"><span>Name</span><br/>(required)</label>
		<input type="text" name="author" id="author" value="<?php echo $comment_author; ?>" tabindex="1" aria-required='true' />
	</p>
	
	<p>
		<label for="email"><span>Mail</span><br/>(required, not published)</label>
		<input name="email" id="email" value="<?php echo $comment_author_email; ?>" tabindex="2" aria-required='true' type="email" />
	</p>
	
	<p>
		<label for="url"><span>Website</span></label>
		<input name="url" id="url" value="<?php echo $comment_author_url; ?>" tabindex="3" type="url"/>
	</p>
	
	<p>
		<label for="url"><span>Your Comment</span></label>
		<textarea name="comment" id="comment" cols="100" rows="10" tabindex="4"></textarea>
	</p>
	
	<p>
		<input name="submit" type="submit" id="submit" tabindex="5" value="Submit Comment" />
		<input type="hidden" name="comment_post_ID" value="<?php echo $id; ?>" />
	</p>
	<?php do_action('comment_form', $post->ID); ?>
	
	</form>
</div>