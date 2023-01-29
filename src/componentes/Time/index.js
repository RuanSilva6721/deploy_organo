import './Time.css'
import Colaborador from '../Colaborador'

const Time = (props) => {
  const css = { backgroundColor : props.corSecundaria }
  return (
    <div>
       <section className='time' style={css}>
        
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            <div className='colaboradoes'>
            {props.colaboradores.map(colaborador => <Colaborador key={colaborador.nome} linkedin={colaborador.linkedin} corFundo={props.corPrimaria} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem}/>)}
            </div>
        </section> 

        
    </div>
  )
}

export default Time