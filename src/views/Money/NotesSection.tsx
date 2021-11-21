import { useRef, useState } from "react"
import styled from "styled-components"
const Wrapper = styled.section`
background: #f5f5f5;
padding: 10px 16px;
font-size: 14px;
>label{
    display: flex;
    align-items: center;
    >span{
        margin-right: 16px;
        white-space: nowrap;
    }
    >input{
        display: block;
        width: 100%;
        height: 72px;
        background: none;
        border: none;
    }
}
`

const NotesSection: React.FC = () => {
    const [note, setNote] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)
    const onBlur = () => {
        if(inputRef.current) {
            setNote(inputRef.current.value);
        }
    }
    return (
        <Wrapper>
            
            <label>
                <span>备注</span>
                {note}
                <input 
                    ref = {inputRef}
                    placeholder="在这里添加备注" 
                    type="text" 
                    defaultValue={note}
                    onBlur={onBlur}
                />
            </label>
        </Wrapper>
    )
}
export {NotesSection}