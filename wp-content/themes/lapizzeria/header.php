<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<?php wp_head(); ?>
</head>
<body>

	<header class="site-header contenedor">
		<div class="logo">
			<a href="<?php echo esc_url(home_url('/')); ?>">
				<img src="<?php echo get_template_directory_uri(); ?>/img/logo.svg" alt="logo">
			</a>
		</div>
		<div class="informacion-header">
			<div class="redes-sociales">
				<!-- TODO: Agregar menu -->
			</div><!-- Redes sociales -->
			<div class="direccion">
				<p>8179 Bay AVenue Mountain View, CA 94043</p>
				<p>Teléfono: 998633565</p>
			</div>
		</div><!-- .informacion-header -->
	</header>
	
	<div class="menu-principal">
		<div class="contenedor">
			<?php 
				$args = array(
					'theme_location' => 'header_menu',
					'container' => 'nav',
					'container_class' => 'menu-sitio',
					'container_id' => 'menu'
				);

				wp_nav_menu($args);
			 ?>
		</div>
	</div>