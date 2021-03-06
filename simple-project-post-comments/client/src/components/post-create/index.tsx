import React, { useState } from 'react';
import axios from 'axios';

// import { Container } from './styles';

const PostCreate: React.FC = () => {
    const [content, setContent] = useState('');

    const onSubmit = async (event : any) => {
        event.preventDefault();

        await axios.post('http://localhost:3000/posts', {
            content
        });

        setContent('');
    }
  return (
      <div>
          <form onSubmit={onSubmit}>
              <div className='form-group'>
                  <label>What are you thinking?</label>
                  <input value={content} onChange={e => setContent(e.target.value)} className='form-control'/>
              </div>
              <button className='btn btn-primary'>Submit</button>
          </form>
      </div>
  );
}

export default PostCreate;