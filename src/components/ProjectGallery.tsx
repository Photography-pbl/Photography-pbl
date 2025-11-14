import { ExternalLink } from 'lucide-react';
import { useState } from 'react';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Modern Architecture',
    category: 'Design',
    image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Contemporary architectural visualization',
  },
  {
    id: 2,
    title: 'Brand Identity',
    category: 'Branding',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Complete brand identity system',
  },
  {
    id: 3,
    title: 'Digital Interface',
    category: 'UI/UX',
    image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Intuitive mobile application design',
  },
  {
    id: 4,
    title: 'Creative Space',
    category: 'Photography',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Interior photography series',
  },
  {
    id: 5,
    title: 'Web Platform',
    category: 'Development',
    image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'E-commerce platform design',
  },
  {
    id: 6,
    title: 'Visual Identity',
    category: 'Branding',
    image: 'https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Corporate visual identity',
  },
];

function ProjectGallery() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">Selected Work</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A collection of projects that showcase creativity, innovation, and attention to detail
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer aspect-[4/3]"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div
                className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent transition-opacity duration-300 ${
                  hoveredId === project.id ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-sm font-medium text-gray-300 mb-2 block">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex items-center gap-2 text-sm font-medium">
                    <span>View Project</span>
                    <ExternalLink size={16} />
                  </div>
                </div>
              </div>

              <div
                className={`absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-900 transition-opacity duration-300 ${
                  hoveredId === project.id ? 'opacity-0' : 'opacity-100'
                }`}
              >
                {project.category}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectGallery;
