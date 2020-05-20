const { registerBlockType } = wp.blocks;
const { MediaUpload, RichText, URLInputButton, BlockControls, AlignmentToolbar } = wp.editor;
const { IconButton } = wp.components;

/*Logo para el bloque*/
import { ReactComponent as Logo } from '../pizzeria-icon.svg';

registerBlockType('lapizzeria/textoimagen',{
	title:'Pizzeria Texto e Imagen',
	icon: { src: Logo },
	category: 'lapizzeria',
	attributes:{
		imagenFondo:{
			type:'string',
			selector: '.ingredientes-bloque'
		}
	},
	edit:props =>{

		const { attributes: {imagenFondo }, setAttributes } = props;

		const onSeleccionarImagen = nuevaImagen => {	
			setAttributes({ imagenFondo : nuevaImagen })
		}

		return(
				<div className="ingredientes-bloque" style={{ background:`url(${imagenFondo})` }}>
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
					<div className="contenido-ingredientes">
						<div className="texto-ingredientes">
							<div className="imagen-ingredientes">

							</div>
						</div>
					</div>
				</div>	
			)
	},
	save:props =>{
		return(
				<p>Desde el FrontEnd</p>
			)
	}
});