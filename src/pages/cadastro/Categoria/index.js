import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField/index'

function CadastroCategoria(){
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: ''
  }

  const [categorias, setCategorias] = useState([])
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor){
    setValues({
      ...values,
      [chave]: valor,
    })
  }

  function handleChange(infos){
    const { getAttribute, value } = infos.target;
    setValue(

      getAttribute('name'), 
      value
    );
  }

    return(
     <PageDefault>
        <h1>Cadastro de Categoria: {values.nome}</h1>
      
        <form onSubmit={(infos)=>{
            infos.preventDefault();
            setCategorias([
              ...categorias,
              values
            ]);

            setValues(valoresIniciais)
          }}>

          <FormField 
            label='Nome da Categoria'
            type="text"
            value={values.nome}
            name='nome'
            onChange={handleChange}
          />

          <FormField 
            label='Cor'
            type="color"
            value={values.cor}
            name='cor'
            onChange={handleChange}
          />

          <FormField 
            label='Descrição'
            type=''
            value={values.descricao}
            name='descricao'
            onChange={handleChange}
          />

          {/* <div>  
            <label>
              Descrição
              <textarea
                type="text" value={values.descricao} 
                name="descricao"
                onChange={handleChange}
              />
            </label>
          </div>*/}
            
          

          <button>
            Cadastrar
          </button>
        </form>

        <ul>
          {categorias.map((categoria, indice)=>{
              return (
                <li key={`${categoria}${indice}`}>
                  {categoria.nome}
                </li>)}
          )}
        </ul>

        <Link to='/'>
          Ir para Home
        </Link>
      </PageDefault>
    )
  }

  export default CadastroCategoria;