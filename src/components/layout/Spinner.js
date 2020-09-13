import React from 'react'
import { BarLoader } from 'react-spinners'
import brand from '../../assets/img/brand.png'

const customStyles = {
  content : {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}

export default () => (
  <div className="main" style={customStyles.content}>
    <div>
    <img className="brand" src={brand} alt="Brand Name"/>
    <BarLoader
      sizeUnit={"px"}
      size={150}
      color={'#DC9292'}
    />
    </div>
  </div>
)