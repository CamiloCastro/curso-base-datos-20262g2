import { BookOpen, CalendarDays, Clock, Download, ExternalLink, FileText, GraduationCap, Layers, Mail, PenLine, Presentation, Tag, Target, Users } from "lucide-react";
import { SiteNav } from "@/components/site-nav";

const links = {
  groupForm: "https://forms.gle/HdtA6kuNdZEffHRZ6",
  gradesView: "https://docs.google.com/spreadsheets/d/1gWF1N3QMYfWWe2AX1XuMpM5XOu1kh_mAm4qLmYVr1kk/edit?usp=sharing",
  gradesDownload: "https://docs.google.com/spreadsheets/d/1gWF1N3QMYfWWe2AX1XuMpM5XOu1kh_mAm4qLmYVr1kk/export?format=xlsx",
  gradesPreview: "https://docs.google.com/spreadsheets/d/1gWF1N3QMYfWWe2AX1XuMpM5XOu1kh_mAm4qLmYVr1kk/preview",
};

// Dirección del sitio publicado en GitHub Pages.
// El QR se regenera automáticamente al volver a compilar.
const courseUrl = "https://camilocastro.github.io/curso-base-datos-20262g2/";

const evaluation = [
  { name: "Parcial 1", note: "Se aplica al terminar el capítulo 6.", weight: 20 },
  { name: "Parcial 2", note: "Se aplica al terminar el capítulo 11.", weight: 20 },
  { name: "Proyecto — Entrega 1", note: "Modelo ER, requisitos y normalización.", weight: 15 },
  { name: "Proyecto — Entrega 2", note: "Implementación SQL e índices.", weight: 15 },
  { name: "Proyecto — Entrega 3 y sustentación", note: "Aplicación, documentación y presentación final.", weight: 20 },
  { name: "Quices y talleres de clase", note: "Actividades desarrolladas durante las sesiones.", weight: 10 },
];

const chapters: { n: number; sessions: number; topic: string; detail: string; slides?: string }[] = [
  { n: 1, sessions: 1, topic: "Introducción a las bases de datos", detail: "Conceptos básicos, importancia y evolución de las bases de datos · arquitectura cliente-servidor · integridad · roles: usuario final, DBA, programador y seguridad.", slides: "https://drive.google.com/file/d/1FRnLed6PEZHAEm-V_1KJbgNuo2FwPwvY/view?usp=sharing" },
  { n: 2, sessions: 2, topic: "Modelo Relacional I", detail: "De la realidad al modelo · requerimientos y comprensión del problema · entidades, atributos e identificadores · relaciones, cardinalidad 1:1, 1:N y N:M · opcionalidad (mínimo y máximo) · caso guiado y método de modelado.", slides: "https://drive.google.com/file/d/1E_EE6XokceAdvX2UAzobWwpa0CjANMFR/view?usp=sharing" },
  { n: 3, sessions: 3, topic: "Modelo Relacional II", detail: "Entidades débiles · atributos compuestos, multivaluados y derivados · relaciones con atributos · relaciones recursivas y ternarias." },
  { n: 4, sessions: 2, topic: "Modelo Relacional III", detail: "Generalización y especialización · jerarquías es-un · validación y refinamiento del diagrama ER · modelado de casos completos." },
  { n: 5, sessions: 2, topic: "Normalización", detail: "Dependencias funcionales · primera, segunda y tercera forma normal · BCNF · ejercicios integradores." },
  { n: 6, sessions: 2, topic: "Del modelo ER al relacional", detail: "Transformación de entidades y relaciones a tablas · claves primarias y foráneas · integridad referencial." },
  { n: 7, sessions: 3, topic: "Álgebra relacional", detail: "Selección · proyección · unión · diferencia · intersección · renombre · producto cartesiano · joins · división." },
  { n: 8, sessions: 2, topic: "SQL I: Consultas fundamentales", detail: "SELECT · filtros con WHERE · ordenamiento · alias · expresiones · funciones escalares." },
  { n: 9, sessions: 2, topic: "SQL II: Múltiples tablas y agregación", detail: "INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL JOIN y CROSS JOIN · agrupación · funciones de agregación · HAVING · subconsultas simples." },
  { n: 10, sessions: 2, topic: "SQL III: DDL y DML", detail: "CREATE, ALTER, DROP · tipos de datos · restricciones · INSERT, UPDATE, DELETE · transacciones básicas." },
  { n: 11, sessions: 2, topic: "SQL IV: DCL y vistas", detail: "GRANT y REVOKE · control de acceso · creación y uso de vistas · seguridad a través de vistas." },
  { n: 12, sessions: 2, topic: "Programación en bases de datos", detail: "Variables y estructuras de control · funciones y procedimientos almacenados · triggers · índices." },
  { n: 13, sessions: 1, topic: "Integración de aplicaciones", detail: "Conexión a bases de datos desde aplicaciones web · ODBC · JDBC · conector de Python." },
  { n: 14, sessions: 1, topic: "NoSQL y MongoDB", detail: "Modelos NoSQL · documentos y colecciones · operaciones básicas en MongoDB · comparación con el modelo relacional." },
];

