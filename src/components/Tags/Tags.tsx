import * as React from 'react';

export interface ITagsProps {
    tags: ITag[];
}

export interface ITag {
    name?: string;
    display_name?: string;
    state?: string;
}

export const Tags: React.SFC<ITagsProps> = ({tags}) => {
    return(
        <div className="tags">
            <h2>Tags</h2>
            { tags.map((tag, id) => (
                <span className="tag" key={id}>{tag.name}&nbsp;</span>
            )) 
            }
        </div>
    )
}