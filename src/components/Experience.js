import { CardExperience, ExperienceStyle } from '../styles/Experience'
import { Hr, TitleWhite } from '../styles/Components'

const Experience = () => (
  <ExperienceStyle>
    <TitleWhite>Experiencia</TitleWhite>
    <Hr />
    <CardExperience>
      <p className='card-date'>ACTUALMENTE</p>
      <div className='card-content'>
        <h1>Freelancer</h1>
        <p>¿Tienes un proyecto en mente? contactame ahora mismo para reunirnos y ejecutar esa gran idea.</p>
      </div>
    </CardExperience>
    <CardExperience>
      <p className='card-date'>MAYO 2016 - AGOSTO 2019</p>
      <div className='card-content'>
        <h1>Jefe de Departamento, FGR</h1>
        <p>Lidere el desarrolle e implementación del Sistema para la Automatización de la Información de los Procesos Sustantivos (SAPS) de la SEIDF. Dicho sistema se implementó en Ubuntu Server bajo el stack LAMP. Se configuró MySQL para aceptar conexiones remotas, y el server para conectarse via SSH.</p>
        <p>Para la parte del backend se creo un Micro Framework con diversas Bibliotecas de PHP. Para el manejo de rutas se utilizó PHPRoute, como ORM Eloquent, para las vistas Twig, para el envió de emails PHPMailer, para validar la información de los request PHPValidator y Angular 1 para el frontend.</p>
        <p>Parte de los retos de este sistema fueron la seguridad y la integridad de la información, además de poder compartir información desde un servidor de archivos montado en Windows Server.</p>
      </div>
    </CardExperience>
    <CardExperience>
      <p className='card-date'>OCTUBRE 2014 - ABRIL 2016</p>
      <div className='card-content'>
        <h1>Profesional Ejecutivo de Servicios Especializados, PGR</h1>
        <p>Creación de oficios relacionados con las funciones de la Dirección de Informatica y Estadistica de la SEIDF de la cual fui parte.</p>
        <p>Apoye en la creación del portal de Intranet de la SEIDF.</p>
        <p>Aporte mis conocimientos en la creación del Sistema para el manejo de información administrativa de la SEIDF. El frontend y gran parte de la logica de negocio estaba en Angular 1 y el backend en PHP, como Base de Datos se implemento MySQL.</p>
        <p>Mis primeras funciones dentro del area eran las de brindar soporte técnico a los usuarios de la Subprocuraduría entre las cuales se destacan, formateo de equipos de computo, respaldo de información, instalacion y configuracion de clientes de correo y PGP.</p>
      </div>
    </CardExperience>
    <CardExperience>
      <p className='card-date'>AGOSTO 2014 - ENERO 2015</p>
      <div className='card-content'>
        <h1>Residencias Profesionales, SECTUR</h1>
        <p>Durante seis meses participe en la creación del sistema para el control del Almacen e Inventario de la Secretaria de Salud a cargo del area de Sistemas de la DGTIC.</p>
        <p>La logica se implemento en PHP, se utilizo Bootstrap como Framework Frontend y la Base de Datos estaba en MySQL, la cual se migró a SQL Server.</p>
      </div>
    </CardExperience>
    <CardExperience>
      <p className='card-date'>SEPTIEMBRE 2013 - MARZO 2014</p>
      <div className='card-content'>
        <h1>Servicio Social, PGR</h1>
        <p>Durante seis meses estuve en la Dirección General de Tecnologias de la Información y Comunicación de la Procuraduria General de la Republica en donde pude aprender a realizar un cableado cumpliendo con los estandares y normas establecidas, además de configurar switches y conocer la estructura de red en grandes empresas.</p>
      </div>
    </CardExperience>
  </ExperienceStyle>
)

export default Experience
