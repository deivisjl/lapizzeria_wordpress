const { registerBlockType } = wp.blocks;
const { MediaUpload, RichText, URLInputButton } = wp.editor;
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
		},
		tituloHero:{
			type:'string',
			source:'html',
			selector:'.hero-block h1'
		},
		textoHero:{
			type:'string',
			source:'html',
			selector:'.hero-block p'
		},
		urlHero:{
			type:'string',
			source:'attribute',
			attribute:'href'
		}
	},
	edit: props =>{

		const { attributes: {imagenHero, tituloHero, textoHero, urlHero }, setAttributes } = props;

		const onSeleccionarImagen = nuevaImagen => {	
			setAttributes({ imagenHero: nuevaImagen.sizes.full.url })
		}

		const onChangeTitulo = nuevoTitulo =>{
			setAttributes({ tituloHero: nuevoTitulo })
		}

		const onChangeTexto = nuevoTexto =>{
			setAttributes({ textoHero: nuevoTexto })	
		}

		const onChangeUrl = nuevaUrl => {
			setAttributes({ urlHero: nuevaUrl })	
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
					<h1 className="titulo">
						<RichText
							placeholder={'Agrega el Título del Hero'}
							onChange={onChangeTitulo}
							value={tituloHero}
						/>
					</h1>
					<p className="titulo">
						<RichText
							placeholder={'Agrega el Texto del Hero'}
							onChange={onChangeTexto}
							value={textoHero}
						/>
					</p>
					<div>
						<a href={urlHero} className="boton boton-primario">Leer Más</a>
					</div>
					<URLInputButton
						onChange={onChangeUrl}
						url={urlHero}
					/>
				</div>
			)
	},
	save: props =>{
		
		const { attributes: {imagenHero, tituloHero, textoHero, urlHero }, setAttributes } = props;

		return(
				<div className="hero-block"
					style={{ backgroundImage: `linear-gradient(rgba(0,0,0,.75), rgba(0,0,0,.75)), url(${imagenHero})` }}
				>
					<h1 className="titulo">
						<RichText.Content value={tituloHero}/>
					</h1>
					<p className="titulo">
						<RichText.Content value={textoHero}/>
					</p>
					<div>
						<a href={urlHero} className="boton boton-primario">Leer Más</a>
					</div>
				</div>
			)
	}
});