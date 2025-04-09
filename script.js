const friends = [
    {
      name: "Siri",
      photo: "siri.jpg",
      song: "siri.mp3",
      desc: " Siri means wealth, prosperity, and abundance, often symbolizing something precious and auspicious. It is commonly associated with Goddess Lakshmi, representing good fortune and positivity. The name reflects a person who brings joy, grace, and blessings to everyone around."
    },
    {
      name: "Bindu",
      photo: "bindu.jpg",
      song: "bindu.mp3",
      desc: "Bindu means a dot or point, symbolizing the starting point of creation in spiritual and philosophical contexts. It holds deep significance in yoga, meditation, and Indian traditions, often representing focus, unity, and divine energy. The name reflects a person who is centered, graceful, and spiritually vibrant."
    },
    {
      name: "Daya",
      photo: "daya.jpg",
      song: "daya.mp3",
      desc: "Daya means compassion, kindness, and mercy. It is a highly respected quality, often associated with selflessness and a caring heart in spiritual and moral teachings. The name reflects a person who is gentle, empathetic, and brings comfort to others."
    }
    ,
    {
      name: "Madhavi",
      photo: "madhu.jpg",
      song: "madhu.mp3",
      desc: "Madhavi is derived from Madhu, meaning sweet, honey, or spring. It is also the name of a beautiful flowering creeper (Madhavi Lata) and is often associated with grace, elegance, and feminine charm. The name reflects a person who is sweet-natured, vibrant, and full of natural beauty."
    },
    {
      name: "Akanksha",
      photo: "akanksha.jpg",
      song: "akanksha.mp3",
      desc: "Akanksha means desire, wish, or aspiration. It symbolizes a person with strong ambitions, dreams, and a hopeful heart striving for growth and success. The name reflects someone who is driven, positive, and full of determination."
    },
    {
      name: "Akhila",
      photo: "akhila.jpg",
      song: "akhila.mp3",
      desc: "Akhila means complete, whole, or universal. It signifies someone who is well-rounded, all-encompassing, and balanced in qualities. The name reflects a person who is strong, wise, and brings harmony wherever she goes."
    },
    {
      name: "Manikeshwari",
      photo: "mani.jpg",
      song: "mani.mp3",
      desc: "Manikeshwari is a blend of “Mani” (meaning gem or jewel) and “Eshwari” (meaning goddess or supreme lady). It symbolizes a precious, divine, and radiant presence, often associated with beauty and spiritual strength. The name reflects a person who is rare, graceful, and shines with inner brilliance."
    },
    {
      name: "Dileep",
      photo: "dileep.jpg",
      song: "dileep.mp3",
      desc: "Dileep (also spelled Dilipa or Dilip) is of Sanskrit origin and means protector, king, or one who takes care of the people. It is the name of a noble and righteous king in ancient Indian scriptures, known for his virtue, humility, and devotion. The name reflects a person who is responsible, honorable, and deeply respectful."
    },
    {
      name: "Praveen",
      photo: "praveen.jpg",
      song: "praveen.mp3",
      desc: "Praveen (also spelled Pravin) means skilled, expert, or proficient. It is often used to describe someone who is talented, capable, and knowledgeable in their field. The name reflects a person who is smart, confident, and excels in whatever they do."
    },
    {
      name: "Prasad",
      photo: "prasad.jpg",
      song: "prasad.mp3",
      desc: "Prasad means blessing, offering, or divine gift, often referring to the sacred food offered to deities and then shared among devotees. It symbolizes grace, purity, and spiritual fulfillment. The name reflects a person who is humble, generous, and brings peace and positivity to others."
    },
    {
      name: "Jayasimha",
      photo: "jay.jpg",
      song: "jay.mp3",
      desc: "Jayasimha is derived from two Sanskrit words: “Jaya” meaning victory and “Simha” meaning lion. Together, it signifies a victorious lion — a symbol of strength, courage, and leadership. The name reflects a person who is brave, determined, and destined to lead with honor and power."
    }
  ];
  
  const container = document.getElementById('friendsContainer');
  
  friends.forEach(friend => {
    const card = document.createElement('div');
    card.className = 'friend-card';
  
    const audio = new Audio(friend.song);
    card.addEventListener('mouseenter', () => {
      audio.play();
    });
    card.addEventListener('mouseleave', () => {
      audio.pause();
      audio.currentTime = 0;
    });
  
    card.innerHTML = `
      <img src="${friend.photo}" class="friend-photo" alt="${friend.name}">
      <div class="friend-info">
        <div class="friend-name">${friend.name}</div>
        <div class="friend-desc">${friend.desc}</div>
      </div>
    `;
    container.appendChild(card);
  });
  