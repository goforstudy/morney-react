import { useState } from "react"
import { createId } from "lib/createId"
const defaultTags = [
    {id: createId(), name: '衣'},
    {id: createId(), name: '食'},
    {id: createId(), name: '住'},
    {id: createId(), name: '行'},
]
const useTags = () => {
    const [tags, setTags] = useState<{id: number; name: string}[]>(defaultTags)
    const findTag = (tagId: number) => tags.find(item => tagId === item.id)
    return {tags, setTags, findTag}
}

export {useTags}