import './ListaUsuario.css'

const usuarios = [
  { id: 1, nome: 'Gio', idade: 24, email: "Gio@gmail.com" },
  { id: 2, nome: 'Gui', idade: 25, email: "Gui@gmail.com" },
  { id: 3, nome: 'Moreira', idade: 35, email: "Moreira@gmail.com" }
];


function ListaUsuarios(){
    return(
    <ul>
      {usuarios.map(usuario => 
        <li key={usuario.id}>
          id usuario:{usuario.id} {usuario.nome} tem {usuario.idade} de idade e seu email é {usuario.email}
        </li>
      )}
    </ul>
  );
}   

export default ListaUsuarios