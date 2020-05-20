const { registerBlockType } = wp.blocks;
const { MediaUpload } = wp.editor;
const { IconButton } = wp.components;

//logo para el bloque

import {ReactComponent as Logo } from '../pizzeria-icon.svg';

registerBlockType('lapizzeria/hero',{
	title:'La Pizzeria Hero',
	icon: { src: Logo},
	category: 'lapizzeria',
	edit: props =>{
		
		const onSeleccionarImagen = nuevaImagen => {

		}

		return(
				<div className="hero-block">
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