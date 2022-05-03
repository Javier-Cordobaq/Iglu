import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import NavAdmin from '../NavAdmin/NavAdmin'
import style from './SubirProyectos.module.css'
import { postProjects, getJobs } from '../../redux/actions'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Button } from '@material-ui/core';

const SubirProyectos = () => {

  /* Cloudinary */

  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "ywdsslmz");
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/iglubranding/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();
    setImagenes({
      ...imagenes,
      portada: file.secure_url,
    });
  };

  const imagen1 = async (e) => {
    const files2 = e.target.files;
    const data2 = new FormData();
    data2.append("file", files2[0]);
    data2.append("upload_preset", "ywdsslmz");
    const res2 = await fetch(
      "https://api.cloudinary.com/v1_1/iglubranding/image/upload",
      {
        method: "POST",
        body: data2,
      }
    );
    const file2 = await res2.json();
    setImagenes({
      ...imagenes,
      image1: file2.secure_url,
    });
  };

  const imagen2 = async (e) => {
    const files3 = e.target.files;
    const data3 = new FormData();
    data3.append("file", files3[0]);
    data3.append("upload_preset", "ywdsslmz");
    const res3 = await fetch(
      "https://api.cloudinary.com/v1_1/iglubranding/image/upload",
      {
        method: "POST",
        body: data3,
      }
    );
    const file3 = await res3.json();
    setImagenes({
      ...imagenes,
      image2: file3.secure_url,
    });
  };
  
/* ----------------------------------------------------- */
  
  const dispatch = useDispatch();
  const jobs = useSelector(c => c.jobs)

  const [creator, setCreators] = useState({
      name: '',
      task: ''
    })
  
  const [files, setFiles] = useState('')

  const [social, setSocial] = useState({
    facebook: '',
    instagram: '',
    twitter: '',
  })

  const [imagenes, setImagenes] = useState({
    portada: '',
    image1: '',
    image2: ''
  })

  const [state, setState] = useState({
    name: "",
    description: "",
    url: "",
    images: {},
    color:"",
    socialNetworks:{},
    type:"",
    creators:[]
  })

  const handleChange = (e) => {
    setState({...state, [e.target.name]: e.target.value}) 
  } 

  const handleChangeSocial = (e) => {
    setSocial({...social, [e.target.name]: e.target.value}) 
    setState({...state, socialNetworks: social})
  } 

  const handleChangeCreators = (e) => {
    setCreators({...creator, [e.target.name]: e.target.value}) 
  } 

  const handleAdd = () => {
    setState({...state, creators: [...state.creators, creator]})
    setCreators({
      name: '',
      task: ''
    })
  }

  const handleSumbit = (e) => {
    e.preventDefault();
    dispatch(postProjects(state))  
  } 

  useEffect(() => {
    dispatch(getJobs())
  }, [])

  useEffect(() => {
    setState({
      ...state,
      images: imagenes
    })
  }, [imagenes])

  return (
    <div className={style.paraUbicarNav}>
      <NavAdmin/>
        <form onSubmit={handleSumbit} className={style.centrar}>
        <div className={style.contInputs}>
          <h2>Subir Proyectos.</h2>

          <input 
          type="box" 
          placeholder='Name'
          className={style.inputs}
          name='name'
          value={state.name}
          onChange={handleChange}
          />

          <input 
          type="text" 
          placeholder='Color titulo'
          className={style.inputs}
          name='color'
          value={state.color}
          onChange={handleChange}
          />

                <div className={style.Select}>
                    <FormControl className={style.formControl} variant="outlined">
                    <InputLabel id="demo-simple-select-outlined-label">Tipo</InputLabel>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      value={state.type} 
                      name='type'
                      onChange={handleChange}
                      label="Tipo"
                    >
                      <MenuItem value="">
                        <em>Tipo</em>
                      </MenuItem>
                      {
                        jobs.length !== 0 ? jobs.job.map(c => (
                              
                        <MenuItem key={c._id} value={c.name}>{c.name}</MenuItem>
                        ))
                        :
                        null
                                                
                      }
                    </Select>
                    </FormControl>
                </div>     

                  <h2>Creadores.</h2>       
                        
                  <div className={style.creadores}> 
                    <input 
                    type="text" 
                    placeholder='Creador'
                    className={style.inputs}
                    name='name'
                    value={creator.name}
                    onChange={handleChangeCreators}
                    />

                    <input 
                    type="text" 
                    placeholder='Cargo'
                    className={style.inputs}
                    name='task'
                    value={creator.task}
                    onChange={handleChangeCreators}
                    />

                    <span onClick={handleAdd} className="material-icons-outlined">
                      add_circle_outline
                    </span>
                  </div>

                  <h2>Imagenes.</h2>

                    <div className={style.Buttons}>
                      <Button
                        variant="contained"
                        component="label"
                        fullWidth
                        >
                        Portada
                        <input
                          type="file"
                          name="file"
                          onChange={uploadImage}
                          hidden
                        />
                      </Button>
                    </div>

                    <div className={style.Buttons}>
                      <Button
                        variant="contained"
                        component="label"
                        fullWidth
                        >
                        Imagen 1
                        <input
                          type="file"
                          name="file"
                          onChange={imagen1}
                          hidden
                        />
                      </Button>
                    </div>

                    <div className={style.Buttons}>
                      <Button
                        variant="contained"
                        component="label"
                        fullWidth
                        >
                        Imagen 2
                        <input
                          type="file"
                          name="file"
                          onChange={imagen2}
                          hidden
                        />
                      </Button>
                    </div>

        </div>

          <div className={style.contInputs}>
              <h2>Redes Sociales.</h2>
              <input
              type="text"
              placeholder='Facebook'
              className={style.inputs}
              name='facebook'
              value={social.facebook}
              onChange={handleChangeSocial}
              />

              <input 
              type="text" 
              placeholder='Instagram'
              className={style.inputs}
              name='instagram'
              value={social.instagram}
              onChange={handleChangeSocial}
              />

              <input 
              type="text" 
              placeholder='Twitter'
              className={style.inputs}
              name='twitter'
              value={social.twitter}
              onChange={handleChangeSocial}
              />

              <h2>Url.</h2>

              <input 
              type="url" 
              placeholder='Url proyecto'
              className={style.inputs}
              name='url'
              value={state.url}
              onChange={handleChange}
              />

              <h2>Descripción.</h2>

              <textarea 
              className={style.description}
              type="text"  
              placeholder='Descripcion' 
              name="description" 
              rows="5" 
              onChange={handleChange} 
              required
              />
              
            <button>Subir</button>
            </div>
          </form>
    </div>
  )
}

export default React.memo(SubirProyectos);