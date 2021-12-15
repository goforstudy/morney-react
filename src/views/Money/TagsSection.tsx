import styled from "styled-components"
import {useTags} from "useTags"
import { createId } from "lib/createId"
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
type Props = {
    selected: number[];
    onChange: (selected: number[]) => void;
}
const TagsSection: React.FC<Props> = (props) =>{
    const {tags, setTags} = useTags();
    const selectedTagIds = props.selected;
    const addTag = () => {
        const tagName = window.prompt('新标签名称：')
        if(tagName!==null){
            setTags([...tags, {id: createId(), name: tagName}])
        }
    }
    const onToggleTag = (tagId: number) => {
        if(selectedTagIds.includes(tagId)) {
            props.onChange(selectedTagIds.filter(t=>t!==tagId))
        } else {
            props.onChange([...selectedTagIds, tagId])
        }
    }
    return (
        <Wrapper>
            
            <ol>
                {
                    tags.map((item, index) => (
                        <li key={item.id} onClick={() => {onToggleTag(item.id)}} className={selectedTagIds.indexOf(item.id) >= 0 ? 'selected' : ''}>{item.name}</li>
                    ))
                }
            </ol>
            <button onClick={addTag}>新增标签</button>
        </Wrapper>
    )
}

export {TagsSection}