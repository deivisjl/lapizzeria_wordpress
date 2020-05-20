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
		},
		tituloBloque:{
			type:'string',
			source:'html',
			selector:'.texto-ingredientes h1'
		},
		textoBloque:{
			type:'string',
			source:'html',
			selector:'.texto-ingredientes p'
		},
	},
	edit:props =>{

		const { attributes: {imagenFondo, tituloBloque, textoBloque }, setAttributes } = props;

		const onSeleccionarImagen = nuevaImagen => {	
			setAttributes({ imagenFondo : nuevaImagen })
		}

		const onChangeTitulo = nuevoTitulo => {
			setAttributes({ tituloBloque : nuevoTitulo })
		}

		const onChangeTexto = nuevoTexto => {
			setAttributes({ textoBloque : nuevoTexto })	
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
							<h1 className="titulo">
								<RichText
									placeholder={'Agrega el Título del Hero'}
									onChange={onChangeTitulo}
									value={tituloBloque}
								/>
							</h1>
							<p>
								<RichText
									placeholder={'Agrega el Texto del Hero'}
									onChange={onChangeTexto}
									value={textoBloque}
								/>
							</p>
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