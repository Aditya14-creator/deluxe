document.addEventListener("DOMContentLoaded", () => {
  // =====================================================
  // ELEMENTS
  // =====================================================
  const loginScreen = document.getElementById("loginScreen");
  const websiteScreen = document.getElementById("websiteScreen");
  const passwordInput = document.getElementById("passwordInput");
  const enterButton = document.getElementById("enterButton");
  const loginMessage = document.getElementById("loginMessage");
  const boxContainer = document.getElementById("boxContainer");

  const modal = document.getElementById("modal");
  const modalTitle = document.getElementById("modalTitle");
  const modalBody = document.getElementById("modalBody");
  const closeModal = document.getElementById("closeModal");

  const foodModal = document.getElementById("foodModal");
  const closeFoodModal = document.getElementById("closeFoodModal");
  const foodContainer = document.getElementById("foodContainer");

  const recipeModal = document.getElementById("recipeModal");
  const closeRecipeModal = document.getElementById("closeRecipeModal");
  const recipeImage = document.getElementById("recipeImage");
  const recipeTitle = document.getElementById("recipeTitle");
  const recipeIngredients = document.getElementById("recipeIngredients");
  const recipeSteps = document.getElementById("recipeSteps");

  const danceModal = document.getElementById("danceModal");
  const closeDanceModal = document.getElementById("closeDanceModal");
  const songList = document.getElementById("songList");
  const audioPlayer = document.getElementById("audioPlayer");
  const currentSong = document.getElementById("currentSong");
  const spotifyButton = document.getElementById("spotifyButton");

  const aiModal = document.getElementById("aiModal");
  const closeAiModal = document.getElementById("closeAiModal");
  const aiInput = document.getElementById("aiInput");
  const aiSendButton = document.getElementById("aiSendButton");
  const chatMessages = document.getElementById("chatMessages");
  const aiWorld = document.getElementById("aiWorld");
  const aiStatus = document.getElementById("aiStatus");

  // Naye Elements (Bhondu, Message, Gallery)
  const bhonduModal = document.getElementById("bhonduModal");
  const closeBhonduModal = document.getElementById("closeBhonduModal");
  const tileOurPics = document.getElementById("tileOurPics");
  const tileMessage = document.getElementById("tileMessage");

  const messageModal = document.getElementById("messageModal");
  const closeMessageModal = document.getElementById("closeMessageModal");

  const galleryModal = document.getElementById("galleryModal");
  const closeGalleryModal = document.getElementById("closeGalleryModal");
  const galleryTitle = document.getElementById("galleryTitle");
  const galleryGrid = document.getElementById("galleryGrid");

  // =====================================================
  // MAIN BOXES DATA
  // =====================================================
  const boxes = [
    { title: "Pakoras", image: "images/box-1.jpg", type: "food" },
    { title: "Nature", image: "images/box-3.jpg", type: "nature" },
    { title: "Dance", image: "images/box-4.jpg", type: "dance" },
    { title: "Khushi", image: "images/box-5.jpg", type: "ai" },
    // Drawing & Painting removed, Bhondu ki Baatein image updated to nature1.jpg
    { title: "Bhondu ki Baatein", image: "images/nature1.jpg", type: "bhondu" },
  ];

  // =====================================================
  // PHOTOS ARRAYS (UPDATED COUNTS)
  // =====================================================
  const naturePhotos = [
    "images/nature1.jpg",
    "images/nature2.jpg",
    "images/nature3.jpg",
    "images/nature4.jpg",
    "images/nature5.jpg",
    "images/nature6.jpg",
    "images/nature7.jpg",
    "images/nature8.jpg",
    "images/nature9.jpg",
    "images/nature10.jpg",
    "images/nature11.jpg",
    "images/nature12.jpg",
    "images/nature13.jpg",
    "images/nature14.jpg",
    "images/nature15.jpg",
    "images/nature16.jpg",
    "images/nature17.jpg",
    "images/nature18.jpg",
  ];

  const ourPicsPhotos = [
    "images/our1.jpg",
    "images/our2.jpg",
    "images/our3.jpg",
    "images/our4.jpg",
    "images/our5.jpg",
    "images/our6.jpg",
    "images/our7.jpg",
    "images/our8.jpg",
    "images/our9.jpg",
    "images/our10.jpg",
    "images/our11.jpg",
  ];

  // =====================================================
  // FOOD DATA
  // =====================================================
  const foods = [
    {
      title: "Sabudaane ka Halwa",
      image: "images/halwa.jpg",
      ingredients: [
        "1 cup sabudana",
        "2 cups milk",
        "4–5 tablespoons sugar",
        "1 tablespoon ghee",
        "2–3 cardamom pods",
        "Chopped almonds and cashews",
      ],
      steps: [
        "Wash and soak the sabudana until soft.",
        "Heat ghee and lightly roast the nuts.",
        "Add the soaked sabudana.",
        "Add milk and stir gently.",
        "Add sugar and cardamom.",
        "Cook until soft and creamy.",
        "Garnish with nuts and serve.",
      ],
    },
    {
      title: "Pakoras",
      image: "images/pakoras.jpg",
      ingredients: [
        "1 cup besan",
        "1 onion, thinly sliced",
        "1 green chilli",
        "Fresh coriander",
        "Turmeric",
        "Chilli powder",
        "Salt",
        "Water",
        "Oil",
      ],
      steps: [
        "Mix besan, spices and salt.",
        "Add water to make a thick batter.",
        "Add onion, chilli and coriander.",
        "Mix everything together.",
        "Cook small portions until golden and cooked through.",
        "Serve warm with chutney.",
      ],
    },
    {
      title: "Gup Chup",
      image: "images/gupchup.jpg",
      ingredients: [
        "Gup chup / pani puri shells",
        "Boiled potatoes",
        "Boiled chickpeas",
        "Tamarind chutney",
        "Mint-coriander chutney",
        "Chaat masala",
        "Spiced water",
      ],
      steps: [
        "Prepare the spiced water.",
        "Mash potatoes with chickpeas and spices.",
        "Make an opening in each puri.",
        "Add the filling.",
        "Add chutneys.",
        "Fill with spiced water.",
        "Serve immediately.",
      ],
    },
    {
      title: "Badam Shake",
      image: "images/badamshake.jpg",
      ingredients: [
        "10–12 almonds",
        "2 cups chilled milk",
        "2–3 teaspoons sugar",
        "2 cardamom pods",
        "Saffron, optional",
        "Chopped almonds",
      ],
      steps: [
        "Soak and peel the almonds.",
        "Blend almonds with a little milk.",
        "Add the remaining milk.",
        "Add sugar and cardamom.",
        "Blend until smooth.",
        "Chill and garnish with almonds.",
      ],
    },
    {
      title: "Hakka Noodles",
      image: "images/hakka-noodles.jpg",
      ingredients: [
        "Noodles",
        "Carrot",
        "Capsicum",
        "Cabbage",
        "Spring onion",
        "Soy sauce",
        "Chilli sauce",
        "Black pepper",
        "Salt",
        "Cooking oil",
      ],
      steps: [
        "Cook the noodles according to the package.",
        "Drain them.",
        "Cook the vegetables briefly.",
        "Add sauces.",
        "Add noodles and toss.",
        "Season with pepper and salt.",
        "Garnish with spring onion.",
      ],
    },
  ];

  // =====================================================
  // LOGIN LOGIC
  // =====================================================
  enterButton.addEventListener("click", async () => {
    const password = passwordInput.value;
    enterButton.disabled = true;
    loginMessage.textContent = "Checking...";

    try {
      const response = await fetch("/api/verify-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const data = await response.json();

      if (data.success) {
        loginScreen.classList.add("hidden");
        websiteScreen.classList.remove("hidden");
      } else {
        loginMessage.textContent = data.message;
        enterButton.disabled = false;
      }
    } catch (error) {
      loginMessage.textContent = "Server error. Please try again.";
      enterButton.disabled = false;
    }
  });

  passwordInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") enterButton.click();
  });

  // =====================================================
  // BOX GENERATION & CLICKS
  // =====================================================
  function createBoxes() {
    boxContainer.innerHTML = "";
    boxes.forEach((box, index) => {
      const element = document.createElement("div");
      element.className = "memory-box";
      element.style.backgroundImage = `url("${box.image}")`;
      element.innerHTML = `<div class="box-title">${box.title}</div>`;

      element.addEventListener("click", () => {
        if (box.type === "food") openFoodSection();
        else if (box.type === "dance") openDance();
        else if (box.type === "ai") openAiAssistant();
        else if (box.type === "bhondu") bhonduModal.classList.remove("hidden");
        else if (box.type === "nature") openGallery("Nature", naturePhotos);
        else openNormalBox(index);
      });
      boxContainer.appendChild(element);
    });
  }

  function openNormalBox(index) {
    const box = boxes[index];
    modalTitle.textContent = box.title;
    modalBody.innerHTML = box.content;
    modal.classList.remove("hidden");
  }

  closeModal.addEventListener("click", () => modal.classList.add("hidden"));
  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.classList.add("hidden");
  });

  // =====================================================
  // BHONDU KI BAATEIN & GALLERIES LOGIC
  // =====================================================
  closeBhonduModal.addEventListener("click", () =>
    bhonduModal.classList.add("hidden"),
  );

  tileOurPics.addEventListener("click", () => {
    bhonduModal.classList.add("hidden");
    openGallery("Our Pics ❤️", ourPicsPhotos);
  });

  tileMessage.addEventListener("click", () => {
    bhonduModal.classList.add("hidden");
    messageModal.classList.remove("hidden");
  });

  closeMessageModal.addEventListener("click", () =>
    messageModal.classList.add("hidden"),
  );

  function openGallery(title, photoArray) {
    galleryTitle.textContent = title;
    galleryGrid.innerHTML = "";

    photoArray.forEach((photoSrc) => {
      const img = document.createElement("img");
      img.src = photoSrc;
      img.style.width = "100%";
      img.style.height = "150px";
      img.style.objectFit = "cover";
      img.style.borderRadius = "8px";
      img.style.boxShadow = "0 4px 6px rgba(0,0,0,0.1)";
      galleryGrid.appendChild(img);
    });

    galleryModal.classList.remove("hidden");
  }

  closeGalleryModal.addEventListener("click", () =>
    galleryModal.classList.add("hidden"),
  );

  // =====================================================
  // FOOD & RECIPE
  // =====================================================
  function openFoodSection() {
    foodModal.classList.remove("hidden");
    createFoodCards();
  }

  function createFoodCards() {
    foodContainer.innerHTML = "";
    foods.forEach((food, index) => {
      const card = document.createElement("div");
      card.className = "food-card";
      card.style.backgroundImage = `url("${food.image}")`;
      card.innerHTML = `<div class="food-card-title">${food.title}</div>`;
      card.addEventListener("click", () => openRecipe(index));
      foodContainer.appendChild(card);
    });
  }

  function openRecipe(index) {
    const food = foods[index];
    recipeImage.src = food.image;
    recipeTitle.textContent = food.title;
    recipeIngredients.innerHTML = food.ingredients
      .map((ing) => `<li>${ing}</li>`)
      .join("");
    recipeSteps.innerHTML = food.steps
      .map((step) => `<li>${step}</li>`)
      .join("");
    recipeModal.classList.remove("hidden");
  }

  closeFoodModal.addEventListener("click", () =>
    foodModal.classList.add("hidden"),
  );
  closeRecipeModal.addEventListener("click", () =>
    recipeModal.classList.add("hidden"),
  );

  // =====================================================
  // DANCE / MUSIC
  // =====================================================
  function openDance() {
    danceModal.classList.remove("hidden");
    loadSongs();
  }

  closeDanceModal.addEventListener("click", () => {
    danceModal.classList.add("hidden");
    audioPlayer.pause();
  });

  async function loadSongs() {
    try {
      songList.innerHTML = `<p class="loading-songs">Loading songs...</p>`;
      const response = await fetch("/api/songs");
      const songs = await response.json();

      if (songs.length === 0) {
        songList.innerHTML = `<p class="no-songs">No songs found in the "songs" folder.</p>`;
        return;
      }

      songList.innerHTML = "";
      songs.forEach((song) => {
        const div = document.createElement("div");
        div.className = "song-item";
        div.innerHTML = `
          <span class="song-name">${song.name}</span>
          <button class="play-song-button" data-file="${song.file}">Play</button>
        `;
        songList.appendChild(div);
      });

      document.querySelectorAll(".play-song-button").forEach((btn) => {
        btn.addEventListener("click", (e) => {
          const file = e.target.getAttribute("data-file");
          audioPlayer.src = `/songs/${file}`;
          audioPlayer.play();
          currentSong.textContent = file.split(".")[0];
        });
      });
    } catch (err) {
      songList.innerHTML = `<p class="no-songs">Failed to load songs.</p>`;
    }
  }

  spotifyButton.addEventListener("click", () => {
    window.open("https://open.spotify.com", "_blank");
  });

  // =====================================================
  // AI ASSISTANT (KHUSHI - WITH HISTORY)
  // =====================================================
  let chatHistory = [];

  function openAiAssistant() {
    aiModal.classList.remove("hidden");
  }

  closeAiModal.addEventListener("click", () => {
    aiModal.classList.add("hidden");
  });

  aiSendButton.addEventListener("click", sendAiMessage);
  aiInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendAiMessage();
    }
  });

  async function sendAiMessage() {
    const text = aiInput.value.trim();
    if (!text) return;

    addChatMessage("user", text);
    aiInput.value = "";
    aiSendButton.disabled = true;
    aiStatus.textContent = "● Khushi is typing...";

    try {
      const response = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: text, history: chatHistory }),
      });

      const data = await response.json();
      const aiReply = data.answer
        ? data.answer
        : data.message || "Network me thodi dikkat hai.";

      addChatMessage("ai", aiReply);

      chatHistory.push({ role: "user", parts: [{ text: text }] });
      chatHistory.push({ role: "model", parts: [{ text: aiReply }] });

      if (data.energy) {
        aiWorld.className = `ai-world energy-${data.energy}`;
      }
    } catch (error) {
      addChatMessage("ai", "Sorry Purvi, connection me kuch issue hai abhi.");
    } finally {
      aiSendButton.disabled = false;
      aiStatus.textContent = "● Ready";
      aiInput.focus();
    }
  }

  function addChatMessage(sender, text) {
    const div = document.createElement("div");
    div.className = sender === "ai" ? "ai-message" : "user-message";
    div.innerHTML = `
      <div class="message-label">${sender === "ai" ? "KHUSHI" : "YOU"}</div>
      <div class="message-bubble">${text}</div>
    `;
    chatMessages.appendChild(div);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  // INITIALIZE
  createBoxes();
});
