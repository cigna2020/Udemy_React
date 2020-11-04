import React from 'react';
import { ListGroup } from 'reactstrap';

import PostListItem from '../post-list-item'

const PostList = ({ posts, onDelete, onToggleImportent, onToggleLiked }) => {

    const elements = posts.map((item) => {
        const { id, ...itemProps } = item;
        return (
            <li key={id} className='list-group-item'>
                <PostListItem
                    {...itemProps}
                    onDelete={() => onDelete(id)}
                    onToggleImportent={() => onToggleImportent(id)}
                    onToggleLiked={() => onToggleLiked(id)}
                />
                {/* // label={item.label}
                    // important={item.important} /> */}
            </li>
        )
    })

    return (
        <ListGroup className="app-list">
            {elements}
        </ListGroup>
    )
}

export default PostList;