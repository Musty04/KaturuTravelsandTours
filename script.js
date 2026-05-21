
        // Chatbot Functionality
        const chatbotBtn = document.getElementById('chatbotBtn');
        const closeChatbot = document.getElementById('closeChatbot');
        const chatbotWindow = document.getElementById('chatbotWindow');
        const chatbotMessages = document.getElementById('chatbotMessages');
        const chatbotInput = document.getElementById('chatbotInput');
        const sendMessage = document.getElementById('sendMessage');
        
        // Sample responses
        const responses = {
            "hello": "Hello! 👋 How can I assist you with your travel plans today?",
            "hi": "Hi there! What can I help you with?",
            "services": "We offer: ✈️ Flight Ticketing, 🕌 Umrah & Hajj Packages, 📋 Visa Assistance, 🏨 Hotel Reservations, 📞 Travel Consultation, and 👥 Group Travel services.",
            "contact": "You can reach us at: 📞 Phone: +234 806 941 1589 or +234 903 489 2200. 📧 Email: katurutravelsandtours@gmail.com",
            "flight": "We book domestic and international flights with the best prices. Please let us know your travel dates and destination.",
            "umrah": "Our Umrah packages include flights, accommodation, transportation, and guidance. We handle all documentation.",
            "hajj": "We offer comprehensive Hajj packages with complete spiritual guidance and logistical support.",
            "visa": "We assist with visa applications for various countries including UK, USA, Schengen, Dubai, and more.",
            "hotel": "We book hotels worldwide at competitive rates. Tell us your destination and travel dates.",
            "hours": "We're available 24/7 for your travel needs. You can contact us anytime!",
            "thanks": "You're welcome! 😊 Is there anything else I can help you with?",
            "default": "I'm here to help with travel services! You can ask about flights, visas, Umrah/Hajj, hotels, or contact information."
        };
        
        // Toggle chatbot window
        chatbotBtn.addEventListener('click', () => {
            chatbotWindow.style.display = chatbotWindow.style.display === 'block' ? 'none' : 'block';
        });
        
        closeChatbot.addEventListener('click', () => {
            chatbotWindow.style.display = 'none';
        });
        
        // Send message function
        function sendChatMessage() {
            const message = chatbotInput.value.trim();
            if (message) {
                // Add user message
                addMessage(message, 'user');
                chatbotInput.value = '';
                
                // Simulate typing
                setTimeout(() => {
                    // Get bot response
                    let response = "default";
                    const lowerMessage = message.toLowerCase();
                    
                    if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
                        response = "hello";
                    } else if (lowerMessage.includes('service')) {
                        response = "services";
                    } else if (lowerMessage.includes('contact')) {
                        response = "contact";
                    } else if (lowerMessage.includes('flight') || lowerMessage.includes('ticket')) {
                        response = "flight";
                    } else if (lowerMessage.includes('umrah')) {
                        response = "umrah";
                    } else if (lowerMessage.includes('hajj')) {
                        response = "hajj";
                    } else if (lowerMessage.includes('visa')) {
                        response = "visa";
                    } else if (lowerMessage.includes('hotel')) {
                        response = "hotel";
                    } else if (lowerMessage.includes('hour') || lowerMessage.includes('time')) {
                        response = "hours";
                    } else if (lowerMessage.includes('thank')) {
                        response = "thanks";
                    }
                    
                    addMessage(responses[response], 'bot');
                }, 500);
            }
        }
        
        // Add message to chat
        function addMessage(text, sender) {
            const messageDiv = document.createElement('div');
            messageDiv.classList.add('chatbot-message');
            messageDiv.innerHTML = `<p>${text}</p>`;
            if (sender === 'user') {
                messageDiv.style.textAlign = 'right';
                messageDiv.style.marginLeft = 'auto';
                messageDiv.querySelector('p').style.backgroundColor = '#e3f2fd';
                messageDiv.querySelector('p').style.borderRadius = '15px 15px 0 15px';
                messageDiv.querySelector('p').style.display = 'inline-block';
                messageDiv.querySelector('p').style.padding = '10px 15px';
                messageDiv.querySelector('p').style.maxWidth = '70%';
            } else {
                messageDiv.style.textAlign = 'left';
                messageDiv.querySelector('p').style.backgroundColor = '#f1f1f1';
                messageDiv.querySelector('p').style.borderRadius = '15px 15px 15px 0';
                messageDiv.querySelector('p').style.display = 'inline-block';
                messageDiv.querySelector('p').style.padding = '10px 15px';
                messageDiv.querySelector('p').style.maxWidth = '70%';
            }
            chatbotMessages.appendChild(messageDiv);
            chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
        }
        
        // Event listeners for sending messages
        sendMessage.addEventListener('click', sendChatMessage);
        chatbotInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                sendChatMessage();
            }
        });

        // Smooth scrolling for navigation
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
