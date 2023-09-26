import styled from "styled-components";

const TopicTitleWrapper = styled.h2`
        display:flex;
        justify-content:center;
        color: ${({ color, theme }) => (color ? color : theme.colors.primary)};

        margin:1rem 0 2rem 0;
        font-size:2rem;
        font-weight:700;
        text-align:center;
        @media(max-width: 900px){
                margin-top:1rem;
                font-size:18px!important;
                display:flex;
                align-items:center;
                margin-left:0px;
                }

        `
const TopicTitle = ({ children, color, ...props }) => {
    return <TopicTitleWrapper color={color} {...props}>{children}</TopicTitleWrapper>;
  };
  
export default TopicTitle;