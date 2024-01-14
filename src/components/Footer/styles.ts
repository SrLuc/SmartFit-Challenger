import styled from "styled-components";

export const StyledFooter = styled.footer`

    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 70px 0;

    background-color: var(--dark-grey);

    img{
        width: 200px;
        height: auto;
    }

    p{
        margin-top: 20px;
        font-size: 20px;
        color: white
    }
`;