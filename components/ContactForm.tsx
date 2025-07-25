'use client';

import React, { useState, useEffect } from 'react';
import { Send, CheckCircle, AlertCircle, ChevronDown } from 'lucide-react';
import { useSearchParams } from 'next/navigation';

const ContactForm = () => {
  const searchParams = useSearchParams();
  const pakketParam = searchParams.get('pakket') || '';
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    weddingDate: '',
    pakket: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    if (pakketParam && ["Basis", "Standaard", "Exclusief", "Aangepast"].includes(pakketParam)) {
      setFormData(prev => ({ ...prev, pakket: pakketParam }));
    }
  }, [pakketParam]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', weddingDate: '', pakket: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-black mb-2">
            Jullie Namen *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-beige rounded-lg focus:outline-none focus:shadow-[0_0_0_4px_rgba(218,165,32,0.15)] transition-shadow"
            placeholder="Jan & Marie Jansen"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-black mb-2">
            E-mailadres *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-beige rounded-lg focus:outline-none focus:shadow-[0_0_0_4px_rgba(218,165,32,0.15)] transition-shadow"
            placeholder="jullie@email.com"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="weddingDate" className="block text-sm font-medium text-black mb-2">
            Trouwdatum
          </label>
          <input
            type="date"
            id="weddingDate"
            name="weddingDate"
            value={formData.weddingDate}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-beige rounded-lg focus:outline-none focus:shadow-[0_0_0_4px_rgba(218,165,32,0.15)] transition-shadow"
          />
        </div>
        <div>
          <label htmlFor="pakket" className="block text-sm font-medium text-black mb-2">
            Pakket
          </label>
          <div className="relative">
            <select
              id="pakket"
              name="pakket"
              value={formData.pakket}
              onChange={handleChange}
              className="w-full px-4 pr-10 py-3 border border-beige rounded-lg focus:outline-none focus:shadow-[0_0_0_4px_rgba(218,165,32,0.15)] transition-shadow bg-white appearance-none"
            >
              <option value="">Selecteer een pakket</option>
              <option value="Basis">Basis</option>
              <option value="Standaard">Standaard</option>
              <option value="Exclusief">Exclusief</option>
              <option value="Aangepast">Aangepast</option>
            </select>
            <ChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gold w-5 h-5" />
          </div>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-black mb-2">
          Vertel ons over jullie bruiloft *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-beige rounded-lg focus:outline-none focus:shadow-[0_0_10px_2px_rgba(218,165,32,0.15)] transition-shadow resize-none"
          placeholder="Vertel ons over jullie trouwvisie, locatie, stijlvoorkeuren en eventuele speciale wensen..."
        />
      </div>

      {/* Submit Status */}
      {submitStatus === 'success' && (
        <div className="flex items-center space-x-2 text-green-600 bg-green-50 p-4 rounded-lg">
          <CheckCircle className="h-5 w-5" />
          <span>Dank jullie wel! Wij nemen binnen 24 uur contact met jullie op.</span>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="flex items-center space-x-2 text-red-600 bg-red-50 p-4 rounded-lg">
          <AlertCircle className="h-5 w-5" />
          <span>Er is iets misgegaan. Probeer het opnieuw of neem direct contact met ons op.</span>
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full bg-gold text-white px-8 py-4 rounded-lg font-medium flex items-center justify-center space-x-2 transition-all duration-300 hover:bg-[#8A7A5A] hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed`}
      >
        {isSubmitting ? (
          <>
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
            <span>Verzenden...</span>
          </>
        ) : (
          <>
            <Send className="h-5 w-5" />
            <span>Verstuur Bericht</span>
          </>
        )}
      </button>
    </form>
  );
};

export default ContactForm;