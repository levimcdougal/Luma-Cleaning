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
import showerGlassBefore from '../assets/IMG_5331.jpg'
import showerDoorBefore from '../assets/IMG_5332.jpg'
import showerHandleBefore from '../assets/IMG_5333.jpg'
import showerFixtureBefore from '../assets/IMG_5334 (1).jpg'
import showerFixtureAfter from '../assets/IMG_5335.jpg'
import showerHandleAfter from '../assets/IMG_5336.jpg'
import showerDoorAfter from '../assets/IMG_5337.jpg'
import showerGlassAfter from '../assets/IMG_5338.jpg'
import residentialHallway from '../assets/IMG_4985.jpg'
import residentialKitchen from '../assets/IMG_4986.jpg'
import residentialVanity from '../assets/IMG_5155.jpg'
import residentialFaucet from '../assets/IMG_5265.jpg'
import residentialSink from '../assets/IMG_5266.jpg'
import residentialTileShower from '../assets/IMG_5295.jpg'
import residentialGlassShower from '../assets/IMG_5365.jpg'
import moveBefore1 from '../assets/b8.jpg'
import moveAfter1 from '../assets/a8.jpg'
import moveBefore2 from '../assets/b9.jpg'
import moveAfter2 from '../assets/a9.jpg'
import moveBefore3 from '../assets/b10.jpg'
import moveAfter3 from '../assets/a10.jpg'
import moveBefore4 from '../assets/b11.jpg'
import moveAfter4 from '../assets/a11.jpg'
import commercialBefore1 from '../assets/b12.jpg'
import commercialAfter1 from '../assets/a12.jpg'
import commercialBefore2 from '../assets/b13.jpg'
import commercialAfter2 from '../assets/a13.jpg'
import commercialFloor from '../assets/a14.jpg'
import deepKeypadBefore from '../assets/IMG_5118.jpg'
import deepKeypadAfter from '../assets/IMG_5121.jpg'
import deepFaucetBefore from '../assets/IMG_5200.jpg'
import deepFaucetAfter from '../assets/IMG_5201.jpg'
import deepTubBefore from '../assets/IMG_5206.jpg'
import deepTubAfter from '../assets/IMG_5208.jpg'
import deepSoakingTubBefore from '../assets/IMG_5296 (1).jpg'
import deepSoakingTubAfter from '../assets/IMG_5302.jpg'

