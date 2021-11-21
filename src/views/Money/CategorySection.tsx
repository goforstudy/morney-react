import { useState } from "react"
import styled from "styled-components"
const Wrapper = styled.section`
font-size: 24px;
>ul{
    display: flex;
    background: #c4c4c4;
    >li{
        width: 50%;
        text-align: center;
        padding: 16px 0;
        position: relative;
        &.selected::after{
            content: '';
            display: block;
            height: 3px;
            position: absolute;
            background: #333;
            bottom: 0;
            width: 100%;
            left: 0;
        }
    }
}
`

type Category = '-' | '+'
type Props = {
    value: Category;
    onChange: (value: Category) => void;
}
const CategorySection: React.FC<Props> = (props) => {
    const categoryMap = {
        '-' : '支出',
        '+' : '收入'    
    }
    type keys  = keyof typeof categoryMap;
    const [categoryList] = useState<keys[]>(['-', '+'])
    return (
        <Wrapper>
            
            <ul>
                {
                    categoryList.map((item, index) => (
                        <li 
                            key={index}
                            className={props.value === item ? 'selected' : ''}
                            onClick={() => {
                                props.onChange(item)
                            }}
                        >{categoryMap[item]}</li>

                    ))
                }
            </ul>
        </Wrapper>
    )
}
export {CategorySection}