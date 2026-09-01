import { Link, Navigate, useParams } from 'react-router-dom'
import restaurantBefore1 from '../assets/b1.jpg'
import restaurantAfter1 from '../assets/a1.jpg'
import restaurantBefore2 from '../assets/b2.jpg'
import restaurantAfter2 from '../assets/a2.jpg'
import restaurantBefore3 from '../assets/b3.jpg'
import restaurantAfter3 from '../assets/a3.jpg'
import residentialBefore1 from '../assets/b4.jpg'
import residentialAfter1 from '../assets/a4.jpg'
import residentialBefore2 from '../assets/b5.jpg'
import residentialAfter2 from '../assets/a5.jpg'
import residentialBefore3 from '../assets/b6.jpg'
import residentialAfter3 from '../assets/a6.jpg'
import residentialOven from '../assets/pic.jpg'
import residentialMicrowave from '../assets/pic2.jpg'
import residentialCarpet from '../assets/pic3.jpg'
import residentialCleanOven from '../assets/IMG_0586.jpg'
import residentialCleanBathroom from '../assets/IMG_0587.jpg'
import residentialKitchenFloor from '../assets/IMG_0589.jpg'
import moveBefore1 from '../assets/b8.jpg'
import moveAfter1 from '../assets/a8.jpg'
import moveBefore2 from '../assets/b9.jpg'
import moveAfter2 from '../assets/a9.jpg'
import moveBefore3 from '../assets/b10.jpg'
import moveAfter3 from '../assets/a10.jpg'
import moveBefore4 from '../assets/b11.jpg'
import moveAfter4 from '../assets/a11.jpg'

const galleries = {
  residential: {
    title: 'Residential Cleaning Results',
    description: 'Before-and-after results from recent residential cleaning projects.',
    results: [
      {
        title: 'Bathtub Deep Clean',
        images: [
          { src: residentialBefore1, label: 'Before', alt: 'Residential bathtub before deep cleaning' },
          { src: residentialAfter1, label: 'After', alt: 'Residential bathtub after deep cleaning' },
        ],
      },
      {
        title: 'Bathroom Floor Detail',
        images: [
          { src: residentialBefore2, label: 'Before', alt: 'Residential bathroom floor before cleaning' },
          { src: residentialAfter2, label: 'After', alt: 'Residential bathroom floor after cleaning' },
        ],
      },
      {
        title: 'Shower Tile Detail',
        images: [
          { src: residentialBefore3, label: 'Before', alt: 'Residential shower tile before cleaning' },
          { src: residentialAfter3, label: 'After', alt: 'Residential shower tile after cleaning' },
        ],
      },
      {
        title: 'Stainless Steel Oven Detail',
        image: residentialOven,
        alt: 'Polished stainless steel residential wall oven',
      },
      {
        title: 'Microwave Deep Clean',
        image: residentialMicrowave,
        alt: 'Residential microwave after a detailed cleaning',
        contain: true,
      },
      {
        title: 'Freshly Cleaned Carpet',
        image: residentialCarpet,
        alt: 'Freshly cleaned residential living room carpet',
      },
      {
        title: 'Oven Interior Detail',
        image: residentialCleanOven,
        alt: 'Spotless residential oven interior and polished racks after cleaning',
      },
      {
        title: 'Full Bathroom Refresh',
        image: residentialCleanBathroom,
        alt: 'Freshly cleaned residential bathroom with polished fixtures and tile floor',
      },
      {
        title: 'Kitchen Floor Finish',
        image: residentialKitchenFloor,
        alt: 'Freshly cleaned residential kitchen floor and cabinets',
      },
    ],
  },
  'move-in-move-out': {
    title: 'Move In / Move Out Cleaning Results',
    description: 'Before-and-after results from a recent whole-home move cleaning project.',
    results: [
      {
        title: 'Living Room Floor Reset',
        images: [
          { src: moveBefore1, label: 'Before', alt: 'Living room hardwood floor before move cleaning' },
          { src: moveAfter1, label: 'After', alt: 'Living room hardwood floor after move cleaning' },
        ],
      },
      {
        title: 'Dining Area Floor Reset',
        images: [
          { src: moveBefore2, label: 'Before', alt: 'Dining area hardwood floor before move cleaning' },
          { src: moveAfter2, label: 'After', alt: 'Dining area hardwood floor after move cleaning' },
        ],
      },
      {
        title: 'Freezer Deep Clean',
        images: [
          { src: moveBefore3, label: 'Before', alt: 'Freezer interior before move cleaning' },
          { src: moveAfter3, label: 'After', alt: 'Freezer interior after move cleaning' },
        ],
      },
      {
        title: 'Stovetop Deep Clean',
        images: [
          { src: moveBefore4, label: 'Before', alt: 'Gas stovetop before move cleaning' },
          { src: moveAfter4, label: 'After', alt: 'Gas stovetop after move cleaning' },
        ],
      },
    ],
  },
  'restaurant-cleaning': {
    title: 'Restaurant Cleaning Results',
    description: 'Before-and-after results from a recent restaurant cleaning project.',
    results: [
      {
        title: 'Kitchen Floor Detail',
        images: [
          { src: restaurantBefore1, label: 'Before', alt: 'Restaurant kitchen floor before cleaning' },
          { src: restaurantAfter1, label: 'After', alt: 'Restaurant kitchen floor after cleaning' },
        ],
      },
      {
        title: 'Bar Surface Detail',
        images: [
          { src: restaurantBefore2, label: 'Before', alt: 'Restaurant bar surface before cleaning' },
          { src: restaurantAfter2, label: 'After', alt: 'Restaurant bar surface after cleaning' },
        ],
      },
      {
        title: 'Dining Area Floor Detail',
        images: [
          { src: restaurantBefore3, label: 'Before', alt: 'Restaurant dining area floor before cleaning' },
          { src: restaurantAfter3, label: 'After', alt: 'Restaurant dining area floor after cleaning' },
        ],
      },
    ],
  },
}

