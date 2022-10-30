import {  FormContainer, FormInput, FormSelect, Title, FormButton, MainContainer  } from "./styles";
import { useState } from "react";
import useForm from "../../hooks/useForm"


function Form({country, city}) {
  const [countryId, setCountryId]  = useState("")
  const [countryName, setCountryName] =useState("")
  const [cityName, setCityName] = useState("")
  const { form, onChange, cleanFields } = useForm({ name:"", email: "", phoneNumber: "", cpf:""});
 
  const fazerLogin = (event) => {
    event.preventDefault();
    if(!country || ! cityName){
      alert("Selecione país e cidade!")
    }
    else{
    console.log(form, countryName, cityName);
    cleanFields();
    alert("Formulário enviado!")
    }
  };

  const handleCountry = (event) =>{
    setCountryId(event.target.value)
    setCountryName([...countryName, (event.target.value)])
  }

  const handleCity = (event) =>{
    setCityName([...cityName, (event.target.value)])
  }
  const renderCountries = country.map((country) =>{

    return <option value={country.code}
    key={country?.code}
    >{country?.name_ptbr}</option>
  
})

const renderCities = city
  .filter(city =>{ return city?.country_code === countryId})
  .map((city) =>{   
  return  <option value={city.name}
  key={city?.id}>{city?.name}</option>
})


  return (
    <div>
           <form onSubmit={fazerLogin}>
  <MainContainer>
 
      <FormContainer>
     
     <Title>Dados Pessoais</Title>
  
      <FormInput
          name="name"
          value={form.name}
          onChange={onChange}
          placeholder="Nome"
          required
          type="text"
        />
        <br></br>
        <FormInput
          name="email"
          value={form.email}
          onChange={onChange}
          placeholder="E-mail"
          required
          type="email"
        />
      <br></br>
        <FormInput
          name="phoneNumber"
          value={form.phoneNumber}
          onChange={onChange}
          placeholder="Telefone"
          required
          pattern="^([0-9]{2})((3[0-9]{7})|(9[0-9]{8}))$"
          title="Insira um número de telefone com 9 digitos e o DDD"
          type="tel"
        />
        <br></br>
        <FormInput
          name="cpf"
          value={form.cpf}
          onChange={onChange}
          placeholder="CPF"
          required
          pattern="[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}"
          title="Insira um número de CPF com 9 dígitos"
          type="number"
        />
        </FormContainer>


        <FormContainer>
          <Title>Destinos de Interesse</Title>

         
        <FormSelect
        defaultValue= {['DEFAULT']}
        name="País"
        multiple
        required
        onChange={(event)=>handleCountry(event)}> 
        
       <option value={['DEFAULT']} disabled> -- selecione os países -- </option>
          {renderCountries} 
        </FormSelect> 
        <br></br>

        <FormSelect
        defaultValue={['DEFAULT']}
        name="Cidade"
        onChange={(event)=>handleCity(event)}
        required
        multiple>
           <option value= {['DEFAULT']} disabled> -- selecione as cidades -- </option>
          {renderCities} 
        </FormSelect>
        </FormContainer>

  </MainContainer>
  <center>
  <FormButton>Enviar</FormButton>
  </center>
  </form> 

    </div>
  );
}

export default Form;
