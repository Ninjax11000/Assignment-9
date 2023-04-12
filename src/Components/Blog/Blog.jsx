import React from 'react';

const Blog = () => {
    return (
        <div className='mx-8'>
            <ol className='list-decimal pl-3'>
                <li className='text-2xl'> 
                   <p className='font-bold'>When should you use context API?</p>
                   <p >The  context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Instead of passing props again again we use context API to pass props directly</p>
                    
                </li>
                <li className='text-2xl'>
                    <p className='font-bold'>What is a custom hook?</p>
                    <p>A custom hook is a special JavaScript function whose name starts with 'use' and can be used to call other hooks. </p>
                </li>
                <li className='text-2xl'>
                    <p className='font-bold'>What is useRef?</p>
                    <p>The useRef Hook allows you to persist values between renders.It can be used to store a mutable value that does not cause a re-render when updated.It can be used to access a DOM element directly.</p>
                </li>
                <li className='text-2xl'>
                    <p className='font-bold'>What is useMemo?</p>
                    <p>useMemo is a React Hook that lets you cache the result of a calculation between re-renders.</p>
                </li>
            </ol>
        </div>
    );
};

export default Blog;