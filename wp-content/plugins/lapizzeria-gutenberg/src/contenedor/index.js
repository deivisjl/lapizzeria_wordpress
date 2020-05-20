const { registerBlockType } = wp.blocks;
const { MediaUpload } = wp.editor;
const { IconButton } = wp.components;

//logo para el bloque

import {ReactComponent as Logo } from '../pizzeria-icon.svg';

/*
	PASOS PARA CREAR UN BLOQUE EN GUTENBERG
	1.- Importar el componente que utilizaras
	2.- Coloca el componente donde deseas utilizarlo
	3.- Crea una funcion que lea los contenidos
	4.- Registra un atributo
	5.- Extraer el contenido desde props
	6.- Guarda el contenido con setAttributes
	7.- Lee los contenidos guardados en save()
*/

registerBlockType('lapizzeria/contenedor', {
	title:'Pizzeria Contenedor',
	icon:{ src: Logo },
	category:'lapizzeria',
	attributes:{
		imagenFondo:{
			type:'string',
			selector:'.bloque-contenedor'
		}
	},
	edit: props =>{

		const { attributes: { imagenFondo }, setAttributes } = props;

		const onSeleccionarImagen = nuevaImagen=>{
			setAttributes({ imagenFondo: nuevaImagen.sizes.full.url })
		}

		return(
				<div className="bloque-contenedor" style={{ backgroundImage:`url(${imagenFondo})`}}>
					<div className="contenido-bloque">
						<div className="imagen-fondo">
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
						<div className="bloques-internos">
								
						</div>
					</div>
				</div>
			)
	},
	save: props =>{
		return(<h1>En el front</h1>)
	}
});