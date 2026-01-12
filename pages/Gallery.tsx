import React, { useState } from 'react';

const Gallery: React.FC = () => {
    // Using placeholders for now, in a real app these would be actual project photos
    const projects = [
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1632759162351-375eaa30b777?auto=format&fit=crop&q=80&w=1200",
            category: "Residential",
            title: "Modern Shingle Replacement",
            location: "Houston, TX"
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?auto=format&fit=crop&q=80&w=1200",
            category: "Residential",
            title: "Full Roof Restoration",
            location: "Katy, TX"
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1505027492977-1037f14c46fa?auto=format&fit=crop&q=80&w=1200",
            category: "Commercial",
            title: "Apartment Complex Repair",
            location: "Sugar Land, TX"
        },
        {
            id: 4,
            image: "https://images.unsplash.com/photo-1541888941255-276f956f20dd?auto=format&fit=crop&q=80&w=1200",
            category: "Residential",
            title: "Custom Installation",
            location: "The Woodlands, TX"
        },
        {
            id: 5,
            image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200",
            category: "Residential",
            title: "Storm Damage Repair",
            location: "Pearland, TX"
        },
        {
            id: 6,
            image: "https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?auto=format&fit=crop&q=80&w=1200",
            category: "Repairs",
            title: "Leak Repair & Inspection",
            location: "Houston, TX"
        }
    ];

    const categories = ['All', 'Residential', 'Commercial', 'Repairs'];
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredProjects = activeCategory === 'All'
        ? projects
        : projects.filter(p => p.category === activeCategory);

    return (
        <div className="pt-20">
            <div className="bg-gray-900 text-white py-20 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-black uppercase mb-6">Project Gallery</h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        See our craftsmanship in action. From simple repairs to complete transformations.
                    </p>
                </div>
            </div>

            <div className="py-20 px-4 max-w-7xl mx-auto">
                {/* Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-6 py-2 rounded-full font-bold uppercase tracking-wide transition ${activeCategory === cat
                                    ? 'bg-red-600 text-white shadow-lg shadow-red-600/20'
                                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project) => (
                        <div key={project.id} className="group relative overflow-hidden rounded-2xl shadow-xl aspect-[4/3] cursor-pointer bg-gray-100">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-8">
                                <span className="text-red-500 font-bold text-sm uppercase tracking-widest mb-2">{project.category}</span>
                                <h3 className="text-white text-2xl font-bold uppercase leading-none mb-1">{project.title}</h3>
                                <p className="text-gray-400 text-sm">{project.location}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Gallery;
