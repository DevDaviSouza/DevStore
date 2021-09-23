import axios from 'axios'

const api = axios.create({
    baseURL: 'https://nsfdevstoreapi.herokuapp.com/produto'
})

export default class Api {
    
    async listar() {
        let r = await api.get('/produto')
        return r.data;
    }


    async inserir(produto, categoria, avaliacao, precode, precopor, estoque, link, descricao) {
        
        let r = await api.post(`/produto`, { produto, categoria, avaliacao, precode, precopor, estoque, link, descricao })
        
        return r.data;
    }


    async alterar(id, produto, categoria, precode, precopor, avaliacao, descricao, estoque, imagem, ativo ) {
        console.log('passei aqui')
        let r = await api.put(`/produto/` + id, { produto, categoria, precode, precopor, avaliacao, descricao, estoque, imagem })
        
        return r.data;
    }

    async deletar(id) {
        let r = await api.delete(`/produto/` + id)
        return r.data;
    }

    

}