const { registerBlockType } = wp.blocks;
const { MediaUpload } = wp.editor;
const { IconButton } = wp.components;

//logo para el bloque

import {ReactComponent as Logo } from '../pizzeria-icon.svg';

registerBlockType('lapizzeria/hero',{
	title:'La Pizzeria Hero',
	icon: { src: Logo},
	category: 'lapizzeria',
	attributes:{
		imagenHero:{
			type:'string',
			selector: '.hero-block'
		}
	},
	edit: props =>{

		const { attributes: {imagenHero}, setAttributes } = props;

		const onSeleccionarImagen = nuevaImagen => {	
			setAttributes({ imagenHero: nuevaImagen.sizes.full.url })
		}

		return(
				<div className="hero-block"
					style={{ backgroundImage: `linear-gradient(rgba(0,0,0,.75), rgba(0,0,0,.75)), url(${imagenHero})` }}
				>
					<MediaUpload
						onSelect={onSeleccionarImagen}
						type="image"
						render={({open}) =>(
							<IconButton
								className="lapizzeria-agregar-imagen"
								onClick={open}
								icon="format-image"
								showTooltip="true"
								label="Cambiar imagen"
							/>
						)}
					/>
				</div>
			)
	},
	save: props =>{
		return(
				<h1>Frontend</h1>
			)
	}
});