const totalSessions = chapters.reduce((sum, c) => sum + c.sessions, 0);

// Parciales que se intercalan en la tabla del temario, después del capítulo indicado.
const examsAfterChapter: Record<number, string> = {
  6: "Parcial 1 · 20 % — fundamentos, modelo relacional y normalización",
  11: "Parcial 2 · 20 % — álgebra relacional y SQL completo",
};

const milestones = [
  { chapter: 6, label: "Parcial 1 · 20 %", desc: "Se aplica después de terminar el capítulo 6. Evalúa fundamentos, modelo relacional y normalización." },
  { chapter: 11, label: "Parcial 2 · 20 %", desc: "Se aplica después de terminar el capítulo 11. Evalúa álgebra relacional y SQL completo: consultas, DDL, DML y DCL." },
];

const deliverables = [
  {
    n: 1,
    content: "Requisitos, diagrama ER, modelo relacional y normalización.",
    deadline: "Por definir",
    weight: "15 %",
    details: [
      "Documento de requisitos del caso asignado.",
      "Diagrama entidad–relación completo y validado.",
      "Esquema relacional con claves primarias y foráneas.",
      "Análisis de dependencias funcionales y formas normales.",
    ],
  },
  {
    n: 2,
    content: "Base de datos implementada en MySQL, consultas SQL e índices.",
    deadline: "Por definir",
    weight: "15 %",
    details: [
      "Script de creación de tablas, relaciones y restricciones.",
      "Conjunto representativo de datos de prueba.",
      "Consultas SQL que respondan a los requisitos del negocio.",
      "Índices justificados según las consultas principales.",
    ],
  },
  {
    n: 3,
    content: "Aplicación conectada a la base de datos, documentación y sustentación.",
    deadline: "Por definir",
    weight: "20 %",
    details: [
      "Aplicación funcional que se conecte a la base de datos.",
      "Documentación técnica del diseño e implementación.",
      "Manual de usuario o instructivo de despliegue.",
      "Sustentación oral del proyecto en la última sesión.",
    ],
  },
];

const books = [
  ["Principal", "Silberschatz, A., Korth, H. F. y Sudarshan, S.", "Fundamentos de bases de datos, 5.ª edición, McGraw-Hill."],
  ["Complementaria", "Elmasri, R. y Navathe, S. B.", "Fundamentals of Database Systems, 7.ª edición, Pearson."],
  ["Complementaria", "Date, C. J.", "An Introduction to Database Systems, 8.ª edición, Addison-Wesley."],
  ["Complementaria", "Connolly, T. y Begg, C.", "Database Systems, 6.ª edición, Pearson."],
];

