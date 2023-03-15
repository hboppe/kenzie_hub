import { ButtonHTMLAttributes } from "react";
import styled, { ThemedStyledProps } from "styled-components";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  primary?: string;
  primaryNegative?: string;
}

const Button = styled.button<ThemedStyledProps<IButtonProps, any>>`
    background-color: ${props => props.primaryNegative ? 'var(--color-primary-Negative)' 
        : props.primary ? 'var(--color-primary)' : 'var(--grey-1)'};
    color: var(--grey-0);

    border: none;
    padding: 10px 30px;
    font-size: 13px;
    border-radius: 4px;
    cursor: pointer;
    transition: .5s ease-in-out;

    &:hover {
        background-color: ${props => props.primaryNegative ? 'var(--color-primary)' 
            : props.primary ? 'var(--color-primary-focus)'
            : 'var(--grey-2)'};
    }
`
export default Button;