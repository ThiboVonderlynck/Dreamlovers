import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  email: string;
  weddingDate?: string;
  pakket?: string;
  message: string;
}

export function EmailTemplate({ name, email, weddingDate, pakket, message }: EmailTemplateProps) {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <div style={{ backgroundColor: '#f8f9fa', padding: '20px', borderRadius: '8px', marginBottom: '20px' }}>
        <h1 style={{ color: '#333', margin: '0 0 20px 0', fontSize: '24px' }}>
          Nieuwe Contact Formulier Inzending
        </h1>
      </div>
      
      <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', border: '1px solid #e9ecef' }}>
        <div style={{ marginBottom: '15px' }}>
          <strong style={{ color: '#333', display: 'inline-block', width: '120px' }}>Naam:</strong>
          <span style={{ color: '#666' }}>{name}</span>
        </div>
        
        <div style={{ marginBottom: '15px' }}>
          <strong style={{ color: '#333', display: 'inline-block', width: '120px' }}>Email:</strong>
          <span style={{ color: '#666' }}>{email}</span>
        </div>
        
        {weddingDate && (
          <div style={{ marginBottom: '15px' }}>
            <strong style={{ color: '#333', display: 'inline-block', width: '120px' }}>Trouwdatum:</strong>
            <span style={{ color: '#666' }}>{weddingDate}</span>
          </div>
        )}
        
        {pakket && (
          <div style={{ marginBottom: '15px' }}>
            <strong style={{ color: '#333', display: 'inline-block', width: '120px' }}>Gekozen Pakket:</strong>
            <span style={{ color: '#666' }}>{pakket}</span>
          </div>
        )}
        
        <div style={{ marginBottom: '15px' }}>
          <strong style={{ color: '#333', display: 'block', marginBottom: '5px' }}>Bericht:</strong>
          <div style={{ 
            color: '#666', 
            backgroundColor: '#f8f9fa', 
            padding: '15px', 
            borderRadius: '4px',
            whiteSpace: 'pre-wrap',
            lineHeight: '1.5'
          }}>
            {message}
          </div>
        </div>
      </div>
      
      <div style={{ 
        marginTop: '20px', 
        padding: '15px', 
        backgroundColor: '#f8f9fa', 
        borderRadius: '4px',
        fontSize: '12px',
        color: '#666',
        textAlign: 'center'
      }}>
        <em>Verzonden op: {new Date().toLocaleString('nl-BE')}</em>
      </div>
    </div>
  );
} 