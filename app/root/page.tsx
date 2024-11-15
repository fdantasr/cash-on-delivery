import { getAllProjects } from '@/actions';
import Link from 'next/link';

const RootPage = async () => {
  const projects = await getAllProjects();
  return (
    <div>
      {projects.map((project, index) => (
        <Link href={`/root/${project.id}`} key={index}>
          <h3>{project.title}</h3>
        </Link>
      ))}
    </div>
  );
};

export default RootPage;
