
import { useState, useEffect, useRef } from 'react'
import Cabecalho from '../../components/cabecalho'
import Menu from '../../components/menu'
import Api from '../../service/api'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingBar from 'react-top-loading-bar'
import { Container, Conteudo } from './styled'


const api = new Api();
export default function Index() {
    
    const [produto, setProduto] = useState([])
    const [nome, setNome] = useState('')
    const [categoria, setCategoria] = useState('')
    const [avaliacao, setAvaliacao] = useState('')
    const [precode, setPrecode] = useState('')
    const [precopor, setPrecopor] = useState('')
    const [estoque, setEstoque] = useState('')
    const [link, setLink] = useState('')
    const [descricao, setDescricao] = useState('')
    const [idAlterando, setIdAlterando] = useState(0)
    

//-----------------------------------------------------------------------------------------------------------------


    const Listar = async () => {
        loading.current.continuousStart();
        let listar = await api.listar()
        
        console.log(listar)
        setProduto(listar);
        loading.current.complete();
    }

    

    const loading = useRef(null);

    const Inserir = async () => {
        
        if (idAlterando == 0) {
            let r = await api.inserir(nome, categoria, avaliacao, precode, precopor, estoque, link, descricao);
            console.log(r)
            toast.dark('Produto inserido')
            Listar()
        } else {
            let r = await api.alterar(idAlterando, nome, categoria, precode, precopor, avaliacao, descricao, estoque, link);
            toast.dark('produto alterado')
            console.log(r)
            Listar()
            limparcampos();
        }
    }
        
    

    function limparcampos() {
        setIdAlterando(0)
        setNome('')
        setCategoria('')
        setAvaliacao('')
        setPrecode('')
        setPrecopor('')
        setEstoque('')
        setLink('')
        setDescricao('')
            
    }

    const remover = async (id) => {
        
        let certeza = window.confirm('Tem certeza que deseja excluir esse item?')
        if (certeza == true) {
            let r = await api.deletar(id)
        toast.dark('produto removido')
        Listar();
        }
        
    }



    const editar = async (item) => {
        setIdAlterando(item.id_produto)
        setNome(item.nm_produto)
        setCategoria(item.ds_categoria)
        setPrecode(item.vl_preco_de)
        setPrecopor(item.vl_preco_por)
        setEstoque(item.qtd_estoque)
        setAvaliacao(item.vl_avaliacao)
        setDescricao(item.ds_produto)
        setLink(item.img_produto)
    }



    useEffect(() => {
        Listar()
    }, [])
    
    
    return (
        <Container>
            <ToastContainer />
            <LoadingBar color="red" ref={loading} />
            <Menu />
            <Conteudo>
                <Cabecalho />
                <div class="body-right-box">
                    <div class="new-student-box">
                        
                        <div class="text-new-student">
                            <div class="bar-new-student"></div>
                            <div class="text-new-student">{idAlterando == 0 ? "Novo produto" : "Alterando produto " + idAlterando}</div>
                        </div>

                        <div class="input-new-student"> 
                            <div class="input-left">
                                <div class="agp-input"> 
                                    <div class="name-student"> Nome: </div>  
                                    <div class="input"> <input type="text" value={nome} onChange={e => setNome(e.target.value)} /> </div>  
                                </div> 
                                <div class="agp-input">
                                    <div class="number-student"> Categoria: </div>  
                                    <div class="input"> <input type="text" value={categoria} onChange={e => setCategoria(e.target.value)} /> </div> 
                                </div>
                                <div class="agp-input">
                                    <div class="number-student"> Avaliação: </div>  
                                    <div class="input"> <input type="text" value={avaliacao} onChange={e => setAvaliacao(e.target.value)} /> </div> 
                                </div>
                            </div>

                            <div class="input-right">
                                <div class="agp-input">
                                    <div class="corse-student"> Preço DE: </div>  
                                    <div class="input"> <input type="text" value={precode} onChange={e => setPrecode(e.target.value)} /> </div>  
                                </div>
                                <div class="agp-input">
                                    <div class="class-student"> Preço POR: </div>  
                                    <div class="input"> <input type="text" value={precopor} onChange={e => setPrecopor(e.target.value)} /> </div> 
                                </div>
                                <div class="agp-input">
                                    <div class="number-student"> Estoque: </div>  
                                    <div class="input"> <input type="text" value={estoque} onChange={e => setEstoque(e.target.value)} /> </div> 
                                </div>
                            </div>

                            
                        </div>
                        <div className="input-bottom">
                                <div className="link-image"> Link Imagem: </div>
                                <div className="input-large"> <input type="text" value={link} onChange={e => setLink(e.target.value)} /></div>
                        </div>

                        <div className="text-area">
                            <div className="descricao"> Descrição: </div>
                            <textarea id="textarea" rows="10" cols="91" value={descricao} onChange={e => setDescricao(e.target.value)}></textarea>
                            <div class="button-create"> <button onClick={Inserir}> {idAlterando == 0 ? "Cadastrar" : "alterar"} </button> </div>
                        </div>
                        
                    </div>

                    <div class="student-registered-box">
                        <div class="row-bar"> 
                            <div class="bar-new-student"> </div>
                            <div class="text-registered-student"> Produtos cadastrados </div>
                        </div>
                    
                        <table class ="table-user">
                            <thead>
                                <tr className="">
                                    <th> ID </th>
                                    <th> Produto </th>
                                    <th> Categoria </th>
                                    <th> Preço </th>
                                    <th> Estoque </th>
                                    <th class="coluna-acao"> </th>
                                    <th class="coluna-acao"> </th>
                                </tr>
                            </thead>
                    
                            <tbody>

                                {produto.map((item, i) => 
                                    <tr className={i % 2 == 0 ?"linha-alternada" : "" }>
                                    <td> {item.id_produto} </td>
                                    <td title={item.nm_produto}> {item.nm_produto != null && item.nm_produto.length >= 25 ? item.nm_produto.substr(0, 25) + "..." : item.nm_produto}</td>
                                    <td> {item.ds_categoria} </td>
                                    <td> {item.vl_preco_por} </td>
                                    <td> {item.qtd_estoque} </td>
                                    <td> <button class="coluna-acao" onClick={() => editar(item)}> <img src="/assets/images/edit.svg" alt="" /> </button> </td>
                                    <td> <button class="coluna-acao" onClick={() => remover(item.id_produto)}> <img src="/assets/images/trash.svg" alt="" /> </button> </td>
                                </tr>
                                )}
                                
                            
                                
                                
                            </tbody> 
                        </table>
                    </div>
                </div>
            </Conteudo>
        </Container>
    )
}
