import { useState } from 'react';
import { Routes, Route, BrowserRouter, Link } from 'react-router-dom';
import Navbar from './Navbar';

import './styles.css';

const Admin = () => {
const [subPage, setSubPage]= useState< {type:string,active:boolean}>({type:'produtos',active:true})

  return (
    <div className="admin-container">
      <Navbar setState={setSubPage}/>
      <div className="admin-content">
{subPage.type==='produtos'&& subPage.active&&(<h1>Product CRUD</h1>)}
{subPage.type==='categorias'&& subPage.active&&(<h1>Category CRUD</h1>)}
{subPage.type==='usuarios'&& subPage.active&&(<h1>User CRUD</h1>)}


      </div>
    </div>
  );
};

export default Admin;