const galleries = {
  'deep-cleaning': {
    title: 'Deep Cleaning Results',
    category: 'Deep Cleaning',
    additionalLabel: 'More Deep Cleaning Results',
    description: 'Before-and-after results from recent deep cleaning projects.',
    results: [
      {
        title: 'Bathtub Buildup Removal',
        images: [
          { src: deepSoakingTubBefore, label: 'Before', alt: 'Bathtub with visible residue and buildup before deep cleaning' },
          { src: deepSoakingTubAfter, label: 'After', alt: 'Clean bathtub after residue and buildup removal' },
        ],
      },
      {
        title: 'Tub & Shower Deep Clean',
        images: [
          { src: deepTubBefore, label: 'Before', alt: 'Bathtub beneath a glass shower screen before deep cleaning' },
          { src: deepTubAfter, label: 'After', alt: 'Refreshed bathtub beneath a glass shower screen after deep cleaning' },
        ],
      },
      {
        title: 'Faucet & Sink Detail',
        images: [
          { src: deepFaucetBefore, label: 'Before', alt: 'Metal faucet and sink surround with residue before deep cleaning' },
          { src: deepFaucetAfter, label: 'After', alt: 'Clean metal faucet and sink surround after detailed cleaning' },
        ],
      },
      {
        title: 'Wall Keypad Detail',
        images: [
          { src: deepKeypadBefore, label: 'Before', alt: 'Wall-mounted alarm keypad with accumulated grime before cleaning' },
          { src: deepKeypadAfter, label: 'After', alt: 'Wall-mounted alarm keypad after detailed cleaning' },
        ],
      },
    ],
  },
  'commercial-cleaning': {
    title: 'Commercial Cleaning Results',
    category: 'Commercial Cleaning',
    additionalLabel: 'More Commercial Results',
    description: 'Before-and-after results from a recent commercial cleaning project.',
    results: [
      {
        title: 'Play Area Mat Cleaning',
        images: [
          { src: commercialBefore1, label: 'Before', alt: 'Play area foam mats before commercial cleaning' },
          { src: commercialAfter1, label: 'After', alt: 'Play area foam mats after commercial cleaning' },
        ],
      },
      {
        title: 'Classroom Floor Cleaning',
        images: [
          { src: commercialBefore2, label: 'Before', alt: 'Classroom floor before commercial cleaning' },
          { src: commercialAfter2, label: 'After', alt: 'Classroom floor after commercial cleaning' },
          { src: commercialFloor, label: 'After', alt: 'Shining classroom floor after commercial cleaning' },
        ],
      },
    ],
  },
  residential: {
    title: 'Residential Cleaning Results',
    description: 'Before-and-after results from recent residential cleaning projects.',
    results: [
      {
        title: 'Shower Glass Deep Clean',
        images: [
          { src: showerGlassBefore, label: 'Before', alt: 'Cloudy shower glass with buildup before cleaning' },
          { src: showerGlassAfter, label: 'After', alt: 'Clear shower glass after deep cleaning' },
        ],
      },
      {
        title: 'Shower Door Refresh',
        images: [
          { src: showerDoorBefore, label: 'Before', alt: 'Shower door with cloudy residue before cleaning' },
          { src: showerDoorAfter, label: 'After', alt: 'Clean glass shower door after residue removal' },
        ],
      },
      {
        title: 'Shower Door & Handle Detail',
        images: [
          { src: showerHandleBefore, label: 'Before', alt: 'Shower glass and chrome door handle before cleaning' },
          { src: showerHandleAfter, label: 'After', alt: 'Polished chrome handle and clear shower glass after cleaning' },
        ],
      },
      {
        title: 'Shower Fixture Polish',
        images: [
          { src: showerFixtureBefore, label: 'Before', alt: 'Shower control and chrome trim with buildup before cleaning' },
          { src: showerFixtureAfter, label: 'After', alt: 'Clean shower control and polished chrome trim after cleaning' },
        ],
      },
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
      {
        title: 'Entryway Floor Refresh',
        image: residentialHallway,
        alt: 'Clean wood flooring and white baseboards in a residential entryway',
      },
      {
        title: 'Kitchen & Island Refresh',
        image: residentialKitchen,
        alt: 'Clean residential kitchen with a white island, cabinets, and wood flooring',
      },
      {
        title: 'Bathroom Vanity Detail',
        image: residentialVanity,
        alt: 'Clean bathroom vanity with a rectangular sink and neatly arranged towels and baskets',
      },
      {
        title: 'Chrome Faucet Polish',
        image: residentialFaucet,
        alt: 'Polished chrome bathroom faucet and handles on a stone countertop',
      },
      {
        title: 'Bathroom Sink Refresh',
        image: residentialSink,
        alt: 'Clean white bathroom sink with chrome fixtures and a stone countertop',
      },
      {
        title: 'Subway Tile Shower Clean',
        image: residentialTileShower,
        alt: 'Clean glass shower enclosure with white subway tile and a hexagonal tile floor',
      },
      {
        title: 'Glass Shower & Bathroom Detail',
        image: residentialGlassShower,
        alt: 'Clean bathroom with a glass shower enclosure, brass fixtures, and white tile',
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

function GalleryCard({ title, image, images, alt, contain, category = 'Residential Cleaning' }) {
  const afterPhotos = images?.filter(item => item.label === 'After') || []
  const hasMultipleAfters = afterPhotos.length > 1

  return (
    <figure className={`result-card gallery-page-card${hasMultipleAfters ? ' gallery-multi-after' : ''}`}>
      {images ? (
        <div className="result-pair">
          {images.map(item => (
            <div className="result-pair-item" key={item.src}>
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
        <span>{images ? 'Before & After' : category}</span>
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
                <p className="section-label">{gallery.additionalLabel || 'More Residential Results'}</p>
                <h2 className="section-title">Finished Spaces</h2>
              </div>
              <div className="gallery-page-grid gallery-page-grid-singles">
                {singleResults.map(result => <GalleryCard {...result} category={gallery.category} key={result.title} />)}
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
