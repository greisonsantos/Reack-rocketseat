import React, { Component } from 'react';

import api from '../../services/api';
import './styles.css';

export default class Main extends Component{

 //ultilizado para armazena os objetos
    state={
    	products:[]
    }

   //e executado assim que o componente e carregado em tela componentDidMount

    componentDidMount(){
        this.loadProducts();
    }

    loadProducts= async ()=>{
    	const response = await api.get('/products');
    	console.log(response.data.docs);

       //preeenchendo o estado do objeto
    	this.setState({products: response.data.docs});
    }

    //fica escutando qualquer alteração no state
	render(){

      const{ products}= this.state;

		// return <h1> Quantidade de Produtos {this.state.products.length}</h1>
		return(
              <div className="product-list">
                 {this.state.products.map(product =>(
                     <article key={product._id}>
                      <strong> {product.title}</strong>
                      <p>{product.description} </p>
                      <a href="#">Detalhes </a>
                      </article>
                 	))}
              </div>
			);
	}
}