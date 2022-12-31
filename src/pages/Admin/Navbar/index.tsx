import { NavLink } from 'react-router-dom';
import './styles.css';
import{Dispatch,SetStateAction} from'react'
interface INavAdminProps{
setState:Dispatch<SetStateAction<{type:string,active:boolean}>>
}


const Navbar = ({setState}:INavAdminProps) => {

  return (
    <nav className="admin-nav-container">
      <ul>
        <li>
          <button onClick={()=>setState({type:'produtos',active:true})} className="admin-nav-item">
            <p>Produtos</p>
          </button>
        </li>
        <li>
          <button onClick={()=>setState({type:'categorias',active:true})}  className="admin-nav-item">
            <p>Categorias</p>
          </button>
        </li>
        <li>
          <button onClick={()=>setState({type:'usuarios',active:true})}  className="admin-nav-item">
            <p>Usuários</p>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
