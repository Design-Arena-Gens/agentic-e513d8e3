'use client'

import { useState } from 'react'

export default function Home() {
  const [selectedPet, setSelectedPet] = useState(null)

  const pets = [
    {
      id: 1,
      name: 'Buddy',
      type: 'Dog',
      breed: 'Golden Retriever',
      age: '2 years',
      description: 'Friendly and energetic, loves to play fetch and go on long walks.',
      image: '🐕'
    },
    {
      id: 2,
      name: 'Whiskers',
      type: 'Cat',
      breed: 'Persian',
      age: '3 years',
      description: 'Calm and affectionate, enjoys lounging in sunny spots and gentle petting.',
      image: '🐱'
    },
    {
      id: 3,
      name: 'Bella',
      type: 'Dog',
      breed: 'Labrador',
      age: '1 year',
      description: 'Playful puppy with lots of energy, great with kids and other pets.',
      image: '🐕'
    },
    {
      id: 4,
      name: 'Luna',
      type: 'Cat',
      breed: 'Siamese',
      age: '4 years',
      description: 'Vocal and intelligent, loves interactive toys and climbing.',
      image: '😺'
    },
    {
      id: 5,
      name: 'Max',
      type: 'Dog',
      breed: 'German Shepherd',
      age: '5 years',
      description: 'Loyal and protective, well-trained and great for families.',
      image: '🐕'
    },
    {
      id: 6,
      name: 'Oliver',
      type: 'Cat',
      breed: 'Maine Coon',
      age: '2 years',
      description: 'Gentle giant, friendly with everyone and loves to cuddle.',
      image: '🐈'
    }
  ]

  const styles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    },
    header: {
      background: 'rgba(255, 255, 255, 0.95)',
      padding: '2rem',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      textAlign: 'center',
    },
    title: {
      margin: 0,
      fontSize: '3rem',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
    },
    subtitle: {
      margin: '0.5rem 0 0 0',
      color: '#666',
      fontSize: '1.2rem',
    },
    main: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '3rem 2rem',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
      gap: '2rem',
      marginTop: '2rem',
    },
    card: {
      background: 'white',
      borderRadius: '15px',
      padding: '2rem',
      boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
      cursor: 'pointer',
      transition: 'transform 0.3s, box-shadow 0.3s',
      ':hover': {
        transform: 'translateY(-5px)',
        boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
      }
    },
    petImage: {
      fontSize: '5rem',
      textAlign: 'center',
      margin: '1rem 0',
    },
    petName: {
      fontSize: '1.8rem',
      margin: '0 0 0.5rem 0',
      color: '#333',
    },
    petType: {
      color: '#667eea',
      fontSize: '1.1rem',
      margin: '0 0 1rem 0',
    },
    petDetails: {
      color: '#666',
      lineHeight: '1.6',
    },
    modal: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0,0,0,0.7)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      zIndex: 1000,
    },
    modalContent: {
      background: 'white',
      borderRadius: '20px',
      padding: '3rem',
      maxWidth: '500px',
      width: '100%',
      position: 'relative',
    },
    closeButton: {
      position: 'absolute',
      top: '1rem',
      right: '1rem',
      background: 'none',
      border: 'none',
      fontSize: '2rem',
      cursor: 'pointer',
      color: '#999',
    },
    contactButton: {
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      border: 'none',
      padding: '1rem 2rem',
      fontSize: '1.1rem',
      borderRadius: '50px',
      cursor: 'pointer',
      marginTop: '1.5rem',
      width: '100%',
      fontWeight: 'bold',
    }
  }

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>🐾 Pet Paradise</h1>
        <p style={styles.subtitle}>Find Your Perfect Furry Friend</p>
      </header>

      <main style={styles.main}>
        <div style={styles.grid}>
          {pets.map(pet => (
            <div
              key={pet.id}
              style={styles.card}
              onClick={() => setSelectedPet(pet)}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)'
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)'
              }}
            >
              <div style={styles.petImage}>{pet.image}</div>
              <h2 style={styles.petName}>{pet.name}</h2>
              <p style={styles.petType}>{pet.breed} • {pet.age}</p>
              <p style={styles.petDetails}>{pet.description}</p>
            </div>
          ))}
        </div>
      </main>

      {selectedPet && (
        <div style={styles.modal} onClick={() => setSelectedPet(null)}>
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button style={styles.closeButton} onClick={() => setSelectedPet(null)}>×</button>
            <div style={styles.petImage}>{selectedPet.image}</div>
            <h2 style={styles.petName}>{selectedPet.name}</h2>
            <p style={styles.petType}>{selectedPet.type} - {selectedPet.breed}</p>
            <p style={styles.petDetails}>
              <strong>Age:</strong> {selectedPet.age}<br/>
              <strong>About:</strong> {selectedPet.description}
            </p>
            <button style={styles.contactButton}>Adopt {selectedPet.name}</button>
          </div>
        </div>
      )}
    </div>
  )
}
