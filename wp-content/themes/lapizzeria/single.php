<?php get_header(); ?>

<?php while(have_posts()): the_post(); ?>
	<?php get_template_part('template-parts/loop','contenido'); ?>
	<!-- Comentarios -->
	<?php comments_template(); ?>
	<!-- Fin comentarios -->
<?php endwhile; ?>

<?php get_footer(); ?>