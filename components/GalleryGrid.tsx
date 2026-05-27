'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const galleryItems = [
  { title: 'Resin Bound Surface',                  category: 'Resin Bound',  img: '/images/gallery-01.jpeg' },
  { title: 'Premium Patio Paving',                 category: 'Paving',       img: '/images/gallery-02.jpeg' },
  { title: 'Large Patio Installation',             category: 'Paving',       img: '/images/gallery-03.jpeg' },
  { title: 'Modern Paving Design',                 category: 'Paving',       img: '/images/gallery-04.jpeg' },
  { title: 'Tarmac Driveway Entrance',             category: 'Tarmac',       img: '/images/gallery-05.jpeg' },
  { title: 'Black Tarmac Driveway',                category: 'Tarmac',       img: '/images/gallery-06.jpeg' },
  { title: 'Grey Resin Driveway',                  category: 'Resin Bound',  img: '/images/gallery-07.jpeg' },
  { title: 'Excavator on Site',                    category: 'Groundworks',  img: '/images/gallery-08.jpeg' },
  { title: 'Resin Driveway Front',                 category: 'Resin Bound',  img: '/images/gallery-10.jpeg' },
  { title: 'Resin Bound Installation Materials',   category: 'Resin Bound',  img: '/images/gallery-11.jpeg' },
  { title: 'Resin Bound Setup',                    category: 'Resin Bound',  img: '/images/gallery-12.jpeg' },
  { title: 'Tarmac Installation',                  category: 'Tarmac',       img: '/images/gallery-13.jpeg' },
  { title: 'Resin Path with Sleepers',             category: 'Resin Bound',  img: '/images/gallery-14.jpeg' },
  { title: 'Landscaped Garden Area',               category: 'Groundworks',  img: '/images/gallery-16.jpeg' },
  { title: 'Resin Path Around Conservatory',       category: 'Resin Bound',  img: '/images/gallery-17.jpeg' },
  { title: 'Resin Surface Detailing',              category: 'Resin Bound',  img: '/images/gallery-18.jpeg' },
  { title: 'Block Paving Driveway Design',         category: 'Paving',       img: '/images/gallery-19.jpeg' },
  { title: 'Commercial Block Paving',              category: 'Paving',       img: '/images/gallery-20.jpeg' },
  { title: 'Commercial Block Paving Site',         category: 'Paving',       img: '/images/gallery-21.jpeg' },
  { title: 'Groundworks Preparation',              category: 'Groundworks',  img: '/images/gallery-22.jpeg' },
  { title: 'Fleet of Excavators',                  category: 'Groundworks',  img: '/images/gallery-25.jpeg' },
  { title: 'Resin Bound Driveway',                 category: 'Resin Bound',  img: '/images/gallery-26.jpeg' },
  { title: 'Resin Path Extension',                 category: 'Resin Bound',  img: '/images/gallery-27.jpeg' },
  { title: 'Curved Resin Driveway',                category: 'Resin Bound',  img: '/images/gallery-28.jpeg' },
  { title: 'Commercial Paving Pathway',            category: 'Paving',       img: '/images/gallery-29.jpeg' },
  { title: 'Large Tarmac Driveway',                category: 'Tarmac',       img: '/images/gallery-30.jpeg' },
  { title: 'Large Resin Driveway Entrance',        category: 'Resin Bound',  img: '/images/gallery-31.jpeg' },
  { title: 'Resin Driveway with Compass Design',   category: 'Resin Bound',  img: '/images/gallery-32.jpeg' },
  { title: 'Resin Compass Design Preparation',     category: 'Resin Bound',  img: '/images/gallery-34.jpeg' },
  { title: 'Tarmac Sports Court',                  category: 'Tarmac',       img: '/images/gallery-35.jpeg' },
  { title: 'Block Paving Pathway',                 category: 'Paving',       img: '/images/gallery-36.jpeg' },
  { title: 'Resin Path Beside House',              category: 'Resin Bound',  img: '/images/resin-path.jpeg' },
  { title: 'Large Resin Driveway',                 category: 'Resin Bound',  img: '/images/resin-grey.jpeg' },
  { title: 'Front Entrance Paving',                category: 'Paving',       img: '/images/tarmac-slate.jpeg' },
];

export default function GalleryGrid() {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {galleryItems.map((item, index) => (
          <motion.div
            key={`${item.title}-${index}`}
            className="relative overflow-hidden rounded-2xl"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: (index % 4) * 0.08 }}
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
