import { useState } from 'react'
import { useParams, Link } from 'react-router'
import Header from '../components/Header'
import { Container, Row, Col, Button, Modal } from 'react-bootstrap'
import PageTitle from '../components/PageTitle'
import Card from '../components/Card'
import TechTag from '../components/TechTag'
import SectionHeading from '../components/SectionHeading'
import ProjectStatus from '../components/ProjectStatus'
import { getProjectById } from '../data/projectsData'

// Component for individual image blocks
function ImageBlock({ image, onImageClick, imageIndex, totalImages }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  
  const handleImageLoad = () => {
    setImageLoaded(true);
  };
  
  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(false);
  };
  
  const handleClick = () => {
    if (image.src && imageLoaded && !imageError && onImageClick) {
      onImageClick(image);
    }
  };
  
  const handleKeyDown = (e) => {
    if ((e.key === 'Enter' || e.key === ' ') && image.src && imageLoaded && !imageError && onImageClick) {
      e.preventDefault();
      onImageClick(image);
    }
  };
  
  const imageLabel = image.alt || 'Project image';
  const clickableLabel = image.src && imageLoaded && !imageError 
    ? `${imageLabel}. Click to view full size image ${imageIndex + 1} of ${totalImages}.`
    : imageLabel;
  
  return (
    <article 
      className="project-image-block mb-4"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={image.src && imageLoaded && !imageError ? 0 : -1}
      role={image.src && imageLoaded && !imageError ? "button" : undefined}
      aria-label={clickableLabel}
      aria-describedby={image.description ? `image-desc-${image.id}` : undefined}
      style={{ cursor: (image.src && imageLoaded && !imageError) ? 'pointer' : 'default' }}
    >
      {image.src && !imageError ? (
        <>
          <img
            className="project-image"
            src={image.src}
            alt={image.alt || ''}
            onLoad={handleImageLoad}
            onError={handleImageError}
            style={{
              display: imageLoaded ? 'block' : 'none',
            }}
            aria-hidden={imageLoaded ? false : true}
          />
          {!imageLoaded && (
            <div 
              className="project-image-placeholder"
              role="status"
              aria-live="polite"
              aria-label={`Loading ${imageLabel}`}
            >
              <div className="text-center">
                <div className="spinner-border text-primary mb-2" role="status" aria-label="Loading image">
                  <span className="visually-hidden">Loading image...</span>
                </div>
                <p className="text-muted mb-0" aria-hidden="true">Loading image...</p>
              </div>
            </div>
          )}
        </>
      ) : (
        <div 
          className="project-image-placeholder"
          role="img"
          aria-label={image.alt || 'Image not available'}
        >
          <div className="text-center">
            <p className="text-muted mb-2" style={{ fontSize: '3rem' }} aria-hidden="true">📷</p>
            <p className="text-muted mb-0">{image.alt || 'Image not available'}</p>
          </div>
        </div>
      )}
      {(image.alt || image.description) && imageLoaded && !imageError && (
        <div className="project-image-caption">
          {image.alt && <h3 className="mb-1 fw-semibold">{image.alt}</h3>}
          {image.description && (
            <p id={`image-desc-${image.id}`} className="mb-0 small text-muted">{image.description}</p>
          )}
        </div>
      )}
    </article>
  );
}

