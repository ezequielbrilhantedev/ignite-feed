import { PencilLine } from 'phosphor-react';

import style from './Sidebar.module.css';
import { Avatar } from './Avatar';

export function Sidebar() {
  return (
    <>
      <aside className={style.sidebar}>
        <img
          className={style.cover}
          src="https://images.unsplash.com/photo-1605379399642-870262d3d051?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <div className={style.profile}>
          <Avatar src="https://github.com/ezequielbrilhantedev.png" />
          <strong>Ezequiel Brilhante</strong>
          <span>Frontend Developer</span>
        </div>

        <footer>
          <a href="#">
            <PencilLine size={20} />
            Editar seu perfil
          </a>
        </footer>
      </aside>
    </>
  );
}
