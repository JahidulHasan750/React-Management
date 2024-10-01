import React from 'react'
import Button from './Button'

const Sidebar = ({onStartAddProject, projects, onSelectProject, selectedProjectId}) => {
  return (
    <aside className='w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl'>
        <h2 className='mb-8 font-bold uppercase md:text-xl text-stone-200'>Your Project</h2>
        <div>
           <Button onClick={onStartAddProject}>+ Add Project</Button>
        </div>
        <ul className='mt-8'>
          {projects.map((projects)=>{
            let cssClass= 'w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200'

            if(projects.id=== selectedProjectId){
              cssClass +=' bg-stone-800 text-stone-200'
            }
            else{
              cssClass+=' text-stone-400'
            }


            return(<li key={projects.id}>
            <button onClick={()=>onSelectProject(projects.id)}
               className={cssClass}
               >{projects.title}</button>
          </li>)})}
        </ul>
    </aside>
  )
}

export default Sidebar