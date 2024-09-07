import './ProjectInfo.scss';

const ProjectInfo = () => (
  <div>
    <h1>Hlib Bihma - React.js Software Developer</h1>
    <h3 className='projectInfo__subtitle'>
      Pet project that includes a table with default filtering of data obtained
      from the free API JSON Placeholder
    </h3>
    <div>
      <h4>
        Technologies:
        <ul>
          <li>Vite</li>
          <li>TanStack Table</li>
          <li>Redux Toolkit</li>
          <li>TypeScript</li>
          <li>HTML</li>
          <li>SCSS</li>
        </ul>
      </h4>
      <h4>
        Contacts:
        <ul>
          <li>
            <a
              href='https://www.linkedin.com/in/bigma/'
              target='_blank'
              rel='noopener noreferrer'
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href='https://github.com/GlebBigma'
              target='_blank'
              rel='noopener noreferrer'
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href='https://glebbigma.github.io/portfolio_2/'
              target='_blank'
              rel='noopener noreferrer'
            >
              CV
            </a>
          </li>
        </ul>
      </h4>
    </div>
  </div>
);

export default ProjectInfo;
