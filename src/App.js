import { useEffect, useState } from 'react';
import './App.css';
import Banner from './componentes/Banner';
import Form from './componentes/Form';
import Time from './componentes/Time';

function App() {
  const defaultUser =[{
    nome: 'Ruan Felipe',
    cargo: 'Desenvolvedor PHP',
    imagem: 'https://github.com/RuanSilva6721.png',
    linkedin: 'https://www.linkedin.com/in/ruan-felipe-silva-06b9631a6/',
    times: 'Back-End',
  }
  ];



  const times = [
    {
      nome: 'Front-End',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF',
  },
  {
    nome: 'Back-End',
    corPrimaria: '#D86EBF',
    corSecundaria: '#F7F7F7',
},
  {
      nome: 'Data Science',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2',
  },
  {
      nome: 'Devops',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
  },
  {
      nome: 'UX e Design',
      corPrimaria: '#D86EBF',
      corSecundaria: '#FAE5F5',
  },
  {
      nome: 'Mobile',
      corPrimaria: '#FEBA05',
      corSecundaria: '#FFF5D9',
  },
  {
      nome: 'Inovação e Gestão',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF',
  }
]
  const [colaboradores, setColaboradores] = useState([]);
  const aoNovoColaboradorAdicionar = (colaborador) =>{
    setColaboradores([...colaboradores, colaborador])
    
  }
  useEffect(() => {
    defaultUser.map(user => {
      console.log(user)
      setColaboradores([...colaboradores, user])
    }
    )
	},[])

  return (
    <div className="App">
      <Banner/>
      <Form aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionar(colaborador)} times={times.map(time => time.nome)} />

      {times.map(time => <Time key={time.nome} nome={time.nome}  corPrimaria={time.corPrimaria}  corSecundaria={time.corSecundaria} colaboradores={colaboradores.filter(colaborador => colaborador.times == time.nome)}/>)}
      

    </div>
  );
}

export default App;
