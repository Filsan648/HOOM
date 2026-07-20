import React, { useState } from 'react';
import Title from '~/utilis/TitleSubtitle';
import { Contact } from 'lucide-react';
function Contacts() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Données envoyées :', formData);
    alert('Merci ! Votre message a bien été envoyé.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="min-h-screen  text-[#1a1a1a] font-sans antialiased selection:bg-stone-200">
      <div className="max-w-6xl mx-auto px-6 py-20 md:py-32">
         
         <Title 
          title="Discutons de votre prochain chapitre." 
          titlecolors="text-neutral-900" 
          subtitle="PRENDRE CONTACT"
          SubtitleStyle="text-yellow-600 bg-gray-400/5 text-xs font-mono border border-gray-400/20 px-3 py-1 rounded-full backdrop-blur-sm  mb-4 inline-flex"
          description="Qu'il s'agisse d'une collaboration, d'une question technique ou d'un simple café, notre boîte de réception est ouverte." 
          descriptionstyle="text-black/60 text-base md:text-lg mt-4 max-w-xl"
          icone={Contact} 
        />

        {/* GRILLE PRINCIPALE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* CÔTÉ GAUCHE : L'Élégance Classique (Typographie & Infos) */}
          <div className="lg:col-span-5 space-y-12 lg:sticky lg:top-20">
        

            {/* Ligne fine de séparation classique */}
            <div className="h-[1px] w-12 bg-stone-300"></div>

            {/* Coordonnées minimalistes */}
            <div className="space-y-6 text-sm font-light text-stone-600">
              <div>
                <h4 className="text-xs  uppercase  text-blue-400 mb-1">Écrivez-nous</h4>
                <a href="mailto:contact@monportfolio.com" className="text-base hover:text-blue-600 transition-colors border-b border-stone-200 hover:border-blue-600 pb-0.5">
                  sales@kyronet.net / support@kyronet.net
                </a>
              </div>
              
              <div>
                <h4 className="text-xs  uppercase  text-blue-400 mb-1">Discutons</h4>
                <a href="tel:+33600000000" className="text-base hover:text-stone-900 transition-colors">
                  +253 77 30 94 07
                </a>
              </div>

              <div>
                <h4 className="text-xs  uppercase  text-blue-400 mb-1">Basé à</h4>
                <p className="text-base text-stone-800">Djibouti-ville, Q6 , CLE</p>
              </div>
            </div>
          </div>

          {/* CÔTÉ DROIT : Le Formulaire Moderne (Géométrie & Clarté) */}
          <div className="lg:col-span-7  border   rounded-3xl p-8 sm:p-12 shadow-sm border-blue-600 hover:shadow-blue-500/5   ">
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* Champ Nom */}
              <div className="space-y-2">
                <label htmlFor="name" className="block text-xs font-medium uppercase  text-black/80">
                  Votre nom complet
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="IBRAHIM MAHDI FARAH"
                  className="w-full bg-stone-50/50 border border-stone-200 rounded-lg px-4 py-3.5 text-stone-900 placeholder-stone-400 text-sm focus:outline-none focus:border-stone-400 focus:bg-white transition-all duration-300"
                />
              </div>

              {/* Champ Email */}
              <div className="space-y-2">
                <label htmlFor="email" className="block text-xs font-medium uppercase  text-black/80">
                  Adresse email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="ibrahim@exemple.com"
                  className="w-full bg-stone-50/50 border border-stone-200 rounded-lg px-4 py-3.5 text-stone-900 placeholder-stone-400 text-sm focus:outline-none focus:border-stone-400 focus:bg-white transition-all duration-300"
                />
              </div>

              {/* Champ Message */}
              <div className="space-y-2">
                <label htmlFor="message" className="block text-xs font-medium uppercase  text-black/80">
                  Votre Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Parlez-nous de votre projet, de vos objectifs..."
                  className="w-full bg-stone-50/50 border border-stone-200 rounded-lg px-4 py-3.5 text-stone-900 placeholder-stone-400 text-sm focus:outline-none focus:border-stone-400 focus:bg-white transition-all duration-300 resize-none"
                />
              </div>

              {/* Bouton Classique & Moderne */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-stone-800 text-white font-medium text-sm uppercase tracking-widest py-4 px-6 rounded-lg transition-colors duration-300 shadow-md shadow-stone-900/10 active:scale-[0.99] transform"
                >
                  Envoyer le message
                </button>
              </div>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Contacts;