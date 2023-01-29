import { useState } from 'react'
import Button from '../Button'
import DropdownList from '../DropdownList'
import Label from '../Label'
import './Form.css'

const Form = (props) => {

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [times, setTimes] = useState('');
    const [linkedin, setLinkedin] = useState('');



    const aoSalvar = (e) => {
        e.preventDefault();
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            times, 
            linkedin
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTimes('')
        setLinkedin('')
  
    }
    return (
        <div>
            <section className="Form">
                <form onSubmit={aoSalvar}>
                    <h2>Preencha os dados para criar o card do colaborador</h2>
                    <Label 
                    obrigatorio={true} 
                    label="Nome" 
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                    placeholder="Digite o seu nome" 
                    />
                    <Label 
                    obrigatorio={true} 
                    label="Cargo" 
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                    placeholder="Digite o seu cargo" 
                    />
                    <Label label="Imagem" 
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                    placeholder="Digite o endereço da Imagem" />

                    <Label label="Linkedin" 
                    valor={linkedin}
                    aoAlterado={valor => setLinkedin(valor)}
                    placeholder="Digite o endereço do seu Linkedin" />

                    <DropdownList 
                    obrigatorio={true} 
                    itens={props.times} 
                    valor={times}
                    aoAlterado={valor => setTimes(valor)}
                    label="Time"
                    />
                    <Button>
                        Criar Card
                    </Button>

                </form>
            </section>

        </div>
    )
}

export default Form