function GalleryCard({ title, image, images, alt, contain }) {
  return (
    <figure className="result-card gallery-page-card">
      {images ? (
        <div className="result-pair">
          {images.map(item => (
            <div className="result-pair-item" key={item.label}>
              <a href={item.src} target="_blank" rel="noreferrer" aria-label={`View full-size ${item.label.toLowerCase()} photo`}>
                <img src={item.src} alt={item.alt} />
              </a>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      ) : (
        <a href={image} target="_blank" rel="noreferrer" className="gallery-single-image" aria-label={`View full-size ${title} photo`}>
          <img src={image} alt={alt} className={`result-image${contain ? ' gallery-image-contain' : ''}`} />
        </a>
      )}
      <figcaption className="result-caption">
        <span>{images ? 'Before & After' : 'Residential Cleaning'}</span>
        <h2>{title}</h2>
      </figcaption>
    </figure>
  )
}

export default function Gallery() {
  const { service } = useParams()
  const gallery = galleries[service]

  if (!gallery) return <Navigate to="/services" replace />

  const comparisonResults = gallery.results.filter(result => result.images)
  const singleResults = gallery.results.filter(result => !result.images)

  return (
    <main className="page-wrapper">
      <section className="page-hero gallery-page-hero">
        <p className="section-label">Our Work</p>
        <h1>{gallery.title}</h1>
        <p>{gallery.description}</p>
        <Link to="/services" className="btn-outline gallery-back-link">← Back to Services</Link>
      </section>

      <section className="section section-alt">
        <div className="section-inner">
          {comparisonResults.length > 0 && (
            <div className="gallery-page-grid gallery-page-grid-comparison">
              {comparisonResults.map(result => <GalleryCard {...result} key={result.title} />)}
            </div>
          )}

          {singleResults.length > 0 && (
            <div className="gallery-additional-results">
              <div className="section-header gallery-section-header">
                <p className="section-label">More Residential Results</p>
                <h2 className="section-title">Finished Spaces</h2>
              </div>
              <div className="gallery-page-grid gallery-page-grid-singles">
                {singleResults.map(result => <GalleryCard {...result} key={result.title} />)}
              </div>
            </div>
          )}
          <div className="gallery-page-footer">
            <Link to="/services" className="btn-primary">← Back to Services</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
