import React from 'react'
import Nav from '../Nav/Nav'
import style from '../Meeting/Meeting.module.css'

const Meeting = () => {
  return (
    <div>
        <Nav/>
        <div className={style.contenedor}>
            <div className={style.contImg}>

            </div>
            <div className={style.contForm}>
                <h1>Let’s get<br/> to Work</h1>
                <p>Lorem ipsum dolor sit amet, consectetuer
                adipiscing elit, sed diam nonummy nibh euismod
                tincidunt ut laoreet dolore magna aliquam erat
                volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis
                nisl ut</p>
                    <input 
                    type="text" 
                    placeholder='Name'
                    className={style.inputs}
                    />
                    <input 
                    type="text"
                    placeholder='Email'
                    className={style.inputs}
                    />
                    <input 
                    type="text" 
                    placeholder='Name of your busines'
                    className={style.inputs}
                    />
                    <input 
                    type="text" 
                    placeholder='Phone Number'
                    className={style.inputs}
                    />
                    <select className={style.select}>
                        <option>Give me the whole package</option>
                        <option>2</option>
                    </select>
                    <p>Interested in: </p>
            </div>
        </div>
    </div>
  )
}

export default Meeting