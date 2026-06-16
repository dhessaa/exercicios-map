import './ListaCarros'

const ListaCarros = ['Gol', 'Kwid', 'Santana', 'Ford Ka']

function ListaDeCarros(){
  return (
    <ul>
      {ListaCarros.map((carros, index, array) => {
        return (
          <li key={carros}>
            Nome do carro: {carros}, Index: {index}, Array: {array}
          </li>
        );
      })}
    </ul>
  );
}

export default ListaDeCarros
