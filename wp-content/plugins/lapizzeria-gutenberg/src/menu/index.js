const { registerBlockType } = wp.blocks;
const { withSelect } = wp.data;
const { RichText } = wp.editor;

/*Logo para el bloque*/
import { ReactComponent as Logo } from '../pizzeria-icon.svg';

registerBlockType('lapizzeria/menu',{
	title:'La Pizzeria Menu',
	icon: { src: Logo },
	category: 'lapizzeria',
	edit: withSelect((select) =>{

		return {
			//enviar una peticion a la API
			especialidades: select("core").getEntityRecords('postType','especialidades')//especialidades declarada en el postType
		};
	})

	(({especialidades})=>{
		console.log(especialidades)
		return (
			<>
				<h2>Nuestras Especialidades</h2>
				<ul className="nuestro-menu">
					{especialidades.map(especialidad => (
						<li>
							<img src="{especialidad.imagen_destacada}" alt="" />							
							<div className="platillo">
								<div className="precio-titulo">
									<h3>{especialidad.title.rendered}</h3>
									<p>$ {especialidad.precio}</p>
								</div>
								<div className="contenido-platillo">
									<p>
										<RichText value={especialidad.content.rendered.substring(0,180)}/>
									</p>
								</div>
							</div>
						</li>
					))}
				</ul>
			</>
		)
	}),
	save:()=>{
		return null
	}
})