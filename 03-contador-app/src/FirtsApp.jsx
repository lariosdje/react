import PropTypes from 'prop-types';

export const FirtsApp = ( {valor}) => {

  return (
    <>
      <h1> {valor} </h1>
      <p>Soy un subtitulo</p>
    </>
  )
}
 
FirtsApp.propTypes = {
  valor : PropTypes.string.isRequired
}

