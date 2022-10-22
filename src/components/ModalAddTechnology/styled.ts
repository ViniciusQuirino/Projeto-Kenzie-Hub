import styled from "styled-components";

const ModalBlack = styled.div`
    position: fixed;
    top: 0px;
    left: 0px;
    height: 100vh;
    width: 100%;
    background: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;


    .ContainerModal{
        position: relative;
        top: -40px;
        display: flex;
        flex-direction: column;
        align-items: center;
        color: var(--grey-0);
        background: var(--grey-3);
        width: 100%;
        max-width: 500px;
        padding: 0px 1rem 1rem;
        border-radius:5px;
    }

    header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: var(--grey-2);
        width: 100%;
        padding: 1rem;
        border-radius: 5px;
    }

    header h3{
        font: var(--font-title-3);
    }

    .closeModal{
        background-color: var(--grey-3);
        color: var(--grey-0);
        font: var(--font-title-2);
        border: none;
        border-radius: 5px;
        padding: 6px 10px;
    }

    form{
        width: 94%;
        height: max-content;
        background: var(--grey-3);
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        padding: 2rem 0;
        box-sizing: border-box;
        border-radius: 5px;
    }

    form div{
         width: 100%;
         display: flex;
         flex-direction: column;
         align-items: center;
         gap: 0.5rem;
         position: relative;
    }

    form div label{
        align-self: flex-start;
        font: var(--font-text-1);
        color: var(--grey-0);
    }

    form div input{
        width: 100%;
        height: 40px;
        border-radius: 5px;
        background: var(--grey-2);
        border: none;
        padding: 0px 2.5rem 0px 0.8rem;
        box-sizing: border-box;
        color: var(--grey-0);
        font: var(--font-text-3);
    }

    form div input:focus{
        outline: 2px solid var(--color-primary);
    }

    #nomeTech::placeholder{
        color:var(--grey-1);
    }

    form div p {
        color:var(--negative);
        font: var(--font-text-1);
        align-self: flex-start;
    }

    div select{
        background-color: var(--grey-2);
        width: 100%;
        height: 40px;
        appearance: none;
        border: 2px solid transparent;
        border-radius: 5px;
        color: var(--grey-0);
        padding: 0px 0.8rem;
    }

    div select:focus{
        outline: 2px solid var(--color-primary);
    }

    div svg{
        position: absolute;
        right: 1rem;
        top: 37px;
        cursor: pointer;
        color: var(--grey-1);
    }

    form button{
        background-color: var(--color-primary);
        color: var(--grey-0);
        font: var(--font-text-1);
        border: none;
        width: 100%;
        height: 40px;
        border-radius: 5px;
    }


`
export default ModalBlack;