export default function Home() {
  return (
    <main>
      <header className="hero" id="inicio">
        <div className="hero-inner">
          <div className="institution"><GraduationCap /> Universidad Nacional de Colombia</div>
          <h1>Bases de Datos</h1>
          <p>Programa del curso · Contenido, evaluación y recursos académicos</p>
          <div className="hero-meta">
            <span><Tag /> Código 2016353</span>
            <span><Users /> Grupo 2</span>
            <span><Clock /> Martes y jueves · 4:00 – 6:00 p. m.</span>
          </div>
        </div>
      </header>

      <SiteNav />

      <section id="informacion">
        <div className="section-title"><GraduationCap /><h2>Información del curso</h2></div>
        <div className="course-info-wrapper">
          <div className="course-info">
            <div className="info-row"><span><Tag /> Código</span><strong>2016353</strong></div>
            <div className="info-row"><span><Users /> Grupo</span><strong>Grupo 2</strong></div>
            <div className="info-row"><span><Clock /> Horario</span><strong>Martes y jueves de 4:00 p. m. a 6:00 p. m.</strong></div>
            <div className="info-row"><span><GraduationCap /> Profesor</span><strong>Juan Camilo Castro Pinto</strong></div>
            <div className="info-row"><span><Mail /> Correo</span><a href="mailto:jccastrop@unal.edu.co">jccastrop@unal.edu.co</a></div>
          </div>
          <aside className="qr-card">
            <strong>Acceso al curso</strong>
            <img
              src={`https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(courseUrl)}`}
              alt="Código QR del sitio del curso"
              width={180}
              height={180}
            />
            <p>Escanea el código para ingresar a la página del curso.</p>
            <a href={courseUrl} target="_blank" rel="noreferrer">{courseUrl}</a>
          </aside>
        </div>
      </section>

      <section id="evaluacion">
        <div className="section-title"><FileText /><h2>Evaluación</h2></div>
        <p>La calificación final se distribuye entre dos parciales, un proyecto aplicado y las actividades desarrolladas durante las clases. Los parciales se programan inmediatamente después de terminar los capítulos que los sustentan.</p>
        <div className="table-wrap">
          <table>
            <thead><tr><th>Componente</th><th className="weight">Peso</th></tr></thead>
            <tbody>
              {evaluation.map((item) => (
                <tr key={item.name}>
                  <td>
                    <strong>{item.name}</strong>
                    <p className="comp-note">{item.note}</p>
                  </td>
                  <td className="weight">
                    <div className="weight-cell">
                      <strong>{item.weight} %</strong>
                      <div className="bar" aria-hidden="true"><i style={{ width: `${(item.weight / 20) * 100}%` }} /></div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot><tr><td><strong>Total</strong></td><td className="weight"><strong>100 %</strong></td></tr></tfoot>
          </table>
        </div>
      </section>

      <section id="proyecto">
        <div className="section-title"><Users /><h2>Proyecto del curso</h2></div>
        <p>El proyecto se desarrolla en <strong>grupos de tres personas</strong> y permite aplicar progresivamente los temas estudiados. Cada entrega debe cumplir con los elementos listados a continuación.</p>
        <a className="button" href={links.groupForm} target="_blank" rel="noreferrer">Registrar mi grupo <ExternalLink /></a>
        <h3>Entregas</h3>
        <div className="table-wrap">
          <table>
            <thead><tr><th>Entrega</th><th>Contenido</th><th>Fecha límite</th><th className="weight">Peso</th></tr></thead>
            <tbody>
              {deliverables.map((d) => (
                <tr key={d.n}>
                  <td><span className="delivery-n">{d.n}</span></td>
                  <td>
                    <strong>{d.content}</strong>
                    <ul className="deliverable-list">
                      {d.details.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                  </td>
                  <td><span className="unavailable">{d.deadline}</span></td>
                  <td className="weight"><strong>{d.weight}</strong></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section id="temario">
        <div className="section-title"><BookOpen /><h2>Temario por capítulos</h2></div>
        <p>El curso se organiza en 14 capítulos y {totalSessions} sesiones. Al finalizar el capítulo 6 se aplica el Parcial 1, y al finalizar el capítulo 11 se aplica el Parcial 2. La última sesión del curso está destinada a la sustentación del proyecto.</p>
        <div className="table-wrap syllabus">
          <table>
            <thead><tr><th>Capítulo</th><th>Sesiones</th><th>Tema y contenido</th><th>Presentación</th></tr></thead>
            <tbody>
              {chapters.flatMap((c) => {
                const rows = [
                  <tr key={c.n}>
                    <td className="session"><span>{c.n}</span></td>
                    <td className="sessions-count">{c.sessions}</td>
                    <td><strong>{c.topic}</strong><p>{c.detail}</p></td>
                    <td>
                      {c.slides
                        ? <a className="slides-link" href={c.slides} target="_blank" rel="noreferrer"><Presentation /> Ver presentación</a>
                        : <span className="unavailable">Por publicar</span>}
                    </td>
                  </tr>,
                ];
                const exam = examsAfterChapter[c.n];
                if (exam) {
                  rows.push(
                    <tr key={`exam-${c.n}`} className="exam-row">
                      <td colSpan={4}><span><PenLine /> {exam}</span></td>
                    </tr>,
                  );
                }
                return rows;
              })}
            </tbody>
          </table>
        </div>

        <h3>Momentos de evaluación</h3>
        <div className="milestones">
          {milestones.map((m) => (
            <article key={m.chapter} className="milestone-card">
              <span className="milestone-chapter">Después del capítulo {m.chapter}</span>
              <strong>{m.label}</strong>
              <p>{m.desc}</p>
            </article>
          ))}
          <article className="milestone-card final">
            <span className="milestone-chapter">Última sesión</span>
            <strong>Sustentación del proyecto final · 20 %</strong>
            <p>Demostración y sustentación de la entrega 3 del proyecto.</p>
          </article>
        </div>

        <div className="notice simple"><Layers /><div><strong>Material de clase</strong><p>Las presentaciones se habilitarán en la tabla de capítulos después de cada sesión.</p></div></div>
      </section>

      <section id="bibliografia">
        <div className="section-title"><BookOpen /><h2>Bibliografía</h2></div>
        <div className="references">
          {books.map(([type, author, title]) => <article key={title}><span>{type}</span><div><strong>{author}</strong><p><em>{title}</em></p></div></article>)}
        </div>
        <h3>Recursos oficiales</h3>
        <ul className="resource-list">
          <li><a href="https://dev.mysql.com/doc/" target="_blank" rel="noreferrer">Documentación oficial de MySQL <ExternalLink /></a></li>
          <li><a href="https://www.mongodb.com/docs/" target="_blank" rel="noreferrer">Documentación oficial de MongoDB <ExternalLink /></a></li>
        </ul>
      </section>

      <section id="notas">
        <div className="section-title"><Target /><h2>Notas del curso</h2></div>
        <p>Consulta aquí las calificaciones actualizadas. También puedes abrir la hoja completa o descargar una copia.</p>
        <div className="actions">
          <a className="button" href={links.gradesView} target="_blank" rel="noreferrer">Abrir hoja de notas <ExternalLink /></a>
          <a className="button secondary" href={links.gradesDownload}><Download /> Descargar Excel</a>
        </div>
        <iframe title="Notas del curso" src={links.gradesPreview} />
        <div className="notice"><CalendarDays /><div><strong>Actualización de calificaciones</strong><p>La hoja se actualiza después de cada evaluación. Reporta cualquier inconsistencia al correo del curso.</p></div></div>
      </section>

      <footer>
        <div className="footer-inner">
          <p><strong>Bases de Datos</strong> · Universidad Nacional de Colombia</p>
          <div className="footer-links">
            <a href="mailto:jccastrop@unal.edu.co">jccastrop@unal.edu.co</a>
            <a href="#inicio">Volver al inicio ↑</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
