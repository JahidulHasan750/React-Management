import React, { useRef } from 'react'
import Input from './Input'
import Modal from './Modal';


const Project = ({onAdd, onCancel}) => {
  const title= useRef();
  const description= useRef();
  const dueDate= useRef();
  const modal = useRef();
 


  function handleSave(){
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    if (enteredTitle.trim()==='' || enteredDescription.trim()==='' || enteredDueDate.trim()===''){
      modal.current.open();
      return;
    }
    onAdd({
      title:enteredTitle,
      description:enteredDescription,
      dueDate:enteredDueDate
    })
  }
  return (
    <>
    <Modal ref={modal} buttonCaption='Okay'>
      <h2 className='text-xl font-bold text-stone-700 my-4'>Invalid Input</h2>
      <p className='text-stone-600 mb-4'>Opps... looks like you forgot to enter a value</p>
      <p className='text-stone-600 mb-4'>Please make sure you provide a valid value for every input field</p>
    </Modal>
    <div className='w-[35rem] mt-16 '>
        <menu className='flex items-center justify-end gap-4 my-4'>
            <li>
                <button onClick={onCancel} className='text-stone-800 hover:text-stone-900'>Cancel</button>
            </li>
            <li>
            <button onClick={handleSave} className='px-6 py-2 bg-stone-800 text-stone-50 hover:bg-stone-950 rounded-lg'>Save</button></li>
            </menu>
            <div>
              <Input type='text' ref={title} label="Title"></Input>
              <Input ref={description} label='Description' textarea></Input>
              <Input type='date' ref={dueDate} label="Due Date"></Input>
            </div>
       
    </div>
    </>
  )
}

export default Project