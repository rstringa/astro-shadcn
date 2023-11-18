import { useState, useEffect, useRef } from 'react'
import SearchPartCard from '@/components/SearchPartCard'
// import { MagicMotion } from 'react-magic-motion'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";


const Searchpart = () => {

  const [data, setData] = useState(null);
  const [paises, setPaises] = useState([]);
  const [paisElegido, setPaisElegido] = useState(null);
  const [ciudades, setCiudades] = useState([]);
  const [ciudadElegida, setCiudadElegida] = useState(null);
  const [personas, setPersonas] = useState([]);
  const [mostrarAsesores, setMostarAsesores] = useState(true);
  // const selectCiudadesRef = useRef();

  useEffect(() => {
    const dataUrl = '../asesores.json';

    fetch(dataUrl)
      .then((response) => {

        return response.json()
      })
      .then((jsonData) => {
        if (jsonData && jsonData.asesores) {
          setData(jsonData.asesores);
          setPaises(jsonData.asesores.map((item) => item.pais));
        } else {
          console.error('Los datos no tienen el formato esperado:', jsonData);
        }
      })
      .catch((error) => console.error('Error al cargar los datos', error));
  }, []);

  useEffect(() => {
    // Filtrar ciudades por el país elegido
    if (data && paisElegido) {
      const paisSeleccionado = data.find((item) => item.pais === paisElegido);
      if (paisSeleccionado) {
        setCiudades(paisSeleccionado.ciudades.map((ciudad) => ciudad.nombre));
      }
    }
  }, [data, paisElegido]);

  useEffect(() => {
    // Filtrar personas por la ciudad elegida
    if (data && paisElegido && ciudadElegida) {
      const paisSeleccionado = data.find((item) => item.pais === paisElegido);
      if (paisSeleccionado) {
        const ciudadSeleccionada = paisSeleccionado.ciudades.find((ciudad) => ciudad.nombre === ciudadElegida);
        if (ciudadSeleccionada) {
          setPersonas(ciudadSeleccionada.personas);
        }
      }
    }
  }, [data, paisElegido, ciudadElegida]);


  const handleCambioPais = (e) => {
    if (e !== null && e !== undefined) {
      console.log(e);
      setPaisElegido(e);
      setCiudadElegida(null); // Reiniciar la ciudad seleccionada al cambiar el país
      // selectCiudadesRef.current.selectedIndex = 0;
      // setMostarAsesores(false)
    }
  }

  const handleCambioCiudad = (e) => {
    setCiudadElegida(e);
  }

  return (
    <>
      {/* <MagicMotion> */}
      <div className='grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-4 mb-[24px]'>
        <div>
          <label htmlFor="paises" className='text-slate-500'>Seleccione País</label>

          <Select onValueChange={handleCambioPais}>
            <SelectTrigger className='mb-3 bg-slate-100'>
              <SelectValue placeholder="Selecciona un país" />
            </SelectTrigger>
            <SelectContent>
              {paises.map((pais, index) => (
                <SelectItem key={index} value={pais.toString()}>
                  {pais}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

        </div>

        <div>
          <label htmlFor="ciudades" className='text-slate-500'>Seleccione Ciudad</label>
          <br></br>
          <Select

            onValueChange={handleCambioCiudad}
          >
            <SelectTrigger className="mb-3 bg-slate-100">
              <SelectValue placeholder="Selecciona una ciudad" />
            </SelectTrigger>
            <SelectContent>

              {ciudades.map((ciudad, index) => (
                <SelectItem key={index} value={ciudad.toString()}>
                  {ciudad}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

        </div>
        <p className='md:mt-[-16px] text-slate-700'>Seleccione Pais y ciudad para ver sus asesores disponibles</p>
      </div>


      <div className="resultado-asesores">
        {ciudadElegida && (
          <>
            <h1 className='scroll-m-20 pb-[4px] text-3xl font-semibold tracking-tight text-orange-600'>{paisElegido} | {ciudadElegida}</h1>
            {/* <h3 className='scroll-m-20 py-[4px] text-1xl font-semibold tracking-tight text-slate-600'>{ciudadElegida}</h3> */}
            {personas.map((persona, index) => (

              <SearchPartCard
                key={index}
                nombre={persona.nombre}
                telefono={persona.telefono}
                direccion={persona.direccion}

              />
            ))}
          </>
        )}
      </div>
      {/* </MagicMotion> */}
    </>
  )
}

export default Searchpart



