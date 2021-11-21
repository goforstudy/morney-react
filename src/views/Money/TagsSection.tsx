import { useState } from "react"
import styled from "styled-components"
const Wrapper =  styled.section`
flex-grow: 1;
display: flex;
flex-direction: column;
justify-content: flex-end; 
align-items: flex-start;
background: #fff;
padding: 12px 16px;
>ol{
    margin: 0 -12px;
    >li {
        background: #d9d9d9;
        border-radius: 18px;
        display: inline-block;
        padding: 3px 18px;
        font-size: 14px;
        margin: 8px 12px; 
        &.selected{
            background: #f60
        }
    }
}
> button{
    background: none;
    border: none;
    padding: 2px 4px;
    color: #666;
    margin-top: 8px;
    border-bottom: 1px solid #333;
}
`
const TagsSection: React.FC = () =>{
    const [tags, setTags] = useState<string[]>(['衣', '食'])
    const [selectedTags, setSelectedTags] = useState<string[]>([])
    const addTag = () => {
        const tagName = window.prompt('新标签名称：')
        if(tagName!==null){
            setTags([...tags, tagName])
        }
    }
    const onToggleTag = (tag: string) => {
        if(selectedTags.includes(tag)) {
            setSelectedTags(selectedTags.filter(t=>t!==tag))
        } else {
            setSelectedTags([...selectedTags, tag])
        }
    }
    return (
        <Wrapper>
            
            <ol>
                {
                    tags.map((item, index) => (
                        <li key={index} onClick={() => {onToggleTag(item)}} className={selectedTags.indexOf(item) >= 0 ? 'selected' : ''}>{item}</li>
                    ))
                }
            </ol>
            <button onClick={addTag}>新增标签</button>
        </Wrapper>
    )
}

export {TagsSection}