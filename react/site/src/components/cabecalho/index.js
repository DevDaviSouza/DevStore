
import { Container } from './styled'


export default function Index() {
    return (
        <Container>
            <div class="reader-right-box">
                <div class="box-user"> 
                    <div class="user-image">
                        <img src="/assets/images/usuario.jpeg" alt="" />
                        <div class="absolute">3</div>
                    </div>
                    <div class="user-name"> Olá, <b>Bruno de Oliveira</b> </div>
                </div>
                
                <div class="box-image">
                    <div class="refresh-button"> <img src="/assets/images/recarregar devstore.PNG" alt = "" />   </div>
                    <div class="left-button"> <img src="/assets/images/sair devstore.PNG" alt = "" />   </div>
                </div>
            </div>
            <div class="bottom-bar-right-header" />
        </Container>
    )
}