// Modal component for full-size image viewing
function ImageModal({ show, onHide, image, images, currentIndex, onNavigate }) {
  if (!image) return null;
  
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft' && currentIndex > 0) {
      onNavigate(-1);
    } else if (e.key === 'ArrowRight' && currentIndex < images.length - 1) {
      onNavigate(1);
    } else if (e.key === 'Escape') {
      onHide();
    }
  };
  
  return (
    <Modal 
      show={show} 
      onHide={onHide} 
      size="xl" 
      centered
      className="image-modal"
      onKeyDown={handleKeyDown}
      aria-labelledby="modal-image-title"
      aria-describedby={image.description ? "modal-image-description" : undefined}
    >
      <Modal.Header closeButton style={{ backgroundColor: 'rgba(20, 20, 20, 0.95)', borderBottom: '1px solid rgba(168, 85, 247, 0.3)' }}>
        <Modal.Title id="modal-image-title" style={{ color: '#a855f7' }}>
          {image.alt || 'Image'} {images && images.length > 1 && `(${currentIndex + 1} of ${images.length})`}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ backgroundColor: 'rgba(20, 20, 20, 0.95)', padding: 0, textAlign: 'center' }}>
        <div className="modal-image-container">
          <img
            src={image.src}
            alt={image.alt || ''}
            className="modal-image"
          />
        </div>
        {images && images.length > 1 && (
          <div className="modal-navigation" role="group" aria-label="Image navigation">
            <Button
              variant="outline-primary"
              onClick={() => onNavigate(-1)}
              disabled={currentIndex === 0}
              className="modal-nav-button"
              aria-label={`Previous image: ${currentIndex > 0 ? images[currentIndex - 1].alt || 'Image' : ''}`}
              style={{ marginRight: '1rem' }}
            >
              ← Previous
            </Button>
            <span style={{ color: 'rgba(255, 255, 255, 0.7)', margin: '0 1rem' }} aria-live="polite" aria-atomic="true">
              <span className="visually-hidden">Image </span>
              {currentIndex + 1} <span className="visually-hidden">of</span> / {images.length}
            </span>
            <Button
              variant="outline-primary"
              onClick={() => onNavigate(1)}
              disabled={currentIndex === images.length - 1}
              className="modal-nav-button"
              aria-label={`Next image: ${currentIndex < images.length - 1 ? images[currentIndex + 1].alt || 'Image' : ''}`}
              style={{ marginLeft: '1rem' }}
            >
              Next →
            </Button>
          </div>
        )}
        {image.description && (
          <div className="modal-description" id="modal-image-description">
            <p className="mb-0">{image.description}</p>
          </div>
        )}
      </Modal.Body>
    </Modal>
  );
}

export default function ProjectDetail() {
  const { id } = useParams()
  const project = getProjectById(parseInt(id))
  const [selectedImage, setSelectedImage] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const handleImageClick = (image) => {
    if (project.images) {
      const index = project.images.findIndex(img => img.id === image.id);
      setCurrentImageIndex(index >= 0 ? index : 0);
      setSelectedImage(image);
      setShowModal(true);
    }
  };
  
  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedImage(null);
  };
  
  const handleNavigate = (direction) => {
    if (project.images) {
      const newIndex = currentImageIndex + direction;
      if (newIndex >= 0 && newIndex < project.images.length) {
        setCurrentImageIndex(newIndex);
        setSelectedImage(project.images[newIndex]);
      }
    }
  };

  if (!project) {
    return (
      <div className="page-container">
        <Header />
        <Container className="py-5 text-center">
          <PageTitle title="Project Not Found" subtitle="The project you're looking for doesn't exist." />
          <Button as={Link} to="/" variant="primary">
            Back to Home
          </Button>
        </Container>
      </div>
    )
  }

  return (
    <div className="page-container">
      <Header />
      <Container className="py-5">
        <Button as={Link} to="/" variant="outline-secondary" className="mb-4">
          ← Back to Projects
        </Button>
        
        <div className="mb-3">
          <ProjectStatus status={project.status} />
        </div>
        <PageTitle title={project.title} subtitle={project.fullDescription} />
        
        {/* Project Images */}
        <Row className="mb-5">
          <Col>
            <SectionHeading level={2} className="mb-4">Project Images</SectionHeading>
            {project.images && project.images.length > 0 ? (
              <>
                <Row className="g-4" role="list">
                  {project.images.map((image, index) => (
                    <Col key={image.id} xs={12} md={4} role="listitem">
                      <ImageBlock 
                        image={image} 
                        onImageClick={handleImageClick}
                        imageIndex={index}
                        totalImages={project.images.length}
                      />
                    </Col>
                  ))}
                </Row>
                <ImageModal
                  show={showModal}
                  onHide={handleCloseModal}
                  image={selectedImage}
                  images={project.images}
                  currentIndex={currentImageIndex}
                  onNavigate={handleNavigate}
                />
              </>
            ) : (
              <div className="text-center text-muted py-5">
                <p>No images available for this project.</p>
              </div>
            )}
          </Col>
        </Row>
        {/* Project Sections */}
        <Row className="g-4">
          {project.sections.map((section, index) => (
            <Col key={index} md={6} lg={4}>
              <Card title={section.title}>
                <p className="card-text">{section.content}</p>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}


