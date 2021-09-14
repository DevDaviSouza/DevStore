import styled from 'styled-components'

const Container = styled.div`

    .reader-right-box {
        display: flex;
        flex-direction: row;
        background-color:  #fff;
        padding: 1.3em;
        align-items: center;
        justify-content: space-between;
    }

    .user-name  {
        padding-left: 1em;
        font-size: 16px;
    }

    .user-name b {
        color: #4a4a4a;
    }





    .left-button img {
       
        
        width: 44px;
        margin-left: 5px;
        height: 48px;
        
    }

    .refresh-button img {
       
        
        width: 44px;
        height: 44px;
        margin-top: 2px;
        margin-right: 7px;
        
    }



    .box-image {
        display: flex;
        flex-direction: row;
        padding: 0.5em;
    }

    .box-user {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .bottom-bar-right-header {
        border-bottom: .5px solid #e9e9e9;
        width: 97%;
        align-self: center;
        background-color: #e9e9e9;
    }
`


export { Container }